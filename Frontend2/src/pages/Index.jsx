import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ContentSection from "../components/ContentSection";
import DifferenceSection from "../components/DifferenceSection";
import MapSection from "../components/MapSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <ContentSection />
        <DifferenceSection />
        <StatsSection />
        <MapSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;