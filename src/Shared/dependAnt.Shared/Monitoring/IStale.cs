namespace dependAnt.Core.Monitoring
{
    public interface IStale<out T>
    {
        bool IsStale { get; }
        T Update { get; }
    }
}