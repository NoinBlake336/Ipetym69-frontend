const usernameInput = document.querySelector(".usernameInput")
const passwordInput = document.querySelector(".usernamePassword")
const loginContainer = document.getElementById("login-container")
const loginButton = document.getElementById("button-login")
const errorDiv = document.getElementById("error-div")
const loginForm = document.getElementById("login-form")


const handlerButton = (credentials) => {

    credentials.username === usernameInput.value.toString() && credentials.password === passwordInput.value.toString() ? loginContainer.classList.add("hidden") : errorDiv.innerHTML = '<span class="errorSpan">Los datos son incorrectos</span>'
    usernameInput.value = "";
    passwordInput.value="";
    
    
}



loginForm.addEventListener("submit",
(e) =>{
    e.preventDefault();

    handlerButton({username:"nao", password:"123"})
}
)