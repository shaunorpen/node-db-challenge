const db = require("../data/dbConfig");

module.exports = {
  getAllProjects: () => {
    return db("projects");
  },
  addProject: project => {
    return db("projects").insert(project);
  }
};
