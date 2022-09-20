import React, { useContext } from "react";
import { MdDashboard } from 'react-icons/md'
import { AppContext } from "../Providers/ApplicationContext";
const Header = () => {
  const { userLogin } = useContext(AppContext);

  return (
    <div className="flex justify-between p-4 shadow-md rounded-sm ">
      <div className="flex">
        <MdDashboard size={50} />
        <h3>Dashboard</h3>
      </div>
      <h5>
        {userLogin ? userLogin.userName : ''}
      </h5>

    </div>
  );
};

export default Header;
