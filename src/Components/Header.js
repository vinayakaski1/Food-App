import React, {useContext, useState} from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between bg-gray-100 shadow-md">
      <div className="logo-conatiner">
        <img className="w-38 shadow-md" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center text-lg">
          <li className="px-4">Online status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact </Link>
          </li>

          <li className="px-4">Cart</li>
          <Link to="/login">
            <button
              className=" px-4 py-1 bg-blue-400 hover:bg-blue-500 rounded-lg text-white font-bold"
              onClick={() => {}}>
              Logout
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
