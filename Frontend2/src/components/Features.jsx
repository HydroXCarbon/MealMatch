const FeatureCard = ({ title, description, icon }) => (
    <div
      className="bg-mealmatch-teal text-white p-6 rounded-lg shadow-md w-full"
      aria-label={`${title} feature card`}
    >
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-mealmatch-teal text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold uppercase text-center">{title}</h3>
      <p className="text-sm mt-2 text-center">{description}</p>
      <a href="#" className="block text-center mt-4 text-white underline text-sm hover:text-gray-200">
        Read more
      </a>
    </div>
  );
  
  const Features = () => {
    const features = [
      {
        title: "Mood-Based Picks",
        description: "Get restaurant suggestions based on your mood, occasion, and ambiance.",
        icon: "😊",
      },
      {
        title: "Top-Rated Spots",
        description: "Explore a curated list of the highest-rated restaurants.",
        icon: "⭐",
      },
      {
        title: "Friend & Group Match",
        description: "Decide where to eat by considering everyone’s preferences.",
        icon: "👥",
      },
    ];
  
    return (
      <section className="py-12" style={{ backgroundColor: '#FDFFEF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;