interface IConnection {
    address: string;
    status: Rx.Observable<ConnectionInfo>;

    serviceRegistry: Rx.Observable<ServiceRegistryDto>;
    serviceHealth: Rx.Observable<ServiceHealthDto[]>;
    serviceHealthUpdates: Rx.Observable<ServiceHealthUpdateDto>;

    serviceRegistryDataHubProxy: HubProxy;
    serviceHealthDataHubProxy: HubProxy;
    executionHubProxy: HubProxy;

    initialize(): Rx.Observable<{}>;
}
