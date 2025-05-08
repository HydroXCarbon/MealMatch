import grilledFood from '../assets/MealPic/image_1.png';

const DifferenceSection = () => {
  return (
    <section className="bg-mealmatch-teal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse gap-12">
        <img
          src={grilledFood}
          alt="Modern restaurant exterior at night"
          className="w-full md:w-3/5 h-auto rounded-lg object-cover max-h-[600px]"
          loading="lazy"
        />
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Makes MealMatch Different?
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            MealMatch stands out by combining personalized recommendations with a mood-based approach.
          </p>
          <ul className="space-y-4 text-lg md:text-xl">
            <li className="flex items-center">
              <span className="mr-3">•</span>
              Mood-Based Recommendations
            </li>
            <li className="flex items-center">
              <span className="mr-3">•</span>
              Advanced Filters
            </li>
            <li className="flex items-center">
              <span className="mr-3">•</span>
              Personalized Experience
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;