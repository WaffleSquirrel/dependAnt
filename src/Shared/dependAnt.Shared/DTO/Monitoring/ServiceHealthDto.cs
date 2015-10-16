using dependAnt.Core.DTO.Execution;

namespace dependAnt.Core.DTO.Monitoring
{
    public class ServiceHealthDto
    {
        public ServiceLevelDto ServiceLevel { get; set; }

        public override string ToString()
        {
            return string.Format("Report Id: {0}", ServiceLevel != null && ServiceLevel.Id > 0 ? ServiceLevel.Id.ToString() : "-");
        }
    }
}