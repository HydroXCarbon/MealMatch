import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAxios } from "../../axiosConfig/AxiosContext";
import useStyles from "./styles";

const PlaceDetails = ({ place, selected, refProp }) => {
  const axios = useAxios();
  const classes = useStyles();
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    setLiked((prev) => !prev);

    try {
      const response = await axios.post("/meal/favorite", {
        name: place.name,
        address: place.address,
        phone: place.phone,
        website: place.website,
        photoUrl: place.photo,
        rating: place.rating,
        num_reviews: place.num_reviews,
        price_level: place.price_level,
        ranking: place.ranking,
        cuisine: place.cuisine,
        web_url: place.web_url,
      });
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  if (selected)
    refProp?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://res.klook.com/image/upload/c_fill,w_750,ar_16:9,q_auto/activities/ivtizrfcye0uvxyzceiy.webp"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={1}
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip
            key={name}
            size="small"
            label={name}
            className={classes.chip}
          ></Chip>
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
          <IconButton
            aria-label="favorite"
            onClick={handleLike}
            color={liked ? "error" : "default"}
          >
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}{" "}
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
