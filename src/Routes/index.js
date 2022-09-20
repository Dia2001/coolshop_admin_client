import DashBoardLayout from "../layouts/DashBoardLayout";
import config from "../config"

import Request from "../pages/Request";
import DashBoard from "../pages/DashBoard";
import Notifition from "../pages/Notifition";
import Category from "../pages/Category";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Employees from "../pages/Employees";
import Customers from "../pages/Customers";
import Login from "../pages/Login";

export const publicRouter = [
  { path: config.routes.login, component: Login, layout: null },
]

export const privateRouter = [
  { path: config.routes.home, component: DashBoard, layout: DashBoardLayout },
  { path: config.routes.request, component: Request, layout: DashBoardLayout },
  { path: config.routes.notifition, component: Notifition, layout: DashBoardLayout },
  { path: config.routes.categories, component: Category, layout: DashBoardLayout },
  { path: config.routes.orders, component: Orders, layout: DashBoardLayout },
  { path: config.routes.products, component: Products, layout: DashBoardLayout },
  { path: config.routes.employees, component: Employees, layout: DashBoardLayout },
  { path: config.routes.customers, component: Customers, layout: DashBoardLayout },
]