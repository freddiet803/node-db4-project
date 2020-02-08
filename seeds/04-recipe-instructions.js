exports.seed = async function(knex) {
  await knex('recipe-instructions').insert([
    { instruction: 'place 2 slices of toast in toaster', recipe_id: 1 },
    { instruction: 'take 2 slices of toast out when toasted', recipe_id: 1 },
    {
      instruction: 'spread 1 teaspoon of butter on each slice of bread',
      recipe_id: 1
    },
    { instruction: 'get one bowl and spoon', recipe_id: 2 },
    { instruction: 'pour 1 bowl of cereal into bowl', recipe_id: 2 },
    {
      instruction: 'pour 1 pint of milk into bowl mix with cinnamon',
      recipe_id: 2
    },
    { instruction: 'serve cold', recipe_id: 2 }
  ]);
};
