import React from 'react'
import { NavLink } from 'react-router-dom';
const NavBar = () => {

  return (
    <div className='rounded-md items-center shadow-sm bg-Black5 min-h-[95vh]'>     
        <nav>
          <ul>
          <li><NavLink to="/login">test login</NavLink></li>
            <li><NavLink to="/requests">Phản hồi</NavLink></li>
            <li><NavLink to="/notifitions">Thông tin</NavLink></li>
            <li><NavLink to="/categories">Danh mục</NavLink></li>
            <li><NavLink to="/customers">Khách hàng</NavLink></li>
            <li><NavLink to="/orders">Đơn hàng</NavLink></li>
            <li><NavLink to="/products">Sản phẩm</NavLink></li>
            <li><NavLink to="/employees">Nhân viên</NavLink></li>
          </ul>
        </nav>  
    </div>
  )
}

export default NavBar