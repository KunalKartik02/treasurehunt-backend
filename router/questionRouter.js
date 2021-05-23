const express = require("express");
const questionController = require("../controllers/questionController");
const router = express.Router();

router
  .route("/")
  .get(questionController.getAllQuestions)
  .post(questionController.createQuestions);

module.exports = router;
