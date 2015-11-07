class ConnectionInfo {
    connectionStatus: ConnectionStatus;
    connectionType: ConnectionType;
    server: string;

    constructor(connectionStatus: ConnectionStatus, connectionType: ConnectionType, server: string) {
        this.connectionStatus = connectionStatus;
        this.connectionType = connectionType;
        this.server = server;
    }

    toString() {
        return "ConnectionStatus: " + this.connectionStatus + ", Type: " + this.connectionType + ", Server: " + this.server;
    }
}
