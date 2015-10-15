namespace dependAnt.Core.DTO.Control
{
    public class ServiceLevelStateDto
    {
        public string Name { get; set; }
        public double ServiceLevel { get; set; }
        public bool Enabled { get; set; }
        public bool Stale { get; set; }

        public override string ToString()
        {
            return string.Format("Service Name: {0}, Service Level: {1}, Enabled: {2}, Stale: {3}", Name, ServiceLevel.ToString(), Enabled, Stale);
        }
    }
}