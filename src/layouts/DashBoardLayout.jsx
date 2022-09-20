import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
const DashBoardLayout = ({ children }) => {
  return (
    <div className="text-BlackCool">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-2 mt-4">
          <NavBar />
        </div>
        <div className="col-span-9 mt-4">
          <div className="flex flex-col">

            <Header />

            <div className="min-h-[80vh] w-full rounded-lg shadow-md mt-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
