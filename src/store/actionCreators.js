import ActionTypes from "./actiontypes";

export const ActionCreators = {
  login: (payload) => ({ type: ActionTypes.LOGIN, payload }),
  logout: (payload) => ({ type: ActionTypes.LOGOUT, payload }),
};
