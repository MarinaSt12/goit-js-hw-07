const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listContainer = document.querySelector(`ul#ingredients`);
const insertListItems = items => {
  const unit = document.createElement(`li`);
  unit.textContent = items;
  return unit;
};
const allUnits = ingredients.map(items => insertListItems(items));
listContainer.append(...allUnits);

// const ingredientsEl = document.querySelector(`#ingredients`);
// console.log(ingredientsEl);

// const item = document.createElement(`li`);

// item.textContent = ingredients;
// ingredientsEl.append(item);

// const addItemIngredients = ingredients.map(ingredient => ingredient.item);
// console.log(addItemIngredients);
