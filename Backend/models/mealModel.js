const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mealSchema = new Schema(
    {
        name: { type: String, required: true },
        photoUrl: { type: String, required: true },
        rating: { type: String, required: true },
        num_reviews: { type: String, required: true },
        price_level: { type: String, required: true },
        ranking: { type: String, required: true },
        cuisine: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        web_url: { type: String, required: true },
        website: { type: String, required: true },
    },
    {
        versionKey: false,
        collection: "Meals",
    }
);

module.exports = mongoose.model("Meals", mealSchema);
