import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, InputBase, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete } from "@react-google-maps/api";
import { useAxios } from "../../axiosConfig/AxiosContext";
import useStyles from "./styles";

const Header = ({ setCoordinates }) => {
  const axios = useAxios();
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [autoComplete, setAutoComplete] = useState(null);
  const navigate = useNavigate();

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    if (autoComplete) {
      const lat = autoComplete.getPlace().geometry.location.lat();
      const lng = autoComplete.getPlace().geometry.location.lng();
      setCoordinates({ lat, lng });
    }
  };

  const logout = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "home/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("token");
      setLoggedIn(false);
      navigate("/login");
      window.location.reload(); // Force a page refresh after redirect
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#47B6B8" }}> {/* Changed to teal */}
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h5"
          className="text-white font-bold cursor-pointer select-none"
          onClick={() => navigate("/")}
          style={{ userSelect: "none" }}
        >
          MealMatch
        </Typography>
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Autocomplete>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <ul className="flex gap-4 text-white uppercase text-sm hidden md:flex">
            <li>
              <Link to="/" aria-label="Navigate to Home" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/saved" aria-label="Navigate to Saved" className="hover:text-gray-200">
                Saved
              </Link>
            </li>
            <li>
            <Link to="/dashboard" aria-label="Navigate to dash" className="hover:text-gray-200">
            DASHBOARD
              </Link>
            </li>
            <li>
              <a href="#" aria-label="Navigate to About" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" aria-label="Navigate to Contact" className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
          {!loggedIn ? (
            <Link to="/signup" aria-label="Navigate to Sign up">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "#47B6B8", // Teal color for text
                  fontWeight: "bold",
                  borderRadius: "20px",
                }}
                className="hover:bg-gray-200"
              >
                Signup
              </Button>
            </Link>
          ) : (
            <Button
              onClick={logout}
              variant="contained"
              color="error"
              className="hover:bg-red-900"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
