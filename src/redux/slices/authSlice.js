// features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/user/authService';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk('auth/login', async (credentials) => {
  const response = await authService.login(credentials);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
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

// Export the action creators and reducer
// export const { /* Add synchronous action creators here if needed */ } = authSlice.actions;
export default authSlice.reducer;
