const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const selectUL = document.querySelector('#ingredients');
console.log(selectUL);

const arrayIng = ingredients.map(name => {
  const listElement = document.createElement('li');
  listElement.classList.add('item');
  listElement.textContent = name;
  return listElement
})

selectUL.append(...arrayIng);


