function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {
    name,
    price,
    type
  }
}

function addIngredients(newIngredient, ingredients) {
  if (!ingredients.includes(newIngredient)) {
    ingredients.push(newIngredient);
  }
}

function formatPrice(price) {
  return '$' + price
}

function decreasePrice(price) {
  return price * .9;
}

function createRecipe(title, ingredients, type) {
  return {
    title,
    ingredients,
    type
  }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
