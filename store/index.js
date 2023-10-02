import React from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: { LoggedIn: undefined },
  reducers: {
    setLoggedIn(state) {
      state.LoggedIn = !state.LoggedIn;
    },
  },
});

const store = configureStore({
  reducer: LoginSlice.reducer,
});

export const LoginActions = LoginSlice.actions;
export default store;
