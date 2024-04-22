const API = "http://ipetym69-api.vercel.app/api/";
const idUser = "6509d2072b1cd92a9fe9115c";
export const getUser = async()=>{
    const response = await fetch(`${API}users/${idUser}`, {
        method:'GET',
        mode:'cors'
    });
    const data = await response.json();
    return await data;
};


const renderNews = news=>{
    return `
    <div class="new">
        <div id="new-image">
            <div id="newsImage">
                <img src="${news.image}" alt="Imagen Noticia 1">
            </div>
        </div>
        <div id="news-information">
            <div id="new-title">
                <h2>${news.title}</h2>
            </div>
            <div id="new-description">
                <p>${news.description}</p>
            </div>
            <button><a href="${news.enlace}" target="_blank">Leer Más</a></button>
        </div>
    
    </div>
    `;
};

const renderResources = resource=>{
    return `
    <div class="others-container">
        <div id="form-title-container">
            <h2>${resource.title}</h2>
        </div>
        <div  id="forms">
            <div class="information-forms">
                <p>${resource.description}</p>
            </div>
            <div class="btn-forms">
                <a href="${resource.image}" alt="Imagen tutorias" target="_blank"><button>Ver</button></a>
            </div>
            
        </div>
    </div>        
    `;
};


export const filter = async(newConta,resourceConta,obj)=>{
    const newsList = await obj.find.news;
    const resourcesList =await obj.find.recources;

    newConta.innerHTML = newsList.map(element => renderNews(element)).join("");
    resourceConta.innerHTML = resourcesList.map(element=>renderResources(element)).join("");
}   