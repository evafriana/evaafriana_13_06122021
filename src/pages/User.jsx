import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import actions from "../store/actions";
import API from "../api/Api";

export default function User() {
  const token = useSelector((state) => state.token);
  const { firstName, lastName } = useSelector((state) => state.user);
  const user = `${firstName} ${lastName}`;

  const dispatch = useDispatch();

  const [editProfile, setEditProfile] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const { data } = await new API({ token }).getUserProfile();
      dispatch(actions.updatedProfile(data.body));
    };

    if (token) getUser();
  }, [token, dispatch]);

  const handleEditProfile = () => {
    setEditedFirstName(firstName);
    setEditedLastName(lastName);
    setEditProfile(true);
  };

  const handleCancelProfile = () => {
    setEditProfile(false);
  };

  const handleFirstName = (e) => {
    setEditedFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setEditedLastName(e.target.value);
  };

  const handleUpdateUserProfile = async () => {
    const { data } = await new API({ token }).updateUserProfile({
      firstName: editedFirstName,
      lastName: editedLastName,
    });
    dispatch(actions.updatedProfile(data.body));
    setEditProfile(false);
  };

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        {editProfile ? (
          <div className="header">
            <h1>
              Welcome back
              <br />
              <input
                type="text"
                id="firstName"
                autoComplete={"firstName"}
                value={editedFirstName}
                onChange={handleFirstName}
              />
              <input
                type="text"
                id="lastName"
                autoComplete={"lastName"}
                value={editedLastName}
                onChange={handleLastName}
              />
            </h1>
            <button onClick={handleUpdateUserProfile} className="edit-button">
              Save
            </button>
            <button onClick={handleCancelProfile} className="edit-button">
              Cancel
            </button>
          </div>
        ) : (
          <div className="header">
            <h1>
              Welcome back
              <br />
              {user}
            </h1>
            <button onClick={handleEditProfile} className="edit-button">
              Edit Name
            </button>
          </div>
        )}
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
