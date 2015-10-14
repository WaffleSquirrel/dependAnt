namespace dependAnt.Core.Auth
{
    public interface IAuthTokenProvider
    {
        string AuthToken { get; }
    }
}