require("dotenv").config();
const express = require("express");

const morgan = require("morgan");
const es6Renderer = require("express-es6-template-engine");

const server = express();

server.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}.`);
});
