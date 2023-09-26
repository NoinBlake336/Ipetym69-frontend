import { filter } from "./getInformation.js";


const deleteNewsCard = async(id) =>{
    try {
        const apiUrl = `https://ipetym69-api.vercel.app/api/news/${id}`;
        const response = await fetch(apiUrl,{
            method:'DELETE',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if(response.ok){
            filter('News');
        }
        
    } catch (error) {
        
    }
};

const deleteResourceCard = async(id) =>{
    try {
        const apiUrl = `https://ipetym69-api.vercel.app/api/recources/${id}`;
        const response = await fetch(apiUrl,{
            method:'DELETE',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if(response.ok){
            filter('Resources');
        }
    } catch (error) {
        console.log('hubo un error en la peticion del cliente');
    }
};
  
  
  // Función principal para borrar tarjetas
  export const deleteCard = (type, id) => {
    // Determina si la tarjeta es de tipo 'news' o 'resource' y llama a la función correspondiente
    if (type === 'news') {
      deleteNewsCard(id);
    } else if (type === 'resources') {
      deleteResourceCard(id);
    } else {
      console.error('Tipo de tarjeta no válido.');
    }
  };