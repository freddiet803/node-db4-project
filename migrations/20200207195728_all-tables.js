exports.up = async function(knex) {
  await knex.schema.createTable('recipes', tbl => {
    tbl.increments('id');
    tbl.string('recipeName', 250).notNullable();
  });

  await knex.schema.createTable('ingredients', tbl => {
    tbl.increments('id');
    tbl.string('ingredientName', 128).notNullable();
  });

  await knex.schema.createTable('recipe-ingredients', tbl => {
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');

    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients');

    tbl
      .float('quantity')
      .notNullable()
      .unsigned();
    tbl.primary(['recipe_id', 'ingredient_id']);
  });

  await knex.schema.createTable('recipe-instructions', tbl => {
    tbl.increments('id');
    tbl.string('instruction', 128).notNullable();
    tbl
      .integer('recipe_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('recipes');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipe-instructions');
  await knex.schema.dropTableIfExists('recipe-ingredients');
  await knex.schema.dropTableIfExists('ingredients');
  await knex.schema.dropTableIfExists('recipes');
};
