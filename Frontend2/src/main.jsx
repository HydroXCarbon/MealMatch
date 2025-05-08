import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import axiosInstance from "./axiosConfig.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
