import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const initialState = {
  user: {},
  token: "",
};

const reducer = createReducer(initialState, {
  [actions.loggedIn.type]: (state, { payload }) => {
    Object.assign(state, {
      token: payload,
    });
  },
  [actions.updatedProfile.type]: (state, { payload }) => {
    Object.assign(state, {
      user: { ...state.user, ...payload },
    });
  },
  [actions.loggedOut.type]: (state) => {
    Object.assign(state, initialState);
  },
});

export default reducer;
