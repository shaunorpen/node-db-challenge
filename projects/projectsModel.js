const db = require("../data/dbConfig");
const helpers = require("../helpers/helpers");

module.exports = {
  getAllProjects: () => {
    return db("projects").then(projects =>
      projects.map(project => {
        return {
          ...project,
          completed: helpers.convertBoolean(project.completed)
        };
      })
    );
  },
  addProject: project => {
    return db("projects").insert(project);
  }
};
