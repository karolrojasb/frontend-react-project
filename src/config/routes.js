import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic"

import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn/SignIn"

import Home from "../pages/home";
import Contact from "../pages/contact";
import Profile from "../pages/Client/profile"

import NotFound from "../pages/not_found";

const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
]

const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
  {
    path: "/profile",
    layout: LayoutBasic,
    component: Profile,
  }
]

const routeNotFound = [
  {
    path: "*",
    layout: LayoutBasic,
    component: NotFound,
  }
]

const routes = [...routesAdmin, ...routesClient, ...routeNotFound]
export default routes;
