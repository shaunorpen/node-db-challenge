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
  getProjectById: project_id => {
    const project = db("projects").where({ id: project_id });
    const resources = db("resources as r")
      .join("project_resources as pr", "r.id", "pr.resource_id")
      .select("r.id", "r.name", "r.description")
      .where({ "pr.project_id": project_id });
    const tasks = db("tasks").where({ project_id: project_id });
    return Promise.all([project, resources, tasks]).then(values => {
      return {
        ...values[0][0],
        completed: helpers.convertBoolean(values[0][0].completed),
        tasks: values[2].map(task => {
          return {
            ...task,
            completed: helpers.convertBoolean(task.completed)
          };
        }),
        resources: values[1]
      };
    });
  },
  addProject: project => {
    return db("projects").insert(project);
  }
};
