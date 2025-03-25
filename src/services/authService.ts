// // src/services/authService.ts
// import axios from "axios";

// const API_URL = "http://localhost:3000/auth";

// export const registerUser = async (email: string, password: string) => {
//   try {
//     const response = await axios.post(`${API_URL}/register`, {
//       email,
//       password,
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error("Registration failed");
//   }
// };

// export const loginUser = async (email: string, password: string) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, {
//       email,
//       password,
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error("Login failed");
//   }
// };

// export const logoutUser = async (accessToken: string) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/logout`,
//       {},
//       {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error("Logout failed");
//   }
// };

// export const getUser = async (accessToken: string) => {
//   try {
//     const response = await axios.get(`${API_URL}/user`, {
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error("Get user failed");
//   }
// };
