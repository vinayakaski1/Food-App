import React, {useContext, useState} from "react";
import {LOGO_URL} from "../utils/constants";
import {Link, useNavigate} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useDispatch, useSelector} from "react-redux";
import {addEmail, addPassword} from "../utils/cartSlice";

const Header = () => {
  const {email, items} = useSelector(state => state);
  const dispatch = useDispatch();
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  const navigate = useNavigate();
  console.log(loggedInUser);

  const cartItems = useSelector(store => store.items);

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
          <li className="px-2">
            <Link to="/about">About </Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact </Link>
          </li>
          <div></div>
          <Link to="/cart">
            <li className="px-4 ">
              <img
                className="w-10 pt-2 "
                src="https://cdn.iconscout.com/icon/free/png-512/free-cart-389-458456.png?f=webp&w=256"
              />
            </li>
          </Link>
          <span className="text-lg font-bold mr-4">({cartItems.length})</span>

          {!email && (
            <button
              className=" px-4 py-1 ml-12 mt-2 bg-blue-400 hover:bg-blue-500 rounded-lg text-white font-bold"
              onClick={() => {
                navigate("/login");
              }}>
              Log in
            </button>
          )}
          {email && (
            <button
              className=" px-4  py-1 ml-12 mt-2 bg-blue-400 hover:bg-blue-500 rounded-lg text-white font-bold"
              onClick={() => {
                dispatch(addEmail(""));
                dispatch(addPassword(""));
                navigate("/login");
              }}>
              Log out
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
