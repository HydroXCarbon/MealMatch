const Newsletter = () => {
    return (
      <section className="bg-mealmatch-light-teal py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold">Stay Updated!</h2>
          <p className="text-base mt-4 max-w-2xl mx-auto">
            Get the latest restaurant trends, exclusive deals, and personalized recommendations with MealMatch.
          </p>
          <form className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full md:w-72 p-2 border border-gray-300 rounded-lg"
              aria-label="Enter your email to subscribe"
            />
            <button
              type="submit"
              className="bg-white text-black border border-black px-4 py-2 rounded-lg hover:bg-mealmatch-teal hover:text-white"
              aria-label="Subscribe to MealMatch newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Newsletter;