const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mealSchema = new Schema(
    {
        mealName: { type: String, required: true },
        mealImage: { type: String, required: true },
        userId: { type: mongoose.Types.ObjectId, required: true, ref: "Users" },
    },
    {
        versionKey: false,
        collection: "Meals",
    }
);

module.exports = mongoose.model("Meals", mealSchema);
