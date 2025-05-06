import grilledFood from '../assets/MealPic/3dnavigaion.png';
const MapSection = () => {
    return (
        <section
            className="h-[400px] bg-mealmatch-dark bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${grilledFood})` }}
            aria-label="Interactive 3D map navigation section"
        >
        <h2 className="text-white text-4xl font-bold text-center shadow-md">
          Interactive 3D Map Navigation
        </h2>
      </section>
    );
  };
  
  export default MapSection;