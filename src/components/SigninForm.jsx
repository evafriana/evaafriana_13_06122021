import React, { useState, useEffect } from "react";

export default function SigninForm() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userName, userPassword });
    handleDataStorage();
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
  );
}
