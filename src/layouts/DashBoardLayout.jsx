import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const DashBoardLayout = ({ children }) => {
  const [isShowNavBar, setIsShowNavBar] = useState(true)

  const handleCallbackIsShowNavBar = (status) => {
    setIsShowNavBar(status)
    console.log(status)
  }

  return (
    <div className="text-BlackCool bg-GradientO1 h-[100vh]">
      <div className="flex">
        <div className={`${isShowNavBar ? 'w-[200px]' : 'w-[64px]'}`}>
          <NavBar toggleNavBar={handleCallbackIsShowNavBar} />
        </div>
        <div className={`flex-1 col-span-10 mt-1 ml-4 mr-4`}>
          <div className="flex flex-col">

            <Header />

            <div className="min-h-[87vh] w-full bg-white rounded-lg shadow-md mt-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
