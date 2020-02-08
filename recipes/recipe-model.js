const db = require('../data/dbConfig.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes').select('recipeName');
}

function getShoppingList(recipeId) {
  return db('recipe-ingredients as ri')
    .join('ingredients as i', 'ri.ingredient_id', 'i.id')
    .join('recipes as r', 'ri.recipe_id', recipeId)
    .where({ recipeId });
}

function getInstructions(recipeId) {
  return db('recipes as r')
    .join('recipe-instructions as ri', 'r.id', 'ri.recipe_id')
    .where({ recipeId });
}
