import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], 
  loggedInUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    signIn: (state, action) => {
      const { email, password } = action.payload;

      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        state.loggedInUser = user;
        console.log("User logged in: ", user);
      } else {
        alert("Invalid email or password"); 
      }
    },

    logout: (state) => {
      state.loggedInUser = null;
      console.log("User logged out");
    },
  },
});

export const { addUser, signIn, logout } = userSlice.actions;

export default userSlice.reducer;
