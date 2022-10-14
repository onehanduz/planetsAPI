const express = require("express");
const morgan = require("morgan");
const api = require("./routes/api");
const app = express();

app.use(morgan("combined"));
app.use(express.json());

app.use(api);

module.exports = app;
