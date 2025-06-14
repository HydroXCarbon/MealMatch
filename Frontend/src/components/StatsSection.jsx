import grilledFood from '../assets/MealPic/image_3.png';

const StatsSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#FDFFEF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        <img
          src={grilledFood}
          alt="Restaurant interior"
          className="w-full md:w-3/5 h-auto rounded-lg object-cover max-h-[600px]"
          loading="lazy"
        />
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <h3 className="text-3xl font-bold">10k</h3>
              <p className="text-gray-600">Resturants</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">100k</h3>
              <p className="text-gray-600">Users</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">4.5/5</h3>
              <p className="text-gray-600">Rating</p>
            </div>
          </div>
          <p className="text-lg md:text-xl mt-6 leading-relaxed">
            With over 10k+ restaurants, 100k+ users, and a 4.5/5 rating, MealMatch helps you discover the best dining spots effortlessly. Whether you're in the mood for comfort food, a trendy café, or a fine dining experience, our smart recommendations ensure you find the perfect place every time. Customize your search by mood, cuisine, and budget, and let MealMatch do the rest. Your next favorite meal is just a click away!
          </p>
          <a
            href="#"
            className="inline-block bg-mealmatch-teal text-white text-lg font-medium py-3 px-8 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-xl w-fit mt-8"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;