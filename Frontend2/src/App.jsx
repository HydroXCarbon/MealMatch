import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Saved from "./pages/Saved";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation(); // Get the current route

  return (
    <div className="min-h-screen">
      {location.pathname !== "/dashboard" && <Navbar />}

      <Routes>
        <Route path="/" element={<Index />} />
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* Protect the dashboard route */}
        <Route path="/saved" element={<ProtectedRoute><Saved /></ProtectedRoute>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      {location.pathname !== "/signup" &&
        location.pathname !== "/dashboard" &&
        location.pathname !== "/login" && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;