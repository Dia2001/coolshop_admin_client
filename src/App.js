import React from "react";
import DashBoardLayout from "./layouts/DashBoardLayout";

import { Routes, Route} from "react-router-dom";
import Request from "./pages/Request";
import DashBoard from "./pages/DashBoard";
import Notifition from "./pages/Notifition";
import Category from "./pages/Category";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";

function App() {
 
  return (
   
   <DashBoardLayout>
     <Routes>
      <Route path="/" element={<DashBoard/>}/>
      <Route path="Requests" element={<Request/>}/>
      <Route path="Notifitions" element={<Notifition/>}/>
      <Route path="Categories" element={<Category/>}/>
      <Route path="Orders" element={<Orders/>}/>
      <Route path="Products" element={<Products/>}/>
      <Route path="Customers" element={<Customers/>}/>
      <Route path="Employees" element={<Employees/>}/>
      <Route path="*" element={<h1>Not found</h1>}/>
    </Routes>   
   </DashBoardLayout>
   
  );
}

export default App;
