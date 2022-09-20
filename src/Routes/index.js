import DashBoardLayout from "../layouts/DashBoardLayout";

import Request from "../pages/Request";
import DashBoard from "../pages/DashBoard";
import Notifition from "../pages/Notifition";
import Category from "../pages/Category";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Employees from "../pages/Employees";
import Customers from "../pages/Customers";
import Login from "../pages/Login";

export const publicRouter=[
    {path:'/',component:DashBoard,layout:DashBoardLayout},
    {path:'/requests',component:Request,layout:DashBoardLayout},
    {path:'/notifitions',component:Notifition,layout:DashBoardLayout},
    {path:'/categories',component:Category,layout:DashBoardLayout},
    {path:'/orders',component:Orders,layout:DashBoardLayout},
    {path:'/products',component:Products,layout:DashBoardLayout},
    {path:'/employees',component:Employees,layout:DashBoardLayout},
    {path:'/customers',component:Customers,layout:DashBoardLayout},
    {path:'/login',component:Login,layout:null},
    
]