exports.up = function(knex, Promise) {
  return knex.schema.createTable('food_log', function(table) {
      table.increments()
      table.string('phase')
      table.string('date')
      table.string('meal_of_the_day')
      table.string('protein')
      table.string('water_intake')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food_log')
};


