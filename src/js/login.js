const usernameInput = document.querySelector(".usernameInput");
const passwordInput = document.querySelector(".usernamePassword");
const loginContainer = document.getElementById("login-container");
const loginButton = document.getElementById("button-login");
const errorDiv = document.getElementById("error-div");
const loginForm = document.getElementById("login-form");

const API_URL = 'https://ipetym69-api.vercel.app/';

const handlerButton = (credentials) => {

    credentials.username === usernameInput.value.toString() && credentials.password === passwordInput.value.toString() ? loginContainer.classList.add("hidden") : errorDiv.innerHTML = '<span class="errorSpan">Los datos son incorrectos</span>'
    usernameInput.value = "";
    passwordInput.value="";
    
    
}

const login = (inputs)=>{
    fetch(`${API_URL}api/auth`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            username:inputs.username,
            password:inputs.password,
        }),
    })
    .then(response =>{
        if(response.ok){
            console.log(response.json());
        }
    })
}

loginForm.addEventListener("submit",
    (e) =>{
        e.preventDefault();
        login({username:usernameInput.value,password:passwordInput.value});
        // handlerButton({username:usernameInput.value.toString(),password:passwordInput.value.toString()});
    }
);

