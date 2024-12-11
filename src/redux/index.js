import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice"; 
import tokenSlice from "./slices/token-slice"; 

const store = configureStore({
  reducer: {
    users: userReducer, 
    tokenSlice
  },
});

export default store;
