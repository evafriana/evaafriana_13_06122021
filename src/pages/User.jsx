import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { ActionCreators } from "../store/auth/actionCreators";
import actions from "../store/auth/actions";

export default function User() {
  const token = useSelector((state) => state.token);
  const { firstName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:3001/api/v1/user/profile",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(data);
      // dispatch(ActionCreators.updateProfile(data.body));
      dispatch(actions.updatedProfile(data.body));
    };

    if (token && !firstName) getUser();
  }, [token, firstName, dispatch]);

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName}
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
