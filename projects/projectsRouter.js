const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("List of projects");
});

router.post("/", (req, res) => {
  res.status(200).json("Add a new project");
});

module.exports = router;
