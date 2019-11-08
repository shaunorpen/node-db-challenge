const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("List of resources");
});

router.post("/", (req, res) => {
  res.status(200).json("Add a new resource");
});

module.exports = router;
