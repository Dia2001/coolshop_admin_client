import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MenuProfile from "../components/MenuProfile"

const DashBoardLayout = ({ children }) => {
  const [isShowNavBar, setIsShowNavBar] = useState(true)
  const [isShowMenuBar, setIsShowMenuBar] = useState(false)

  const handleCallbackIsShowNavBar = (status) => {
    setIsShowNavBar(status)
    console.log(status)
  }

  const handleToggleMenu = (status) => {
    setIsShowMenuBar(status)
  }

  return (
    <div className="text-BlackCool bg-GradientO1 h-[100vh]">
      <div className="flex relative">
        <div className={`${isShowNavBar ? 'w-[200px]' : 'w-[64px]'} transition-all`}>
          <NavBar toggleNavBar={handleCallbackIsShowNavBar} />
        </div>
        <div className={`flex-1 col-span-10 mt-1 ml-5 mr-4`}>
          <div className="flex flex-col">

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
