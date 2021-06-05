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

const app = express();
app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);
app.use("/questions", checkIfAuthenticated, questionRouter);
app.use("/answer", checkIfAuthenticated, answerRouter);
app.use("/users", checkIfAuthenticated, userRouter);
app.use("/*", rootRouter);

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
});
