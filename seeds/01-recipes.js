exports.seed = async function(knex) {
  await knex('recipes').insert([
    { recipeName: 'toast' },
    { recipeName: 'cereal' }
  ]);
};
