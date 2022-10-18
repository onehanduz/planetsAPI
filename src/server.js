const http = require("http");
require("dotenv").config();
const app = require("./app");
const { mongoConnect } = require("./services/mongo");
const { loadLaunchData } = require("./models/launch.model");
const { loadPlanetsData } = require("./models/planet.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadLaunchData();
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
