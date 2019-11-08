const express = require("express");
const projectsRouter = require("./projects/projectsRouter");
const resourcesRouter = require("./resources/resourcesRouter");
const tasksRouter = require("./tasks/tasksRouter");

const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

server.get("*", (req, res) => {
  res.status(200).json("API up and running");
});

server.listen(process.env.PORT || 4000, () => {
  console.log("Server listening on " + (process.env.PORT || 4000));
});
