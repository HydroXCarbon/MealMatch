import React, { useState, useEffect } from "react";

// import { getPlacesData } from "../api/index";
import axios from "axios";

import { CssBaseline, Grid } from "@mui/material";

import Header from "../components/Header/Header";
import List from "../components/List/List";
import Map from "../components/Map/Map";

const Dashboard = () => {
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
            "x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPI_API_KEY,
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          },
        }
      );
      console.log(sw, ne);
      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [coordinates, setCoordinates] = useState({
    lat: 13.7563,
    lng: 100.5018,
  });
  const [bounds, setBounds] = useState({ ne: null, sw: null });

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      // set a sensible default (e.g., city center)
      setCoordinates({ lat: 13.7563, lng: 100.5018 }); // Bangkok
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log("Got position:", latitude, longitude);
        setCoordinates({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Geolocation error:", error);
        // fall back on a default if you want:
        setCoordinates({ lat: 13.7563, lng: 100.5018 });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
    console.log(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const data = await getPlacesData(type, bounds.sw, bounds.ne);
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };

    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      fetchPlaces();
    }
  }, [type, bounds]);

  // console.log(places);
  // console.log(filteredPlaces);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid
        container
        spacing={0}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          margin: 0,
        }}
      >
        {/* List Section */}
        <Grid item xs={12} md={4} style={{ flex: "0 0 30%", margin: 0 }}>
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
        {/* Map Section */}
        <Grid item xs={12} md={8} style={{ flex: "1", margin: 0 }}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
