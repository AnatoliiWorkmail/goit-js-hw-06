
const formIdent = document.querySelector('.login-form');

function formSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;
    const identData = { email, password };
 
    if (email === "" || password === "") {
          alert `entering login and password`
    }else{console.log(identData)}
formIdent.reset()
}
formIdent.addEventListener('submit',formSubmit)




