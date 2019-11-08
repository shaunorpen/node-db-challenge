const express = require("express");
const projects = require("./projectsModel");
const helpers = require("../helpers/helpers");

const router = express.Router();

router.get("/", (req, res) => {
  projects
    .getAllProjects()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error retrieving projects: " + error.message });
    });
});

router.post("/", (req, res) => {
  projects
    .addProject(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error creating project: " + error.message });
    });
});

module.exports = router;
