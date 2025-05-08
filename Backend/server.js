const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const authenticateToken = require("./controllers/user-controller").authenticateToken;

const app = express();

app.use(express.json());
app.use(cors());

require("dotenv").config();

const userRoutes = require("./routes/user-routes");
const mealRoutes = require("./routes/meal-routes");

app.use("/home", userRoutes);
app.use("/Meal", authenticateToken, mealRoutes);

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mealmatch.uo2sfna.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=MealMatch`
).then(() => {
    app.listen(8082, "0.0.0.0", () => {
        console.log("Connected to MongoDB and server is running on port 8082");
    });
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});
