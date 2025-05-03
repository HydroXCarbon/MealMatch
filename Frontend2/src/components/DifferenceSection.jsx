import grilledFood from '../assets/MealPic/image_2.png';
const DifferenceSection = () => {
    return (
      <section className="bg-mealmatch-teal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold uppercase">What Makes MealMatch Different?</h2>
            <p className="text-base mt-4">
              MealMatch stands out by combining personalized recommendations with a mood-based approach.
            </p>
            <ul className="list-disc pl-5 mt-4 text-sm">
              <li>Mood-Based Recommendations</li>
              <li>Advanced Filters</li>
              <li>Personalized Experience</li>
            </ul>
          </div>
          <img
            src={grilledFood}
            alt="Modern restaurant exterior at night"
            className="w-full md:w-1/2 h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </section>
    );
  };
  
  export default DifferenceSection;