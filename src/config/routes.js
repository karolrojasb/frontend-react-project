import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic"

import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/signIn"
import NotFound from "../pages/not_found";



const routes = [
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
  {
    path: "*",
    layout: LayoutBasic,
    component: NotFound,
  }
]

export default routes;
