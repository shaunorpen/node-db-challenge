const express = require("express");

const router = express.Router();

router.get("/:project", (req, res) => {
  res.status(200).json("List of tasks for project " + req.params.project);
});

router.post("/:project", (req, res) => {
  res.status(200).json("Add a new task for project " + req.params.project);
});

module.exports = router;
