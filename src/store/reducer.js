import ActionTypes from "./actiontypes";

const initialState = {
  user: {},
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case ActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
