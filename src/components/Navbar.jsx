import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <Logo />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/sign-in">
          <FaUserCircle className="main-nav-item-icon" />
          Sign In
        </Link>
      </div>
    </nav>
  );
}
