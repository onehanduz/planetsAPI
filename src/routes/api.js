const express = require("express");
const api = express.Router();

const lounchesRouter = require("./lounches/lounches.router");
const planetsRouter = require("./planets/planets.router");

api.use("/launches", lounchesRouter);
api.use("/planetes", planetsRouter);

module.exports = api;
