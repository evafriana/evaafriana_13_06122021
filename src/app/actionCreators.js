// import { Types } from "./actiontypes";
import ActionTypes from "./actiontypes";

export const ActionCreators = {
  login: (user) => ({ type: ActionTypes.LOGIN, payload: { user } }),
  logout: (user) => ({ type: ActionTypes.LOGOUT, payload: { user } }),
};

export const selectUser = (state) => state.user.user;

// export const loggedIn = (user) => ({
//   type: actions.Types.LOGIN,
//   payload: {
//     user: user,
//   },
// });

// export const loggedOut = () => ({
//   type: actions.Types.LOGOUT,
//   payload: {
//     user: null,
//   },
// });
