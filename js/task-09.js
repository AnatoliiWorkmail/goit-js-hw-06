function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const selectBody = document.querySelector('body');

const selectButton = document.querySelector('.change-color');
const selectSpan = document.querySelector('.color')

function changeColorBackground() {
  selectBody.style.backgroundColor = getRandomHexColor();
  selectSpan.textContent = getRandomHexColor();
}
selectButton.addEventListener('click',changeColorBackground)

console.log(selectButton)
console.log(selectBody)
