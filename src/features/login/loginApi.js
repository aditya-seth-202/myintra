import { instance } from "../../configs/axios";
export const loginApi = async (credentials) => {
  try {
    const response = await instance.post("/customer/sign-in", credentials);
    console.log(response.data, "sdsd");
    localStorage.setItem("token", response.data?.token);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
