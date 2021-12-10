import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SigninForm from "../components/SigninForm";
import { FaUserCircle } from "react-icons/fa";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FaUserCircle className="sign-in-icon" />
          <h1>Sign In</h1>
          <SigninForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
