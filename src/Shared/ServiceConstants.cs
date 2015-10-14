namespace dependAnt.Core
{
    public static class ServiceConstants
    {
        public static class Server
        {
            public const string UsernameHeader = "User";

            // Service Catalog data
            public const string ServiceCatalogDataHub = "ServiceCatalogDataHub";
            public const string GetServiceCatalog = "GetServiceCatalog";

            // Service Catalog subscription
            public const string ServiceCatalogHub = "ServiceCatalogHub";
            public const string SubscribeToServiceCatalog = "SubscribeToServiceCatalog";
            public const string UnsubscribeFromServiceCatalog = "UnsubscribeFromServiceCatalog";

            // Service Level subscription
            public const string ServiceLevelHub = "ServiceLevelHub";
            public const string SubscribeToServiceLevelStream = "SubscribeToServiceLevelStream";
            public const string UnsubscribeFromServiceLevelStream = "UnsubscribeFromServiceLevelStream";

            // Monitoring subscription
            public const string MonitoringHub = "MonitoringHub";
            public const string SubscribeToMonitoring = "SubscribeToMonitoring";
            public const string UnsubscribeFromMonitoring = "UnsubscribeFromMonitoring";
            public const string MonitoringGroup = "MonitoringGroup";

            // Execution
            public const string ExecutionHub = "ExecutionHub";
            public const string Execute = "Execute";

            // Control
            public const string ControlHub = "ControlHub";
            public const string GetServiceLevelFeedThroughput = "GetServiceLevelFeedThroughput";
            public const string SetServiceLevelFeedThroughput = "SetServiceLevelFeedThroughput";
            public const string GetServiceLevelState = "GetServiceLevelState";
            public const string SetServiceLevelState = "SetServiceLevelState";            
        }

        public static class Client
        {
            public const string OnNewServiceCatalog = "OnNewServiceCatalog";
            public const string OnNewServiceLevel = "OnNewServiceLevel";
            public const string OnNewMonitoring = "OnNewMonitoring";
        }
    }
}