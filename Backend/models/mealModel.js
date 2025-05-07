const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mealSchema = new Schema(
    {
        mealName: { type: String, required: true },
        mealImage: { type: String, required: true },
    },
    {
        versionKey: false,
        collection: "Meals",
    }
);

module.exports = mongoose.model("Meals", mealSchema);
