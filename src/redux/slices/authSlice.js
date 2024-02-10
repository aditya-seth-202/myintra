// features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
