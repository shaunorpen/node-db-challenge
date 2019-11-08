const db = require("../data/dbConfig");

module.exports = {
  getTasksForProject: project_id => {
    return db("tasks")
      .join("projects", "tasks.project_id", "projects.id")
      .select("tasks.*", "projects.name as project_name", "projects.description as project_description")
      .where({ project_id: project_id });
  },
  addTaskToProject: task => {
    return db("tasks").insert(task);
  }
};
