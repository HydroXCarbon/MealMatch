import React, { useEffect, useState } from "react";
import { MapPin, Star, Heart, DollarSign, Award, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import { useAxios } from "../axiosConfig/AxiosContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Saved = () => {
  const [restaurants, setRestaurants] = useState([]);
  let restaurant_list = [];
  const axios = useAxios();

  useEffect(() => {
    const fetchSavedRestaurants = async () => {
      try {
        const response = await axios.get(`/meal/favorite`);

        // Set the favoriteMeals array to the restaurants state
        if (response.data && Array.isArray(response.data.favoriteMeals)) {
          setRestaurants(response.data.favoriteMeals);
          restaurant_list = response.data.favoriteMeals;
        }
      } catch (error) {
        console.error("Failed to fetch saved restaurants:", error);
      }
    };

    fetchSavedRestaurants();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("/meal/favorite", {
        data: { mealId: id },
      });
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete restaurant:", error);
    }
  };

  const createPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Saved Restaurants", 14, 20);

    const columns = [
      "Name",
      "Address",
      "Rating",
      "Price Level",
      "Ranking",
      "Website",
    ];

    // Use the restaurants state directly
    const rows = restaurants.map((r) => [
      r.name || "",
      r.address || "",
      r.rating || "",
      r.price_level || "",
      r.ranking || "",
      r.website || "",
    ]);

    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 30,
      theme: "grid",
      styles: { fontSize: 10 },
      headStyles: { fillColor: [22, 160, 133] },
    });

    doc.save("Saved_Restaurants.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col bg-teal-50">
      <Navbar />

      <main className="flex-grow container mx-auto pt-24 px-4 py-8">
        <h1 className="text-3xl font-bold text-teal-700 mb-2">
          Saved Restaurants
        </h1>
        <p className="text-teal-600 mb-6">Your favorite dining spots</p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((r) => (
            <div
              key={r._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={r.photoUrl}
                alt={r.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4 flex-grow flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {r.name}
                  </h2>
                  <p className="text-teal-500">
                    <Heart className="h-6 w-6" fill="currentColor" />
                  </p>
                </div>

                <div className="mt-2">
                  <p className="text-gray-600 text-sm flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-red-500" />
                    {r.address}
                  </p>
                  <p className="text-gray-800 text-sm mt-1 flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {r.rating}
                  </p>
                  <p className="text-gray-800 text-sm mt-1 flex items-center">
                    <DollarSign className="w-4 h-4 mr-1 text-green-500" />
                    {r.price_level}
                  </p>
                  <p className="text-gray-800 text-sm mt-1 flex items-center">
                    <Award className="w-4 h-4 mr-1 text-blue-500" />
                    {r.ranking}
                  </p>
                  <p className="text-gray-800 text-sm mt-1 flex items-center">
                    <Globe className="w-4 h-4 mr-1 text-purple-500" />
                    <a
                      href={r.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Visit Website
                    </a>
                  </p>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleDelete(r._id)}
                    className="flex-1 bg-red-500 hover:bg-red-900 text-white font-medium py-2 rounded-xl transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => createPDF(restaurants)}
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-full shadow-lg transition"
          >
            Create PDF
          </button>
        </div>
      </main>
    </div>
  );
};

export default Saved;
