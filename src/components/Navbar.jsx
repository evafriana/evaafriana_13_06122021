import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavOut from "./NavOut";
import NavIn from "./NavIn";
import { useSelector } from "react-redux";

export default function Navbar() {
  const token = useSelector((state) => state.token);

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <Logo />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {token ? <NavOut /> : <NavIn />}
    </nav>
  );
}
