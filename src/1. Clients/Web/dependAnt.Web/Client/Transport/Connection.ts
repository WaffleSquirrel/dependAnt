class Connection implements IConnection {
    private _status: Rx.Subject<ConnectionInfo>;
    private _address: string;
    private _hubConnection: HubConnection;
    private _initialized: boolean;

    private _serviceRegistryDataHubProxy: HubProxy;
    private _serviceHealthDataHubProxy: HubProxy;
    private _executionHubProxy: HubProxy;

    private _serviceRegistry: Rx.Subject<ServiceRegistryDto>;
    private _serviceHealth: Rx.Subject<ServiceHealthDto[]>;
    private _serviceHealthUpdates: Rx.Subject<ServiceHealthUpdateDto>;

    public get status(): Rx.Observable<ConnectionInfo> {
        return this._status;
    }

    public get address(): string {
        return this._address;
    }

    public get serviceRegistryDataHubProxy(): HubProxy {
        return this._serviceRegistryDataHubProxy;
    }

    public get serviceHealthDataHubProxy(): HubProxy {
        return this.serviceHealthDataHubProxy;
    }

    public get executionHubProxy(): HubProxy {
        return this._executionHubProxy;
    }

    public get serviceRegistry(): Rx.Observable<ServiceRegistryDto> {
        return this._serviceRegistry;
    }

    public get serviceHealth(): Rx.Observable<ServiceHealthDto[]> {
        return this._serviceHealth;
    }

    public get serviceHealthUpdates(): Rx.Observable<ServiceHealthUpdateDto> {
        return this._serviceHealthUpdates;
    }

    constructor(address: string, username: string) {
        this._status = new Rx.BehaviorSubject(new ConnectionInfo(ConnectionStatus.Uninitialized, ConnectionType.None, address));
        this._address = address;

        if (address != "") {
            this._hubConnection = $.hubConnection(address);
        }
        else {
            this._hubConnection = $.hubConnection();
            this._address = window.location.protocol + "//" + window.location.host;
        }

        this._hubConnection.qs = { "User": username };

        this._hubConnection
            .disconnected(() => this.changeStatus(ConnectionStatus.Closed, ConnectionType.None))
            .connectionSlow(() => this.changeStatus(ConnectionStatus.ConnectionSlow, this.getConnectionType()))
            .reconnected(() => this.changeStatus(ConnectionStatus.Reconnected, this.getConnectionType()))
            .reconnecting(() => this.changeStatus(ConnectionStatus.Reconnecting, ConnectionType.None))
            .error(error => console.log(error));

        this._serviceRegistryDataHubProxy = this._hubConnection.createHubProxy("ServiceRegistryDataHub");
        this._serviceHealthDataHubProxy = this._hubConnection.createHubProxy("ServiceHealthDataHub");
        this._executionHubProxy = this._hubConnection.createHubProxy("ExecutionHub");

        this.installListeners();
    }

    private installListeners() {
        this._serviceRegistry = new Rx.Subject<ServiceRegistryDto>();
        this._serviceHealth = new Rx.Subject<ServiceHealthDto[]>();
        this._serviceHealthUpdates = new Rx.Subject<ServiceHealthUpdateDto>();

        this._serviceRegistryDataHubProxy.on("OnServiceRegistryUpdate", serviceRegistryUpdates => this._serviceRegistry.onNext(serviceRegistryUpdates));
        this._serviceHealthDataHubProxy.on("OnServiceHealthUpdate", serviceHealthUpdates => this._serviceHealthUpdates.onNext(serviceHealthUpdates));
    }

    private getConnectionType(): ConnectionType {
        switch (this._hubConnection.transports) {
            case "webSockets":
                return ConnectionType.WebScokets;
            case "foreverFrame":
                return ConnectionType.ForeverFrame;
            case "serverSentEvents":
                return ConnectionType.ServerSentEvents;
            case "longPolling":
                return ConnectionType.LongPolling;
            default:
                return ConnectionType.None;
        }
    }

    private changeStatus(newStatus: ConnectionStatus, connectionType: ConnectionType): void {
        this._status.onNext(new ConnectionInfo(newStatus, connectionType, this.address));
    }

    public initialize(): Rx.Observable<{}> {
        return Rx.Observable.create<{}>(observer=> {
            this.changeStatus(ConnectionStatus.Connecting, ConnectionType.None);

            console.log("Connecting to " + this._address + "...");

            this._hubConnection.start()
                .done(() => {
                    this.changeStatus(ConnectionStatus.Connected, this.getConnectionType());
                    observer.onNext(true);
                    console.log("Connected to " + this._address + ".");
                })
                .fail(() => {
                    this.changeStatus(ConnectionStatus.Closed, ConnectionType.None);
                    var error = "An error occured when starting SignalR connection.";
                    console.log(error);
                    observer.onError(error);
                });

            return Rx.Disposable.create(() => {
                console.log("Stopping connection...");
                this._hubConnection.stop();
                console.log("Connection stopped.");
            });
        })
        .publish()
        .refCount();
    }
}
