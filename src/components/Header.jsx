import React, { useContext, useState } from "react";
import { MdSearch, MdOutlineSettings, MdDashboard, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"
import { AppContext } from "../Providers/ApplicationContext";

const Header = ({ isShowMenu, toggleMenu }) => {
  const { userLogin } = useContext(AppContext);
  const [isShowHintAccount, setIsShowHintAccount] = useState()

  const handleHintAccount = () => {
    setIsShowHintAccount(prev => !prev)
  }

  return (
    <div className="sticky top-0 flex h-12 w-full bg-white justify-between p-0 shadow-md rounded-lg pr-3">
      <div className="flex items-center pl-2">
        <MdDashboard size={30} />
        <h5 className="my-0 px-2">Dashboard</h5>
      </div>

      <div className="flex items-center">
        <input type="text" className="rounded-full mr-2 border border-black px-3"
          placeholder='Tìm kiếm thông tin' />
        <button className='text-2xl rounded-full bg-white shadow-md hover:opacity-70 border-2 w-8 h-8 flex items-center justify-center'>
          <MdSearch />
        </button>
      </div>
      <div className="flex items-center relative justify-evenly">

        <button onClick={handleHintAccount}
          className="rounded-full shadow-gray-300 shadow-md border min-w-[50px] hover:opacity-70 h-6 px-2">
          {userLogin ? userLogin.username : 'user name'}
        </button>

        <img className="w-8 h-8 mx-2 rounded-full"
          src="https://wallpapers.gg/wp-content/uploads/2017/08/Avatar-2009-Neytiri-1680x1050.jpg" alt="" />

        {isShowHintAccount ?
          <>
            <MdKeyboardArrowUp />
            <div className="absolute w-32 flex flex-col items-center h-auto p-2 bg-white rounded-lg shadow-lg top-14">
              <button
                className="rounded-full w-full shadow-gray-300 shadow-md border min-w-[50px] hover:opacity-70 h-6 px-2">
                Thông tin
              </button>
              <button
                className="rounded-full w-full mt-2 shadow-gray-300 shadow-md border min-w-[50px] hover:opacity-70 h-6 px-2">
                Cài đặt
              </button>
            </div>
          </>
          :
          <MdKeyboardArrowDown />
        }

        <button onClick={() => toggleMenu(!isShowMenu)} className="text-3xl ml-5 hover:opacity-70">
          <MdOutlineSettings />
        </button>
      </div>

    </div>
  );
};

export default Header
