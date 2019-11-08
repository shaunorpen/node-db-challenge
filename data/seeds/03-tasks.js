exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        { description: "Dust surfaces", project_id: 1 },
        { description: "Mop floors", project_id: 1 },
        { description: "Vacuum carpets", project_id: 1 },
        { description: "Get clean sheets", project_id: 2 },
        { description: "Put new sheets on bed", project_id: 2 },
        { description: "Buy ingredients", project_id: 3 },
        { description: "Prepare meal", project_id: 3 },
        { description: "Serve dinner", project_id: 3 },
      ]);
    });
};
