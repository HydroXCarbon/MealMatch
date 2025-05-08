const User = require("../models/userModel");
const Meal = require("../models/mealModel");

const HttpError = require("../models/http-errors");

const get_favorite = async (req, res, next) => {
  const userId = req.user.userId;
  let existingUser;
  try {
    existingUser = await User.findById(userId).populate("favoriteMeals");
  } catch (err) {
    const error = new HttpError(
      "Fetching favorite meals failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Could not find user for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ favoriteMeals: existingUser.favoriteMeals });
};

const update_favorite = async (req, res, next) => {
  const userId = req.user.userId;
  const { meal } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Updating favorite meals failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Could not find user for the provided id.",
      404
    );
    return next(error);
  }

  // Check if the meal already exists in the database
  let existingMeal;
  try {
    existingMeal = await Meal.findOne({
      name: meal.name,
      address: meal.address,
      phone: meal.phone,
    });
    if (!existingMeal) {
      // Create a new meal if it doesn't exist
      const newMeal = new Meal(meal);
      existingMeal = await newMeal.save();
    }
  } catch (err) {
    const error = new HttpError(
      "Creating or finding the meal failed, please try again later.",
      500
    );
    return next(error);
  }

  // Check if the meal is already in the user's favorites
  if (
    !existingUser.favoriteMeals.some((mealId) =>
      mealId.equals(existingMeal._id)
    )
  ) {
    existingUser.favoriteMeals.push(existingMeal._id);
  }

  try {
    await existingUser.save();
  } catch (err) {
    const error = new HttpError(
      "Updating favorite meals failed, please try again later.",
      500
    );
    return next(error);
  }

  res.json({ message: "Favorite meals updated successfully." });
};

const delete_favorite = async (req, res, next) => {
  const userId = req.user.userId;
  const { mealId } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Deleting favorite meals failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Could not find user for the provided id.",
      404
    );
    return next(error);
  }

  existingUser.favoriteMeals = existingUser.favoriteMeals.filter(
    (id) => !id.equals(mealId)
  );

  try {
    await existingUser.save();
  } catch (err) {
    const error = new HttpError(
      "Deleting favorite meals failed, please try again later.",
      500
    );
    return next(error);
  }

  res.json({ message: "Favorite meals deleted successfully." });
};

exports.get_favorite = get_favorite;
exports.update_favorite = update_favorite;
exports.delete_favorite = delete_favorite;
