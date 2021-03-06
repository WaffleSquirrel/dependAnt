﻿using System.Web.Mvc;
using System.Web.Routing;

namespace dependAnt.Website
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "ApiInventorySearch",
                url: "home/inventory-search/{inventoryType}/{inventoryId}",
                defaults: new { controller = "Home", action = "ApiInventorySearch", inventoryType = UrlParameter.Optional, inventoryId = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}