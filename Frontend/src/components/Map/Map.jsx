import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import "./Map.css";

const Map = ({
    setCoordinates,
    setBounds,
    coordinates,
    places,
    setChildClicked,
}) => {
    const isDesktop = useMediaQuery("(min-width:600px)");

    return (
        <div
            className="mapContainer"
            style={{
                height: "calc(100vh - 64px)", // Adjust height dynamically
                width: "100%",
                margin: "0 auto",
                padding: "0",
            }}
        >
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place, index) => (
                    <div
                        className="markerContainer"
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={index}
                    >
                        {!isDesktop ? (
                            <LocationOnOutlinedIcon
                                color="primary"
                                fontSize="large"
                            />
                        ) : (
                            <Paper elevation={3} className="tooltipPaper">
                                <Typography variant="subtitle2" gutterBottom>
                                    {place.name}
                                </Typography>
                                <img
                                    className="pointer"
                                    src={
                                        place.photo
                                            ? place.photo.images.large.url
                                            : "https://res.klook.com/image/upload/c_fill,w_750,ar_16:9,q_auto/activities/ivtizrfcye0uvxyzceiy.webp"
                                    }
                                    alt={place.name}
                                />
                                <Rating
                                    size="small"
                                    value={Number(place.rating)}
                                    readOnly
                                />
                            </Paper>
                        )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
