import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import actions from "../store/actions";

export default function NavOut() {
  const { firstName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(actions.loggedOut());
  };

  return (
    <div className="main-nav-profile">
      <Link className="main-nav-item first-name" to="/user">
        <FaUserCircle className="main-nav-item-icon" />
        {firstName}
      </Link>
      <Link onClick={handleLogOut} className="main-nav-item" to="/">
        <FaSignOutAlt className="main-nav-item-icon" />
        Sign Out
      </Link>
    </div>
  );
}
