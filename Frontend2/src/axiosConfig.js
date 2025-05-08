import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://mealmatch-blii.onrender.com", // Replace with your API base URL
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add Authorization token to headers if it exists and the path is not /login or /signup
    const token = localStorage.getItem("token");
    if (
      token &&
      !config.url.includes("/home/login") &&
      !config.url.includes("/home/signup")
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
