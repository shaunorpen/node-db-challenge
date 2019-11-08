const express = require("express");
const resources = require("./resourcesModel");

const router = express.Router();

router.get("/", (req, res) => {
  resources
    .getAllResources()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error retrieving resources: " + error.message });
    });
});

router.post("/", (req, res) => {
  resources
    .addResource(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error creating resource: " + error.message });
    });
});

module.exports = router;
