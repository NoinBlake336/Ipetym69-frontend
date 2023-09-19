const API_URL = 'https://ipetym69-api.vercel.app/';

const validateToken=async(token,container)=>{
    try {
        const response = await fetch(`${API_URL}dashboard`,{
            method:'GET',
            mode:'cors',
            headers:{
                'Content-Type':'Application/json',
                'token':token.token
            },
        });
        if(!response.ok){
            return container.innerHTML = `
            <nav id="navLogin">
                <ul>
                    <li><img src="../images/colegiologo.png" alt="Logo del colegio"></li>
                    <li> <span>Panel de administrador Ipetym69</span></li>
                </ul>
    
            </nav>
            <main>
            <div id="login-container" >
                <div id="login-box">
                    <h1>Debes iniciar sesion</h1>
                    <img id="error_image" src="../images/descarga-removebg-preview.png" alt="Logo del colegio">
                        <a id="button-login" style="text-decoration:none" href="../login">Iniciar Sesion</a>
                </div>
                
            </div>
        </main>`
        }

        return true;

    } catch (error) {
        throw new Error(error);
    }
}
const renderHTML = (container)=>{

     return container.innerHTML = `
            <nav id="navLogin">
        <ul>
            <li><img src="../images/colegiologo.png" alt="Logo del colegio"></li>
            <li> <span>Panel de administrador Ipetym69</span></li>
        </ul>

    </nav>
    <main id="main-container">
        <div id="upload-type">
            <h1>Seleccione que tipo de informacion desea cargar al sitio</h1>
            <div id="upload-options">
                <span class="upload-option">Recurso</span>
                <span class="upload-option">Noticia</span>
            </div>
        </div>
        <div id="types-container"></div>





    </main>
    `
}

export const VerifyToken = (token,container)=>{
    if(!token){
        return container.innerHTML = `
        <nav id="navLogin">
            <ul>
                <li><img src="../images/colegiologo.png" alt="Logo del colegio"></li>
                <li> <span>Panel de administrador Ipetym69</span></li>
            </ul>

        </nav>
        <main>
        <div id="login-container" >
            <div id="login-box">
                <h1>Debes iniciar sesion</h1>
                <img id="error_image" src="../images/descarga-removebg-preview.png" alt="Logo del colegio">
                    <a id="button-login" style="text-decoration:none" href="../login">Iniciar Sesion</a>
            </div>
            
        </div>
    </main>`;
    }
    validateToken(token,container);
    renderHTML(container);

};