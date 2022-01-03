import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function NavIn() {
  return (
    <Link className="main-nav-item" to="/sign-in">
      <FaUserCircle className="main-nav-item-icon" />
      Sign In
    </Link>
  );
}
