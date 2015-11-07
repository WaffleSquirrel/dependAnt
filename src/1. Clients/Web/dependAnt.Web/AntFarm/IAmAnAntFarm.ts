interface IAmAnAntFarm {
    connectionStatusStream: Rx.Observable<ConnectionInfo>;
    initialize(username: string, servers: string[]): void;
    dispose(): void;
} 