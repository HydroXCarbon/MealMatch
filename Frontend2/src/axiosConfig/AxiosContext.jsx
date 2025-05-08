import React, { createContext, useContext } from "react";
import axiosInstance from "./axiosConfig";

// Create a context
const AxiosContext = createContext();

// Create a provider component
export const AxiosProvider = ({ children }) => {
  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

// Custom hook to use the Axios instance
export const useAxios = () => {
  return useContext(AxiosContext);
};
