import axios from "axios";
import config from "@config/index";
import { getUserByEmail } from "@services/users";

const API_USERS = config.apiUsers;

console.log({ config2: config, d: process.env.API_USERS });

export const loginUser = async ({ email, password }: any) => {
  let apiKeyToken = config.publicApiKeyToken;

  try {
    // const user = await getUserByEmail(email);

    // if (user.data.role === 'admin') {
    //   apiKeyToken = config.adminApiKeyToken
    // }

    const response = await axios({
      method: "POST",
      url: `${API_USERS}/api/auth/sign-in`,
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: email,
        password,
      },
      data: {
        apiKeyToken,
      },
    });
    return response.data;
  } catch (error: any) {
    return { message: error.response?.data.error, success: false };
  }
};

export const registerUser = async (payload: any) => {
  try {
    const response = await axios.post(`${API_USERS}/api/auth/sign-up`, payload);
    return response.data;
  } catch (error: any) {
    return { message: error.response?.data.error, success: false };
  }
};

export const signUpUser = async (payload: any) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${API_USERS}/api/auth/sign-up/admin`,
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    });
    return response.data;
  } catch (error) {
    return { message: error, success: false };
  }
};

export const recoveryPassword = async (payload: any) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${API_USERS}/api/auth/recovery`,
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    });
    return response.data;
  } catch (error) {
    return { message: error, success: false };
  }
};

export const changePassword = async (payload: any) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${API_USERS}/api/auth/change-password`,
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    });
    return response.data;
  } catch (error) {
    return { message: error, success: false };
  }
};
