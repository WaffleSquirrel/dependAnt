using System;

namespace dependAnt.Core.DTO.Execution
{
    public class ServiceLevelDto
    {
        public int Id { get; set; }
        public DirectionDto Direction { get; set; }
        public DateTime LastChecked { get; set; }
        public ServiceLevelStatusDto Status { get; set; }

        public override string ToString()
        {
            return string.Format("Id: {0}, Direction: {1}, Last Checked: {2}, Status: {3}", Id, Direction, LastChecked, Status);
        }
    }
}