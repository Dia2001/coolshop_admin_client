import React from 'react'
import { NavLink } from 'react-router-dom';
const NavBar = () => {

  return (
    <div className='rounded-md items-center shadow-sm bg-Black5 min-h-[95vh]'>     
        <nav>
          <ul>
            <li><NavLink to="/Requests">Phản hồi</NavLink></li>
            <li><NavLink to="/Notifitions">Thông tin</NavLink></li>
            <li><NavLink to="/Categories">Danh mục</NavLink></li>
            <li><NavLink to="/Customers">Khách hàng</NavLink></li>
            <li><NavLink to="/Orders">Đơn hàng</NavLink></li>
            <li><NavLink to="/Products">Sản phẩm</NavLink></li>
            <li><NavLink to="/Employees">Nhân viên</NavLink></li>
          </ul>
        </nav>  
    </div>
  )
}

export default NavBar