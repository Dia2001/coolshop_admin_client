import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MenuProfile from "../components/MenuProfile"

const DashBoardLayout = ({ children }) => {
  const [isShowNavBar, setIsShowNavBar] = useState(true)
  const [isShowMenuBar, setIsShowMenuBar] = useState(false)

  const handleCallbackIsShowNavBar = (status) => {
    setIsShowNavBar(status)
  }

  const handleToggleMenu = (status) => {
    setIsShowMenuBar(status)
  }

  return (
    <div className="text-BlackCool bg-GradientO1">
      <div className="flex relative">
        <div className={`${isShowNavBar ? 'w-[200px]' : 'w-[64px]'} h-[100vh] transition-all fixed`}>
          <NavBar toggleNavBar={handleCallbackIsShowNavBar} />
        </div>
        <div className={`${isShowNavBar ? 'ml-[200px]' : 'ml-[64px]'} transition-all flex-1`}>
          <div className="flex flex-col ml-5 mr-4">

            <Header toggleMenu={handleToggleMenu} isShowMenu={isShowMenuBar} />

            <div className="min-h-[87vh] w-full bg-white rounded-lg shadow-md mt-4">{children}</div>
          </div>
        </div>
        <MenuProfile isShowMenu={isShowMenuBar} toggleMenu={handleToggleMenu} />
      </div>
    </div>
  );
};

export default DashBoardLayout;
