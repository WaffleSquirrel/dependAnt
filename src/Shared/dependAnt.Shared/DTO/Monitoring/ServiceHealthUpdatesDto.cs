using System.Collections.Generic;
using System.Linq;

namespace dependAnt.Core.DTO.Monitoring
{
    public class ServiceHealthUpdatesDto
    {
        public IEnumerable<ServiceHealthDto> CurrentHealth { get; set; }
        public IEnumerable<HistoricServiceHealthDto> History { get; set; }

        public ServiceHealthUpdatesDto()
        {
            CurrentHealth = Enumerable.Empty<ServiceHealthDto>();
            History = Enumerable.Empty<HistoricServiceHealthDto>();
        }

        public override string ToString()
        {
            return string.Format("CurrentPositions: {0}, History: {1}", string.Join(", ", CurrentHealth), string.Join(", ", History));
        }
    }
}