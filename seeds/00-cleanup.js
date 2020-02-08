exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipe-instructions').truncate();
  await knex('recipe-ingredients').truncate();
  await knex('ingredients').truncate();
  await knex('recipes').truncate();
};
