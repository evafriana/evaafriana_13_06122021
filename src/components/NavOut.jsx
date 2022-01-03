import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function NavOut() {
  const { firstName } = useSelector((state) => state.user);

  return (
    <div>
      <Link className="main-nav-item" to="/user">
        <FaUserCircle />
        {firstName}
      </Link>
      <Link className="main-nav-item" to="/">
        <FaSignOutAlt />
        Sign Out
      </Link>
    </div>
  );
}
