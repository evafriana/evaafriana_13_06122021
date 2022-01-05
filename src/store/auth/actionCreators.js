import ActionTypes from "../auth/actiontypes";

export const ActionCreators = {
  login: (payload) => ({ type: ActionTypes.LOGIN, payload }),
  logout: () => ({ type: ActionTypes.LOGOUT }),
  updateProfile: (payload) => ({
    type: ActionTypes.UPDATE_PROFILE,
    payload,
  }),
};
