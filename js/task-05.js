
const selectInput = document.querySelector('#name-input');
const selectOutput = document.querySelector('#name-output');
function Name() {
    if (selectInput.value === "") {
      return selectOutput.textContent = 'anonymous'   
     }
   
        let content = selectInput.value;
        return selectOutput.textContent = content; 

    }
    
    
    

selectInput.addEventListener('input', Name);








console.log(selectInput);
console.log(selectOutput);