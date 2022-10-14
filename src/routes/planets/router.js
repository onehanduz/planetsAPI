const express = require("express");

const planetsRouter = express.Router();

planetsRouter.get("/");

module.exports = planetsRouter;
