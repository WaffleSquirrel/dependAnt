using System.Web.Mvc;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace dependAnt.Website.Infrastructure.Web
{
    public abstract class BaseAntController<THub> : Controller where THub : Hub
    {
        public IHubConnectionContext<dynamic> Clients { get; private set; }

        public IGroupManager Groups { get; private set; }

        protected BaseAntController()
        {
            var hubContext = GlobalHost.ConnectionManager.GetHubContext<THub>();

            this.Clients = hubContext.Clients;
            this.Groups = hubContext.Groups;
        }
    }
}