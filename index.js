const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const InitiateMongoServer = require("./db");

InitiateMongoServer();

const rootRouter = require("./router/rootRouter");
const healthRouter = require("./router/healthRouter");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/health", healthRouter);
app.use("/*", rootRouter);

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
});
