import ActionTypes from "./actiontypes";

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      console.log("login", action.payload.user);
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.LOGOUT:
      console.log("logout");
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
