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

    const fecthData = async()=>{
        try {
            const response = await fetch(`${API_URL}api/auth`,{
               method:'POST',
               mode:'cors',
               headers:{
                'Content-Type':'application/json',
               },
               body:JSON.stringify({
                username:inputs.username,
                password:inputs.password,    
               }),
            });

            if(!response.ok){
                throw new Error('La solicitud no fue exitosa');
            };

            if(response.ok){
                const data = await response.json();

                localStorage.setItem('token',JSON.stringify({user:data.user,token:data.token}));
            }
            
        } catch (error) {
            throw new Error('Error en la solicitud')
        }

    }

    fecthData();
}

loginForm.addEventListener("submit",
    (e) =>{
        e.preventDefault();
        login({username:usernameInput.value,password:passwordInput.value});
        // handlerButton({username:usernameInput.value.toString(),password:passwordInput.value.toString()});
    }
);

