import axios from "axios";
import config from "../config";
import {
  setItemInLocalStorage,
  setItemInSessionStorage,
  validToken,
} from "@utils/window";
import { emailValidationAdmin } from "@utils/email";
import Swal from "sweetalert2";

export const setDarkMode = (payload: any) => ({
  type: "SET_DARK_MODE",
  payload,
});

export const setDataUser = (payload: any) => ({
  type: "SET_DATA_USER",
  payload,
});

export const setDataToken = (payload: any) => ({
  type: "SET_DATA_TOKEN",
  payload,
});

export const setUserLogged = (payload: any) => ({
  type: "SET_USER_LOGGED",
  payload,
});

export const loginUser = (payload: any) => {
  let apiKeyToken = config.publicApiKeyToken;
  const { email, password, remember } = payload;
  const emailValid = emailValidationAdmin(email);

  return async () => {
    try {
      if (emailValid) {
        apiKeyToken = config.adminApiKeyToken;
      }

      const response = await axios({
        url: `${config.edysanApi}/api/auth/sign-in`,
        method: "POST",
        auth: {
          username: email,
          password,
        },
        data: {
          apiKeyToken,
        },
      });

      const data = response.data;

      if (remember) {
        setItemInLocalStorage("loggedEdySan", data);
      } else {
        setItemInSessionStorage("loggedEdySan", data);
      }
      // dispatch(loginRequest(data.data))
      // dispatch(setModalLogin(false))
      // dispatch(setDropdownSidebar(false))
    } catch (error) {
      console.error({ error });
    }
  };
};

export const registerUser = (payload: any) => {
  return async () => {
    try {
      const response = await axios.post(
        `${config.edysanApi}/api/auth/sign-up`,
        payload
      );

      // dispatch(registerRequest(response.data))
      // dispatch(setModalRegister(false))
      // dispatch(setDropdownSidebar(false))
      // dispatch(setModalLogin(true))
    } catch (error) {
      console.error({ error });
    }
  };
};

// Modal states

// Products

export const getProducts = () => {
  return async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${config.edysanApi}/api/products`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${validToken()}`,
        },
      });

      // dispatch(setProducts(response.data.data))

      return response;
    } catch (error: any) {
      console.error({ error: error.response });

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error to create new Product!, ${error.response.data}`,
        timer: 5000,
      });
      return error;
    }
  };
};
export const getProduct = (productId: any) => {
  return async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${config.edysanApi}/api/products/${productId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${validToken()}`,
        },
      });

      return response.data.data;
    } catch (error: any) {
      console.error({ error: error.response });

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error to create new Product!, ${error.response.data}`,
        timer: 5000,
      });
      return error;
    }
  };
};

// Create Product
export const createProduct = (payload: any) => {
  return async () => {
    try {
      const response = await axios({
        method: "POST",
        url: `${config.edysanApi}/api/products`,
        data: payload,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${validToken()}`,
        },
      });

      Swal.fire({
        icon: "success",
        title: `Your product is create success! ${response.data.message}`,
        showConfirmButton: false,
        timer: 5000,
      });
      return response;
    } catch (error: any) {
      console.error({ error: error.response });

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error to create new Product!, ${error.response.data}`,
        timer: 5000,
      });
      return error;
    }
    // finally {
    //   form.current.reset()
    //   payload.delete('images')
    //   payload.delete('videos')
    // }
  };
};

// Create Product
export const updateProduct = (payload: any, productId: any) => {
  return async () => {
    try {
      const response = await axios({
        method: "PUT",
        url: `${config.edysanApi}/api/products/${productId}`,
        data: payload,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${validToken()}`,
        },
      });

      Swal.fire({
        icon: "success",
        title: `Your product is update success! ${response.data.message}`,
        showConfirmButton: false,
        timer: 5000,
      });
      return response;
    } catch (error: any) {
      console.error({ error: error.response });

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error to create new Product!, ${error.response.data}`,
        timer: 5000,
      });
      return error;
    }
    // finally {
    //   form.current.reset()
    //   payload.delete('images')
    //   payload.delete('videos')
    // }
  };
};

// Brands
export const getBrands = () => {
  return async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${config.edysanApi}/api/brands`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${validToken()}`,
        },
      });

      // dispatch(set(response.data.data))

      return response.data.data;
    } catch (error: any) {
      console.error({ error: error.response });

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error to create new Product!, ${error.response.data}`,
        timer: 5000,
      });
      return error;
    }
  };
};

// Categories
export const getCategories = () => {
  return async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${config.edysanApi}/api/categories`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${validToken()}`,
        },
      });

      // dispatch(set(response.data.data))

      return response.data.data;
    } catch (error: any) {
      console.error({ error: error.response });

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error to create new Product!, ${error.response.data}`,
        timer: 5000,
      });
      return error;
    }
  };
};

// Files

export const deleteFile = (payload: any) => {
  return async () => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${config.edysanApi}/api/upload-files`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${validToken()}`,
        },
        data: payload,
      });

      // dispatch(set(response.data.data))

      return response.data.data;
    } catch (error: any) {
      console.error({ error: error.response });

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error to delete file!, ${error.response.data}`,
        timer: 5000,
      });
      return error;
    }
  };
};

// Shoes

export const setFormShoemaker = (payload: any) => ({
  type: "SET_FORM_SHOES",
  payload,
});

export const setShoeRepairs = (payload: any) => ({
  type: "SET_SHOE_REPAIRS",
  payload,
});

export const setShoeRepairsToday = (payload: any) => ({
  type: "SET_SHOE_REPAIRS_TODAY",
  payload,
});

export const setRepairTags = (payload: any) => ({
  type: "SET_REPAIR_TAGS",
  payload,
});

// Users

export const setUsers = (payload: any) => ({
  type: "SET_USERS",
  payload,
});
