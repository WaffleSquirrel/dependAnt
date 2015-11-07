class AntFarm implements IAmAnAntFarm {
    initialize(username: string, servers: string[]): void {
    }

    get connectionStatusStream(): Rx.Observable<ConnectionInfo> {
        return null;
    }

    dispose(): void {
    }
}
