using System;

namespace dependAnt.Core.DTO.Monitoring
{
    public class HistoricServiceHealthDto
    {
        public DateTimeOffset Timestamp { get; set; }

        public override string ToString()
        {
            return string.Format("Timestamp: {0}", Timestamp);
        }
    }
}