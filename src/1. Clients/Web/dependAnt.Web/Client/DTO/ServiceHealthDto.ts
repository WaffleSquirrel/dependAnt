class ServiceHealthDto {
    ServiceCatalogItemId: string;
    ServiceStatus: ServiceStatusDto;
    HealthLastChecked: Date;
    HealthDirection: ServiceHealthDirectionDto;
}
