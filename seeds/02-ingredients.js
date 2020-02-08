exports.seed = async function(knex) {
  await knex('ingredients').insert([
    { ingredientName: 'bread' },
    { ingredientName: 'butter' },

    { ingredientName: 'milk' },
    { ingredientName: 'cereal' }
  ]);
};
