import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ContentSection from "./components/ContentSection";
import DifferenceSection from "./components/DifferenceSection";
import MapSection from "./components/MapSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;