const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mealSchema = new Schema(
  {
    name: { type: String, required: true },
    photoUrl: { type: String, required: true },
    rating: { type: String, required: true },
    num_reviews: { type: String, required: false, default: "" },
    price_level: { type: String, required: false, default: "" },
    ranking: { type: String, required: false, default: "" },
    cuisine: { type: [String], required: false, default: "" },
    address: { type: String, required: true },
    phone: { type: String, required: false, default: "" },
    web_url: { type: String, required: false, default: "" },
    website: { type: String, required: false, default: "" },
  },
  {
    versionKey: false,
    collection: "Meals",
  }
);

module.exports = mongoose.model("Meals", mealSchema);
