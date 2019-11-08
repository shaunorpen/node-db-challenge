exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table.string("name").notNullable();
      table.string("description");
      table.boolean("completed").defaultTo(0);
    })
    .createTable("resources", table => {
      table.increments();
      table.string("name").notNullable();
      table.string("description");
    })
    .createTable("tasks", table => {
      table.increments();
      table.string("description").notNullable();
      table.string("notes");
      table.boolean("completed").defaultTo(0);
      table
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", table => {
      table.increments();
      table
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE");
      table
        .integer("resource_id")
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
