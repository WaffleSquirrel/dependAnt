namespace dependAnt.Core.DTO.Execution
{
    public class ServiceLevelRequestDto
    {
        public string InventoryId { get; set; }

        public override string ToString()
        {
            return string.Format("Service Identifier: {0}", InventoryId);
        }
    }
}