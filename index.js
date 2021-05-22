const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const InitiateMongoServer = require("./db");

InitiateMongoServer();

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
});
