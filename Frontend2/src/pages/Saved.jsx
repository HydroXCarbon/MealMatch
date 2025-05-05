import React, { useEffect, useState } from 'react';
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
                  <button className="text-teal-500 hover:text-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-2">
                  <p className="text-gray-600 text-sm"><span className="mr-1">📍</span>{r.location}</p>
                  <p className="text-gray-800 text-sm mt-1">
                    ⭐ {r.rating.toFixed(1)}
                  </p>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-xl transition">
                    View Details
                  </button>
                  <button
                    onClick={() => handleDelete(r._id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-xl transition"
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
