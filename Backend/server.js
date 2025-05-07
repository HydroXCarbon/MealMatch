const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

require("dotenv").config();

const userRoutes = require("./routes/user-routes");
const mealRoutes = require("./routes/meal-routes");

const authenticateToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
        return res
            .status(401)
            .json({ message: "Access denied. No token provided." });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: "Invalid token." });
    }
};

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
