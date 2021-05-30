const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUsers);

router.route("/:uid").get(userController.getUser);

module.exports = router;
