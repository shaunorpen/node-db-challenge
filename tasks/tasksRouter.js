const express = require("express");
const tasks = require("./tasksModel");

const router = express.Router();

router.get("/:id", (req, res) => {
  tasks
    .getTasksForProject(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error retrieving tasks: " + error.message });
    });
});

router.post("/:id", (req, res) => {
  const task = {
    ...req.body,
    project_id: req.params.id
  };
  tasks
    .addTaskToProject(task)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error creating task: " + error.message });
    });
});

module.exports = router;
