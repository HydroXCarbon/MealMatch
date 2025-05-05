import grilledFood from '../assets/MealPic/image_2.png';

const ContentSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#FDFFEF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
        <img
          src={grilledFood}
          alt="Grilled food assortment"
          className="w-full md:w-3/5 h-auto rounded-lg object-cover max-h-[600px]"
          loading="lazy"
        />
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Find the Perfect Meal with MealMatch
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            MealMatch makes choosing where to eat easier than ever! Simply set your preferences, 
            apply filters like cuisine, budget, or dietary preferences, and get restaurant 
            recommendations tailored just for you.
          </p>
          <a 
            href="#" 
            className="inline-block bg-mealmatch-teal text-white text-lg font-medium py-3 px-8 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-xl w-fit"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;