function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('[data-create]');
const clearBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const boxEl = document.querySelector('#boxes')
const amount = inputEl.value;

function creatBoxDiv(event) {
  event.preventDefault()
  const newDivEl = document.createElement('div');
  newDivEl.classList = 'create-box';
  newDivEl.style.height = '30px';
  newDivEl.style.width = '30px';
  newDivEl.style.background = getRandomHexColor();
  boxEl.append(newDivEl)
}

createBtn.addEventListener('click',creatBoxDiv)

// createBoxes(amount)
// destroyBoxes()





console.log(createBtn);
console.log(clearBtn);
console.log(inputEl.value)