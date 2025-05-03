import grilledFood from '../assets/MealPic/image_2.png';
const ContentSection = () => {
    return (
      <section className="py-12 bg-mealmatch-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6">
          <img
            src={grilledFood}
            alt="Grilled food assortment"
            className="w-full md:w-1/2 h-auto rounded-lg"
            loading="lazy"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold uppercase">Find the Perfect Meal with MealMatch</h2>
            <p className="text-base mt-4">
              MealMatch makes choosing where to eat easier than ever! Simply set your preferences, apply filters like cuisine, budget, or dietary preferences, and get restaurant recommendations tailored just for you.
            </p>
            <a href="#" className="mt-4 inline-block bg-mealmatch-teal text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-teal-700 transition">
              Read more
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContentSection;