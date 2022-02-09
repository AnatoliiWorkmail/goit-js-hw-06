
const selectInput = document.querySelector('#name-input');
const selectOutput = document.querySelector('#name-output');
function Name() {
    (selectInput.value === "") ?  selectOutput.textContent = 'Anonymous' :   selectOutput.textContent = selectInput.value   
    }

selectInput.addEventListener('input', Name);








console.log(selectInput);
console.log(selectOutput);