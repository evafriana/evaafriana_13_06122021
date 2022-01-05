// import ActionTypes from "../auth/actiontypes";

// const initialState = {
//   user: {},
//   token: "",
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionTypes.LOGIN:
//       return {
//         ...state,
//         token: action.payload,
//       };
//     case ActionTypes.LOGOUT:
//       return initialState;
//     case ActionTypes.UPDATE_PROFILE:
//       console.log(action);
//       return {
//         ...state,
//         user: { ...state.user, ...action.payload },
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;

// import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const initialState = {
  user: {},
  token: "",
};

// const reducer = createReducer([], {
//   loggedIn: (state, action) => {
//     state.push({
//       token: action.payload,
//     });
//   },
//   updatedProfile: (state, action) => {
//     state.push({
//       user: { ...state.user, ...action.payload },
//     });
//   },
//   loggedOut: () => {
//     return initialState;
//   },
// });

// export default reducer;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.loggedIn.type:
      return {
        ...state,
        token: action.payload,
      };
    case actions.updatedProfile.type:
      console.log(action);
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case actions.loggedOut.type:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
