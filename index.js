const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const InitiateMongoServer = require("./db");

InitiateMongoServer();

const checkIfAuthenticated = require("./authenticateToken");
const rootRouter = require("./router/rootRouter");
const healthRouter = require("./router/healthRouter");
const questionRouter = require("./router/questionRouter");
const userRouter = require("./router/userRouter");
const answerRouter = require("./router/asnwerRouter");
const leaderBoardRouter = require("./router/leaderBoard");

const app = express();

const whiteList = [
  "https://treasure-hunt-comp.web.app/",
  "https://quaruntime.web.app/",
];

const corsOption = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOption));
app.use(express.json());

app.use("/health", healthRouter);
app.use("/questions", checkIfAuthenticated, questionRouter);
app.use("/answer", checkIfAuthenticated, answerRouter);
app.use("/users", checkIfAuthenticated, userRouter);
app.use("/leaderboard", leaderBoardRouter);
app.use("/*", rootRouter);

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
});
