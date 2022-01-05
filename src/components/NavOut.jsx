import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import actions from "../store/projects/actions";

export default function NavOut() {
  const { firstName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(actions.loggedOut());
  };

  return (
    <div>
      <Link className="main-nav-item" to="/user">
        <FaUserCircle />
        {firstName}
      </Link>
      <Link onClick={handleLogOut} className="main-nav-item" to="/">
        <FaSignOutAlt />
        Sign Out
      </Link>
    </div>
  );
}
