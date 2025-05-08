import grilledFood from '../assets/MealPic/image_2.png';
const Hero = () => {
    return (
        <section
            className="h-[500px] md:h-[600px] bg-mealmatch-offwhite bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${grilledFood})` }}
            aria-label="Hero section with grilled food image and MealMatch title"
        >
        <div className="text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold uppercase">MealMatch</h1>
          <p className="text-2xl md:text-3xl mt-4">Let's us find your best meal</p>
        </div>
      </section>
    );
  };
  
  export default Hero;