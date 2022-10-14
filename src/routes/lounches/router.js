const express = require("express");

const lounchesRouter = express.Router();

lounchesRouter.get("/", (req, res) => {
  res.send({ ok: "hello" });
});

module.exports = lounchesRouter;
