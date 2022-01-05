import { createAction } from "@reduxjs/toolkit";

// export const loggedIn = createAction("loggedIn");
// export const loggedOut = createAction("loggedOut");
// export const updatedProfile = createAction("updatedProfile");

const actions = {
  loggedIn: createAction("loggedIn"),
  loggedOut: createAction("loggedOut"),
  updatedProfile: createAction("updatedProfile"),
};

export default actions;
