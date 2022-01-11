import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import actions from "../store/actions";
import UserAPI from "../api/User";
import Account from "../components/Account";

const accounts = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    amount: "2,082.79",
    description: "Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    amount: "10,928.42",
    description: "Available Balance",
  },
  {
    id: 3,
    title: "Argent Bank Credit Card (x8349)",
    amount: "184.30",
    description: "Current Balance",
  },
];

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
      const { data } = await new UserAPI({ token }).getProfile();
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
    const { data } = await new UserAPI({ token }).updateProfile({
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
                className="mr"
                type="text"
                id="firstName"
                autoComplete={"firstName"}
                value={editedFirstName}
                onChange={handleFirstName}
              />
              <input
                className="ml"
                type="text"
                id="lastName"
                autoComplete={"lastName"}
                value={editedLastName}
                onChange={handleLastName}
              />
            </h1>
            <button
              onClick={handleUpdateUserProfile}
              className="edit-button mr"
            >
              Save
            </button>
            <button onClick={handleCancelProfile} className="edit-button ml">
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
        {accounts.map(({ title, amount, description, id }) => {
          return (
            <Account
              key={id}
              title={title}
              amount={amount}
              description={description}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}
