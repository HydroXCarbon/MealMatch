import grilledFood from '../assets/MealPic/image_2.png';

const StatsSection = () => {
  return (
    <section className="py-12 bg-mealmatch-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6">
        <img
          src={grilledFood}
          alt="Restaurant interior"
          className="w-full md:w-1/2 h-auto rounded-lg"
          loading="lazy"
        />
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <h3 className="text-3xl font-bold">10k+</h3>
              <p className="text-gray-600">Resturants</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">100k+</h3>
              <p className="text-gray-600">Users</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">4.5/5</h3>
              <p className="text-gray-600">Rating</p>
            </div>
          </div>
          <p className="text-base mt-4">
            With over 10k+ restaurants, 100k+ users, and a 4.5/5 rating, MealMatch helps you discover the best dining spots effortlessly. Whether you're in the mood for comfort food, a trendy café, or a fine dining experience, our smart recommendations ensure you find the perfect place every time. Customize your search by mood, cuisine, and budget, and let MealMatch do the rest. Your next favorite meal is just a click away!
          </p>
          <a href="#" className="mt-6 inline-block bg-mealmatch-teal text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;