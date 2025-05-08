const express = require("express");

const userController = require("../controllers/meal-controller")

const router = express.Router()

router.get("/favorite", userController.get_favorite);
router.post("/favorite", userController.update_favorite);
router.delete("/favorite", userController.delete_favorite);

module.exports = router;