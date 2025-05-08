import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://mealmatch-blii.onrender.com", 
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
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
