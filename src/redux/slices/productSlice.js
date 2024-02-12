// /src/features/login/loginSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsApi } from "../../features/products/productsApi"; 
export const getProducts = createAsyncThunk("login/loginFetch", getProductsApi);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setUser, setLoading, setError } = productsSlice.actions;

export default productsSlice.reducer;
