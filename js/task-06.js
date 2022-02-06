const inputEl = document.querySelector('#validation-input');

function check(event) {
    if (event.currentTarget.value.length == inputEl.dataset.length) {
       
        inputEl.classList.add('valid');
         inputEl.classList.remove('invalid');

    } else {
       
       inputEl.classList.add('invalid')
         inputEl.classList.remove('valid');
    };
    
}
inputEl.addEventListener('blur', check);

console.log(inputEl)
console.log(inputEl.dataset.length)
console.log(inputEl.textContent.length)
