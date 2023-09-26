import { filter } from './getInformation.js';
import {showAllCards} from './showAllCards.js'
// Función para editar tarjetas de noticias
const editNewsCard = async (id) => {
    try {
      const apiUrl = `https://ipetym69-api.vercel.app/api/news/${id}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      const dataNews = await data.news;
      if (response.ok) {
        // Lógica para abrir el formulario de edición y actualizar la tarjeta aquí para noticias
        const editModal = document.getElementById(`${id}`);
        editModal.innerHTML = `
          <form id="edit-form">
            <label for="edit-title">Título:</label>
            <input type="text" id="edit-title" value="${dataNews.title}">
            <label for="edit-description">Descripción:</label>
            <input type="text" id="edit-description" value="${dataNews.description}">
            <label for="edit-image">Imagen:</label>
            <input type="text" id="edit-image" value="${dataNews.image}">
            <img src="${dataNews.image}">
            <label for="edit-enlace">Enlace:</label>
            <input type="text" id="edit-enlace" value="${dataNews.enlace}">
            <button id="save-edit">Guardar</button>
            <button class="cancel-edit" id="cancel-edit-news">Cancelar</button>
            <div id="container-check">
            <i id="check" class="fa-solid fa-check hidden"></i>
        </div>
          </form>
        `;
  
        // Manejar el evento de guardado para noticias
        const saveButton = document.getElementById('save-edit');
        const cancelButton = document.getElementById('cancel-edit');
        saveButton.addEventListener('click', async () => {
          const newTitle = document.getElementById('edit-title').value;
          const newDescription = document.getElementById('edit-description').value;
          const newImage = document.getElementById('edit-image').value;
          const newEnlace = document.getElementById('edit-enlace').value;
         
          // Realizar una solicitud PATCH para actualizar la noticia con los nuevos datos
          const updateUrl = apiUrl; // La URL de actualización de la noticia
          const updateResponse = await fetch(updateUrl, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: newTitle,
              description: newDescription,
              image: newImage,
              enlace: newEnlace,
            }),
          });
  
          if (updateResponse.ok) {
            // Actualización exitosa
            const check = document.getElementById('check');
            check.classList.remove('hidden');
            editModal.innerHTML = ''; // Cerrar el modal de edición
            // Volver a mostrar todas las tarjetas
            filter('News') // Debes implementar la función showAllCards
          } else {
            console.error('Error al actualizar la noticia.');
          }
        });
  
        // Manejar el evento de cancelar edición
        cancelButton.addEventListener('click', () => {
          editModal.innerHTML = ''; // Cerrar el modal de edición
          // Volver a mostrar todas las tarjetas
          showAllCards(); // Debes implementar la función showAllCards
        });
      } else {
        console.error('Error al obtener los datos de la noticia para editar.');
      }
    } catch (error) {
      console.error('Error en la solicitud de edición de noticias:', error);
    }
  };
  
  // Función para editar tarjetas de recursos
  const editResourceCard = async (id) => {
    try {
      const apiUrl = `https://ipetym69-api.vercel.app/api/recources/${id}`;
      const response = await fetch(apiUrl);
  
      const data = await response.json();
      const dataRecources = await data.Recources;
      if (response.ok) {
        // Lógica para abrir el formulario de edición y actualizar la tarjeta aquí para recursos
        const editModal = document.getElementById(`${id}`);
        editModal.innerHTML = `
          <form id="edit-form">
            <label for="edit-title">Título:</label>
            <input type="text" id="edit-title" value="${dataRecources.title}">
            <label for="edit-description">Descripción:</label>
            <input type="text" id="edit-description" value="${dataRecources.description}">
            <label for="edit-enlace">Enlace:</label>
            <input type="text" id="edit-enlace" value="${dataRecources.image}">
            <button id="save-edit">Guardar</button>
            <button class="cancel-edit" id="cancel-edit-resources">Cancelar</button>
            <div id="container-check">
            <i id="check" class="fa-solid fa-check hidden"></i>
        </div>
          </form>
        `;
  
        // Manejar el evento de guardado para recursos
        const saveButton = document.getElementById('save-edit');
        const cancelButton = document.getElementById('cancel-edit');
        saveButton.addEventListener('click', async () => {
          const newTitle = document.getElementById('edit-title').value;
          const newDescription = document.getElementById('edit-description').value;
          const newEnlace = document.getElementById('edit-enlace').value;
  
          // Realizar una solicitud PATCH para actualizar el recurso con los nuevos datos
          const updateUrl = apiUrl; // La URL de actualización del recurso
          const updateResponse = await fetch(updateUrl, {
            method: 'PATCH',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: newTitle,
              description: newDescription,
              image: newEnlace,
            }),
          });
  
          if (updateResponse.ok) {
            // Actualización exitosa
            const check = document.getElementById('check');
            check.classList.remove('hidden');
            // Volver a mostrar todas las tarjetas
            filter('Resources'); // Debes implementar la función showAllCards
          } else {
            console.error('Error al actualizar el recurso.');
          }
        });
  
        // Manejar el evento de cancelar edición
        cancelButton.addEventListener('click', () => {
          editModal.innerHTML = "" // Cerrar el modal de edición
          // Volver a mostrar todas las tarjetas
          showAllCards(); // Debes implementar la función showAllCards
        });
      } else {
        console.error('Error al obtener los datos del recurso para editar.');
      }
    } catch (error) {
      console.error('Error en la solicitud de edición de recursos:', error);
    }
  };
  
  // Función principal para editar tarjetas
  export const editCard = (type, id) => {
    // Determina si la tarjeta es de tipo 'news' o 'resource' y llama a la función correspondiente
    if (type === 'news') {
      editNewsCard(id);
    } else if (type === 'resources') {
      editResourceCard(id);
    } else {
      console.error('Tipo de tarjeta no válido.');
    }
  };
  