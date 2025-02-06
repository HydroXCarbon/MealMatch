import React from "react";
import { Smile, Star, Users } from "lucide-react";

const Menu = () => {
  const features = [
    {
      icon: Smile,
      title: "Mood-Based Picks",
      description:
        "Get restaurant suggestions based on your mood, occasion, and dining preferences.",
    },
    {
      icon: Star,
      title: "Top-Rated Spots",
      description:
        "Explore a curated list of the highest-rated restaurants based on reviews, popularity, and quality.",
    },
    {
      icon: Users,
      title: "Friend & Group Match",
      description:
        "MealMatch helps you and your friends decide where to eat based on preferences, past favorites, and group consensus.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 ">
      {/* Navigation */}
      <nav className="bg-gray-400 text-black py-6 shadow-inner shadow-black/10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="#" className="text-3xl font-extrabold tracking-wide">MealMatch</a>
          <div className="space-x-6 text-lg">
            {["Home", "News", "Price", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-teal-100 transition duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="bg-teal-300 outline-1 px-5 py-2 rounded-lg hover:bg-teal-100 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/featured/food-4k-1pf6px6ryqfjtnyr.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-white">
          <h1 className="text-6xl font-extrabold tracking-wide mb-4">
            MealMatch
          </h1>
          <p className="text-2xl font-light">Let us find your best meal</p>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-black text-4xl font-bold text-center mb-12">
          Why Choose MealMatch?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-6">
                <feature.icon className="w-16 h-16 text-teal-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <button className="mt-6 text-teal-600 font-semibold hover:underline">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Meal Presentation Section */}
      <section className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/b5/bd/3a/b5bd3a9e0d13a49e1725b21cc92dcb40.jpg"
              alt="Delicious Meal"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            />
          </div>
          <div>
            <h2 className="text-black text-4xl font-bold mb-6">
              Find the Perfect Meal with MealMatch
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              MealMatch makes choosing where to eat easier than ever! Simply set
              your mood, spicy filters, cuisine, budget, or dietary preferences,
              and get restaurant recommendations tailored just for you.
            </p>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-teal-500 transition duration-300">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
