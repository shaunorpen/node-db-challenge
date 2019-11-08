const db = require("../data/dbConfig");

module.exports = {
  getTasksForProject: project_id => {
    return db("tasks").where({ project_id: project_id });
  },
  addTaskToProject: task => {
    return db("tasks").insert(task);
  }
};
