import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../store/actions";
import API from "../api/Api";

export default function Form() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const { token } = state;

  useEffect(() => {
    const storedRememberMe = localStorage.getItem("rememberMe") === "true";
    setRememberMe(storedRememberMe);
    if (storedRememberMe) {
      const storedUserName = localStorage.getItem("userName") || "";
      const storedPassword = localStorage.getItem("userPassword") || "";
      setUserName(storedUserName);
      setUserPassword(storedPassword);
    }
  }, []);

  const handleUsername = (e) => {
    setUserName(e.target.value);
  };

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleDataStorage();

    const { data } = await new API({}).logIn({
      email: userName,
      password: userPassword,
    });

    dispatch(actions.loggedIn(data.body.token));
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleDataStorage = () => {
    localStorage.setItem("rememberMe", rememberMe);
    if (rememberMe) {
      localStorage.setItem("userName", userName);
      localStorage.setItem("userPassword", userPassword);
    } else {
      localStorage.removeItem("userName");
      localStorage.removeItem("userPassword");
    }
  };

  return (
    <>
      {token && <Navigate replace to="/user" />}
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete={"username"}
            value={userName}
            onChange={handleUsername}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete={"current-password"}
            value={userPassword}
            onChange={handleUserPassword}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={handleRememberMe}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </form>
    </>
  );
}
