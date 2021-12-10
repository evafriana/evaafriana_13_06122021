import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sign-in" exact element={<SignIn />} />
        <Route path="/user" exact element={<div>User</div>} />
      </Routes>
    </BrowserRouter>
  );
}
