const db = require("../data/dbConfig");

module.exports = {
  getAllResources: () => {
    return db("resources");
  },
  addResource: resource => {
    return db("resources").insert(resource);
  }
};