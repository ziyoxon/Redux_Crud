import { createSlice } from "@reduxjs/toolkit";



const tokenSlice = createSlice({
  name: "token",
  initialState:{
    value:null
  },
  reducers: {
    signIn: (state, action) => {
      state.value = action.payload; 
      localStorage.setItem("User signed in with token: ", state.value);
    },
    signOut: (state) => {
      state.token = null; 
      console.log("User signed out");
    },
  },
});

export const { signIn, signOut } = tokenSlice.actions;

export default tokenSlice.reducer;
