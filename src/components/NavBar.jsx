import React, { useContext, useState } from 'react'
import {
  MdDashboard, MdOutlineCategory, MdKeyboardArrowLeft,
  MdAddShoppingCart, MdOutlineLogout, MdKeyboardArrowRight,
} from 'react-icons/md'
import { TbUserExclamation } from 'react-icons/tb'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { HiOutlineBell, HiOutlineUser } from 'react-icons/hi'
import { GiClothes } from 'react-icons/gi'
import iconcoolshop from '../assets/logo.png'
import iconcoolshop1 from '../assets/logo-2.png'
import NavbarItem from './NavbarItem'
import LineHr from './LineHr'
import { useLocation } from 'react-router-dom'
import config from '../config'
import { AppContext } from '../Providers/ApplicationContext'

const NavBar = ({ toggleNavBar }) => {
  const location = useLocation()
  const [isShowNavBar, setIsShowNavBar] = useState(true)
  const { logout } = useContext(AppContext)

  const handleToggleNavBar = () => {
    if (typeof toggleNavBar === 'function') {
      toggleNavBar(!isShowNavBar)
    }
    setIsShowNavBar(prev => !prev)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div className='rounded-md p-3 items-center relative shadow-sm bg-white h-full flex flex-col justify-between'>
      <button
        onClick={handleToggleNavBar}
        className="rounded-full text-2xl absolute -right-4 top-4 bg-white shadow-lg hover:opacity-70 w-8 h-8 flex items-center justify-center">
        {isShowNavBar ?
          <>
            <MdKeyboardArrowLeft className='-mr-5' />
            <MdKeyboardArrowLeft />
          </>
          :
          <>
            <MdKeyboardArrowRight className='-mr-5' />
            <MdKeyboardArrowRight />
          </>
        }
      </button>

      <div className="absolute top-3 left-3 right-3">
        <img className="h-10 mb-3" src={isShowNavBar ? iconcoolshop : iconcoolshop1} alt="icon" />
        <LineHr />
      </div>

      <nav className=" mt-16 w-full">

        <NavbarItem
          active={location.pathname === config.routes.home}
          icon={MdDashboard}
          show={isShowNavBar}
          title="Dashboard"
          noti={3} to={config.routes.home} />

        <LineHr />

        <NavbarItem
          icon={TbUserExclamation}
          title="Phản hồi"
          show={isShowNavBar}
          active={location.pathname.includes(config.routes.request)}
          to={config.routes.request} />
        <NavbarItem
          active={location.pathname.includes(config.routes.notifition)}
          icon={HiOutlineBell}
          title="Thông báo"
          show={isShowNavBar}
          to={config.routes.notifition} />

        <LineHr />

        <NavbarItem
          active={location.pathname.includes(config.routes.categories)}
          show={isShowNavBar}
          icon={MdOutlineCategory} title="Danh muc" to={config.routes.categories} />

        <NavbarItem
          active={location.pathname.includes(config.routes.customers)}
          show={isShowNavBar}
          icon={HiOutlineUser} title="Khách hàng" to={config.routes.customers} />

        <NavbarItem
          active={location.pathname.includes(config.routes.orders)}
          show={isShowNavBar}
          icon={MdAddShoppingCart} title="Đơn hàng" to={config.routes.orders} noti={6} />

        <NavbarItem
          active={location.pathname.includes(config.routes.products)}
          show={isShowNavBar}
          icon={GiClothes} title="Sản phẩm" to={config.routes.products} />

        <NavbarItem
          active={location.pathname.includes(config.routes.employees)}
          show={isShowNavBar}
          icon={AiOutlineUsergroupAdd} title="Nhân viên" to={config.routes.employees} />

      </nav>

      <button className={`my-2 overflow-hidden hover:opacity-70 rounded-full ${isShowNavBar ? 'justify-center' : 'justify-start pl-3'} bg-white h-10 w-full border flex items-center shadow-md`}
        onClick={handleLogout}>
        <div className={`mr-3 flex items-center text-2xl`}>
          <MdOutlineLogout className="-ml-1" />
        </div>
        <div>Đăng xuất</div>
      </button>
    </div >
  )
}

export default NavBar
