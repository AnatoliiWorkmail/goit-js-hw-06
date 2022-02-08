function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('[data-create]');
const clearBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const boxEl = document.querySelector('#boxes')
// inputEl.value = 4;
// const amount = inputEl.valueAsNumber;
let amount
inputEl.addEventListener('change',()=>{return amount=inputEl.valueAsNumber })

function creatBoxDiv(event) {
  event.preventDefault()
  const newDivEl = document.createElement('div');
  newDivEl.classList = 'create-box';
  newDivEl.style.height = '30px';
  newDivEl.style.width = '30px';
  newDivEl.style.background = getRandomHexColor();
  boxEl.append(newDivEl)
  for (let i = 10; i <Number(10*amount); i += 10){
   const newDivEl = document.createElement('div');
  newDivEl.classList = 'create-box';
  newDivEl.style.height = `${40+i}px`;
  newDivEl.style.width = `${40+i}px`;
  newDivEl.style.background = getRandomHexColor();
  boxEl.append(newDivEl)
 }
}
function destroyBoxes() {
  boxEl.innerHTML = '';
}

createBtn.addEventListener('click',creatBoxDiv)
clearBtn.addEventListener('click',destroyBoxes)
// createBoxes(amount)
// destroyBoxes()





console.log(createBtn);
console.log(clearBtn);
console.log(inputEl)