const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = '16px';
inputEl.value = 16;


function changeSize() {
    textEl.style.fontSize = `${inputEl.value}px`
    
}
inputEl.addEventListener('input',changeSize)

console.log(textEl.style.fontSize)
console.log(inputEl.value)

// console.log(inputEl.currentTarget.value)