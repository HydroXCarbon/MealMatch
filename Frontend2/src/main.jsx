import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AxiosProvider } from "./axiosConfig/AxiosContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AxiosProvider>
      <App />
    </AxiosProvider>
  </StrictMode>
);
