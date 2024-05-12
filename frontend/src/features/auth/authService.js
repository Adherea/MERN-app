import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

const register = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("Failed to register user:", error);
    throw error;
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + "login", userData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("Failed to login user:", error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
