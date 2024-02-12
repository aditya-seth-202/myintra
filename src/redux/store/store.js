import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/loginSlice";
import productReducer from "../slices/productSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    products: productReducer,
  },
});
export default store;
