const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients);

// const listElement = document.createElement('li');
// listElement.classList.add('item');
// listElement.textContent ='Potatoes';
// console.log(listElement)
const selectUL = document.querySelector('#ingredients');
// console.log(selectUL);
// selectUL.append(listElement);



function makeLi(name) {
  const listElement = document.createElement('li');
  listElement.classList.add('item');
  listElement.textContent = name;
  selectUL.append(listElement);
  return selectUL
  
}
const addList = ingredients.map(makeLi);
console.log(addList)
