import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import { useSelector } from "react-redux";

export default function App() {
  const token = useSelector((state) => state.token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sign-in" exact element={<SignIn />} />
        {token ? (
          <Route path="/user" exact element={<User />} />
        ) : (
          <Route path="/user" exact element={<Navigate replace to="/" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
