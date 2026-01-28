// Root reducer - combines all slices

import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth-reducer/auth-reducer";
import userReducer from "./user-reducer/user-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
