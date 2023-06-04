const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const ping = require("./Routes/ping");
const opportunity = require("./Routes/opportunity");
const { mongoKey, port } = require("./config");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/ping", ping);
app.use("/api/opportunities", opportunity);

const developmentPort = process.env.PORT || port;

mongoose.connect(mongoKey).then((res) => {
  console.log("Connected!");
});

app.listen(developmentPort, () => {
  console.log(`Server is running on port ${developmentPort}`);
});
