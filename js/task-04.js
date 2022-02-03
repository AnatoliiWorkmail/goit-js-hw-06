
let counterValue = 0;



const acc = document.querySelector('#value')
const clickDec = () => {
    counterValue -= 1;
acc.textContent = counterValue;}
const clickInk = () => {
    counterValue += 1;
acc.textContent = counterValue;}

const valueButtonDec = document.querySelector('button[data-action="decrement"]');
valueButtonDec.addEventListener('click',clickDec);
console.log(valueButtonDec)

const valueButtonInc = document.querySelector('button[data-action="increment"]');
valueButtonInc.addEventListener('click', clickInk);


console.log(acc)
console.log(counterValue)
// firstChild.