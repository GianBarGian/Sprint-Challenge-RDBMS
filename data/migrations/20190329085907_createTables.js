
exports.up = function(knex, Promise) {
    const createProjectsTable = () => {
        return knex.schema.createTable('projects', table => {
            table
                .increments();
            table
                .string('name', 128)
                .notNullable
            table
                .string('description', 256)
            table
                .boolean('completed')
        })
    }

    const createActionsTable = () => {
        return knex.schema.createTable('actions', table => {
            table
                .increments();
            table
                .string("description", 128)
                .notNullable
            table
                .string('notes', 256)
            table
                .boolean('completed')
            table
                .integer('projectId')
                .references('id')
                .inTable('projects')
        })
    };

    return createProjectsTable()
        .then(createActionsTable);
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
  .then(knex.schema.dropTableIfExists('actions'));
};
