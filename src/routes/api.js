const express = require("express");
const api = express.Router();

const lounchesRouter = require("./lounches/router");
const planetsRouter = require("./planets/router");

api.use("/lounch", lounchesRouter);
api.use("/planet", planetsRouter);

module.exports = api;
