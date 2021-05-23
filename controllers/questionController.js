const questions = require("../models/question");

exports.getAllQuestions = async function (req, res) {
  try {
    const allQuestions = await questions.find();
    res
      .status(200)
      .json({ status: res.statusCode, message: "OK", data: allQuestions });
  } catch {
    res.status(404).json({ status: "fail", message: err });
  }
};
