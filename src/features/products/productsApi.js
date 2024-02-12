// /src/features/login/loginApi.js

import { instance } from "../../configs/axios";

export const getProductsApi = async (searchQuery) => {
  try {
    const response = await instance.get(
      `/product/searchProduct/${searchQuery ?? ""}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
