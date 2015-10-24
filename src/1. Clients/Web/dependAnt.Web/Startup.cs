using dependAnt.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;

[assembly: OwinStartup(typeof(Startup))]

namespace dependAnt.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);
            app.Map("/signalr", map =>
            {
                var hubConfiguration = new HubConfiguration
                {
                    // For debugging, turn on detailed error messages.
                    // You shouldn't have this turned on in a production environment.
                    EnableDetailedErrors = true,
                    EnableJSONP = true,
                    //Resolver = new AutofacSignalRDependencyResolver(container)
                };

                map.UseCors(CorsOptions.AllowAll)
                    .RunSignalR(hubConfiguration);
            });
        }
    }
}