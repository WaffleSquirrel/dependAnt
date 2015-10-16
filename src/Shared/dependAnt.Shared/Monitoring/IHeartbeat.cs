namespace dependAnt.Core.Monitoring
{
    public interface IHeartbeat<out T>
    {
        bool IsHeartbeat { get; }
        T Update { get; }
    }
}