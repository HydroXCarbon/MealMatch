import { CssBaseline, Grid } from "@mui/material";

import Header from "../components/Header/Header";
import List from "../components/List/List";
import Map from "../components/Map/Map";

const Dashboard = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [cuisine, setCuisine] = useState([]);

  const getPlacesData = async (type, sw, ne) => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            //   restaurant_tagcategory_standalone: '10591',
            //   restaurant_tagcategory: '10591',
            //   limit: '30',
            //   currency: 'USD',
            //   open_now: 'false',
            //   lunit: 'km',
            //   lang: 'en_US'
          },
          headers: {
            "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_API_KEY,
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          },
        }
      );
      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const selectedCuisines = Array.isArray(cuisine)
      ? cuisine.map((c) => String(c.value || c).toLowerCase())
      : [];

    const filtered = places.filter((place) => {
      const matchesRating = place.rating >= rating;
      const matchesCuisine = selectedCuisines.length
        ? place.types?.some(
            (t) =>
              typeof t === "string" &&
              selectedCuisines.some((sc) => t.includes(sc))
          )
        : true;

      return matchesRating && matchesCuisine;
    });
    console.log("Filtered places:", filtered);

    setFilteredPlaces(filtered);
  }, [places, rating, cuisine]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);

      if (!bounds || !bounds.sw || !bounds.ne) return;

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);
  // console.log(places);
  // console.log(filteredPlaces);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            cuisine={cuisine}
            setCuisine={setCuisine}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
