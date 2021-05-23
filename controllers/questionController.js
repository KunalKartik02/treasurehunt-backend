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

exports.createQuestions = async function (req, res) {
  try {
    const newQuestion = await questions.create(req.body);
    res
      .status(200)
      .json({ status: res.statusCode, message: "OK", data: newQuestion });
  } catch {
    res.status(404).json({ status: "fail", message: err });
  }
};
