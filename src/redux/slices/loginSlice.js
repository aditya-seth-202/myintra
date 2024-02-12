// /src/features/login/loginSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../features/login/loginApi";

export const loginUser = createAsyncThunk("login/loginFetch", loginApi);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setUser, setLoading, setError } = loginSlice.actions;

export default loginSlice.reducer;
