using System;

namespace dependAnt.Core.Logging
{
    public interface ILoggerFactory
    {
        ILog Create(Type type);
    }
}