import { createAction } from "@reduxjs/toolkit";

const actions = {
  loggedIn: createAction("loggedIn"),
  loggedOut: createAction("loggedOut"),
  updatedProfile: createAction("updatedProfile"),
};

export default actions;
