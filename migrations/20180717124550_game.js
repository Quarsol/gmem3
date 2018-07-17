exports.up = function(knex) {
  return knex.schema.createTable('game', (table) => {
    table.increments();
    table.string('name');
    table.string('developer');
    table.float('rating');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('game');
};
