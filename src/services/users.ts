import axios from "axios";
import config from "@config/index";
import { validToken } from "@utils/window";

export const getUserByEmail = async (email: string) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${config.edysanApi}/api/users?email=${email}`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${validToken()}`
      },
    });
    return response.data;
  } catch (error) {
    return { message: error, success: false };
  }
};

export const getAllUsers = async (query = "") => {
  try {
    const response = await axios({
      method: "GET",
      url: `${config.edysanApi}/api/users/admin${query}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${validToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    return { message: error, success: false };
  }
};

export const getUserById = async (userId: string) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${config.edysanApi}/api/users/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return { message: error, success: false };
  }
};

export const createUser = async (user: any) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${config.edysanApi}/api/users`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${validToken()}`
      },
      data: user,
    });
    return response.data;
  } catch (error) {
    return { message: error, success: false };
  }
};

export const updateUserById = async (userId: string, user: any) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${config.edysanApi}/api/users/${userId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${validToken()}`,
      },
      data: user,
    });
    return response.data;
  } catch (error) {
    return { message: error, success: false };
  }
};

// export const getProductById = async (productId) => {
//   try {
//     const response = await axios({
//       method: 'GET',
//       url: `${config.edysanApi}/api/products/${productId}`,
//       headers: {
//         'Content-Type': 'application/json',
//         // Authorization: `Bearer ${validToken()}`,
//       },
//     })
//     return response.data
//   } catch (error) {
//     return { message: error, success: false }
//   }
// }

// export const createProduct = async (product) => {
//   try {
//     const response = await axios({
//       method: 'POST',
//       url: `${config.edysanApi}/api/products`,
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         Authorization: `Bearer ${validToken()}`,
//       },
//       data: product,
//     })
//     return response.data
//   } catch (error) {
//     return { message: error, success: false }
//   }
// }

// export const updateProduct = async (product, productId) => {
//   try {
//     const response = await axios({
//       method: 'PUT',
//       url: `${config.edysanApi}/api/products/${productId}`,
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         Authorization: `Bearer ${validToken()}`,
//       },
//       data: product,
//     })
//     return response.data
//   } catch (error) {
//     return { message: error, success: false }
//   }
// }

// export const deleteProduct = async (productId) => {
//   try {
//     const response = await axios({
//       method: 'DELETE',
//       url: `${config.edysanApi}/api/products/${productId}`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${validToken()}`,
//       },
//     })
//     return response.data
//   } catch (error) {
//     return { message: error, success: false }
//   }
// }
