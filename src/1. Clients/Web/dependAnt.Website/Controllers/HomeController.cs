using System.Web.Mvc;
using dependAnt.Website.Infrastructure.Communication.Hubs;
using dependAnt.Website.Infrastructure.Web;

namespace dependAnt.Website.Controllers
{
    /// <summary>
    /// The home MVC controller for the Web API UI.
    /// </summary>
    public class HomeController : BaseAntController<ConnectionBroadcaster>
    {
        /// <summary>
        /// Returns the default view for displaying the Home Page.
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            ViewBag.Title = "Send me on my way.";

            return View();
        }

        /// <summary>
        /// Returns the default view for displaying the API Inventory Search Page.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult ApiInventorySearch()
        {
            return View();
        }
    }
}