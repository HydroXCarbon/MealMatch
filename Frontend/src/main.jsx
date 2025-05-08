import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { AxiosProvider } from "./axiosConfig/AxiosContext.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

ReactDOM.render(
    <StrictMode>
        <AxiosProvider>
            <ThemeProvider theme={createTheme()}>
                <App />
            </ThemeProvider>
        </AxiosProvider>
    </StrictMode>,
    document.getElementById("root")
);
