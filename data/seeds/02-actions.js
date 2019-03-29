
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'Start', notes: "gibberish", projectId: 1},
        {id: 2, description: 'Do', notes: "gibberish", projectId: 1},
        {id: 3, description: 'Finish', notes: "gibberish", projectId: 1}
      ]);
    });
};
