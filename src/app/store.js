// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/userSlice";

// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// import { createStore, combineReducers, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import reducer from "./reducer";

// const rootReducer = combineReducers({
//   user: reducer,
// });

// const configureStore = () => {
//   return createStore(rootReducer, compose(applyMiddleware(thunk)));
// };

// export default configureStore;

import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
