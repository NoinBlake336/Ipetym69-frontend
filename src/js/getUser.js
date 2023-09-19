const API = "https://ipetym69-api.vercel.app/api/";
const idUser = "6509d2072b1cd92a9fe9115c";
export const getUser = async()=>{
    const response = await fetch(`${API}users/${idUser}`);
    const data = await response.json();
    return await data;
};


const renderNews = (container,news)=>{
    
}   