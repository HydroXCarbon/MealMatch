import React, { useEffect, useState } from 'react';
import { MapPin, Star,Heart } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const defaultData = [
  {
    _id: '1',
    name: 'The Green Garden',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    location: '123 Elm St, City'
  },
  {
    _id: '2',
    name: 'Ocean Breeze Sushi',
    image: 'https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    location: '456 Harbor Rd, City'
  },
  {
    _id: '3',
    name: 'Spice Route Curry',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.5,
    location: '789 Pine St, City'
  },
  {
    _id: '4',
    name: 'Bella Pasta',
    image: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
    location: '321 Oak Ave, City'
  },
  {
    _id: '5',
    name: 'Urban Burger Co.',
    image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.4,
    location: '654 Maple Blvd, City'
  }
];

const Saved = () => {
  const [restaurants, setRestaurants] = useState(defaultData);

  useEffect(() => {
    fetch('/api/saved')
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          setRestaurants(data);
        }
      })
      .catch(err => console.error('Failed to fetch saved restaurants:', err));
  }, []);

  const handleDelete = (id) => {
    //setRestaurants(prev => prev.filter(r => r._id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-teal-50">
      <Navbar />

      <main className="flex-grow container mx-auto pt-24 px-4 py-8">
        <h1 className="text-3xl font-bold text-teal-700 mb-2">Saved Restaurants</h1>
        <p className="text-teal-600 mb-6">Your favorite dining spots</p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map(r => (
            <div key={r._id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <img
                src={r.image}
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
                        {r.location}
                    </p>
                  <p className="text-gray-800 text-sm mt-1 flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {r.rating.toFixed(1)}
                  </p>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-xl transition">
                    View Details
                  </button>
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
      </main>

      <Footer />
    </div>
  );
};

export default Saved;
