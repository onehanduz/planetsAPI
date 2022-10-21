const express = require("express");

const lounchesRouter = express.Router();

const {
  httpGetAllLaunches,
  httpAddNewLaunches,
  httpAbortLaunches,
} = require("./controller");

lounchesRouter.get("/", httpGetAllLaunches);
lounchesRouter.post("/", httpAddNewLaunches);
lounchesRouter.delete("/:id", httpAbortLaunches);

module.exports = lounchesRouter;
