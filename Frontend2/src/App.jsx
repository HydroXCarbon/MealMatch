import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import ContentSection from "./components/ContentSection";
// import DifferenceSection from "./components/DifferenceSection";
// import MapSection from "./components/MapSection";
// import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Saved from "./pages/Saved";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;