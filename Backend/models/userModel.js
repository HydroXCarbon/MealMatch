const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true, minlength: 6 },
        favoriteMeals: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Meal" }],
            default: [],
        },
    },
    {
        versionKey: false,
        collection: "Users",
    }
);

module.exports = mongoose.model("Users", userSchema);
