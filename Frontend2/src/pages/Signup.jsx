import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import grilledFood from "../assets/MealPic/image_2.png";
import { FaHamburger, FaAppleAlt } from "react-icons/fa";
import { useAxios } from '../axiosConfig/AxiosContext';

const Signup = () => {
  const axios = useAxios();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/home/signup", {
        username: username,
        password: password,
      });
      const token = response.data.token;
      const uid = response.data.id;
      localStorage.setItem("token", token);
      // localStorage.setItem("uid", uid);
      // console.log(uid);
      console.log(token);
      navigate("/dashboard");
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Signup failed");
      } else {
        setError("Network error");
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center pt-16 md:pt-0"
      style={{ backgroundImage: `url(${grilledFood})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-stretch justify-center bg-white bg-opacity-90 rounded-lg shadow-lg mx-4 sm:mx-6 md:mx-auto max-w-5xl w-full">
        <div className="w-full md:w-1/2 p-6 sm:p-8">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            Create Account
          </h2>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            Welcome to MealMatch
          </p>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your username"
                autoComplete="new-username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your password"
                autoComplete="new-password"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Confirm your password"
                autoComplete="new-password"
              />
            </div>
            <div className="text-right mb-4">
              <a href="#" className="text-teal-500 hover:underline">
                Having trouble?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-mealmatch-teal text-white font-medium py-2 rounded-lg hover:bg-teal-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg md:rounded-none md:rounded-r-lg relative">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            Already have an Account?
          </h2>
          <p className="mb-6 text-center md:text-left max-w-md">
            Login now and start discovering your favorite restaurants, hidden
            gems, and exciting new dining spots with MealMatch!
          </p>
          <Link
            to="/login"
            className="bg-white text-teal-700 text-lg font-medium py-2 px-8 rounded-full hover:bg-gray-200 transition duration-200"
          >
            Login
          </Link>
          <div className="absolute bottom-4 left-4 flex space-x-4">
            <FaHamburger className="text-4xl text-white opacity-80" />
            <FaAppleAlt className="text-4xl text-white opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
