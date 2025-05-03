import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-mealmatch-teal fixed top-0 w-full z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <h1 className="text-white text-2xl font-bold">MealMatch</h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center absolute md:static top-16 left-0 w-full md:w-auto bg-mealmatch-teal md:bg-transparent transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-white uppercase text-sm">
            <li><a href="#" aria-label="Navigate to Home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" aria-label="Navigate to News" className="hover:text-gray-200">News</a></li>
            <li><a href="#" aria-label="Navigate to Price" className="hover:text-gray-200">Price</a></li>
            <li><a href="#" aria-label="Navigate to About" className="hover:text-gray-200">About</a></li>
            <li><a href="#" aria-label="Navigate to Contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
          <button
            className="mt-4 md:mt-0 md:ml-6 border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-mealmatch-teal transition"
            aria-label="Get started with MealMatch"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;