// getInformation.js

import { getUser } from './getUser.js';
import { editCard } from './editCard.js';
import { deleteCard } from './deleteCard.js';
// Función para renderizar la información de noticias
const renderNewsinformation = (element) => {
  return `
    <div class="card3" id="${element.id}">
      <h3>${element.title}</h3>
      <p class="small">${element.description}</p>
      <div class="dimmer"></div>
      <div class="go-corner" href="#" style="background-image:url(${element.image})">
        <div class="go-arrow">
          →
        </div>
      </div>
      <div class = "container-button-option">
      <button class="edit-button" data-type="news" data-id="${element.id}">Editar</button>
      <button class="delete-button" data-type="news" data-id="${element.id}">Borrar</button>
      </div>
    </div>`;
};

// Función para renderizar la información de recursos
const renderResourcesInformation = (element) => {
  return `
    <a class="card3" id="${element.id}" >
      <h3>${element.title}</h3>
      <p class="small">${element.description}</p>
      <div class="dimmer"></div>
      <div class="go-corner" href="#">
        <div class="go-arrow">
          →
        </div>
      </div>
      <div>
      <div class = "container-button-option">
      <button class="edit-button" data-type="resources" data-id="${element.id}">Editar</button>
      <button class="delete-button" data-type="resources" data-id="${element.id}">Borrar</button>
      </div>
      </div>
    </a>`;
};

// Función para manejar el evento click en las tarjetas
const handleClick = (card, cards) => {
  // Oculta todas las tarjetas excepto la clicada
  cards.forEach(otherCard => {
    if (otherCard !== card) {
      otherCard.style.display = 'none';
    }
  });

  // Ajusta el estilo de la tarjeta clicada para ocupar todo el contenedor
  card.style.width = '100%';
  card.style.height = '100%';
  card.style.top = '0';
  card.style.left = '0';
  card.style.zIndex = '999';

  // Muestra el botón de editar
  const editButton = card.querySelector('.edit-button');
  if (editButton) {
    editButton.style.display = 'block';
  };

  const deleteButton = card.querySelector('.delete-button');
  if(deleteButton){
    deleteButton.style.display = 'block';
  }
};

// Función para filtrar y mostrar noticias o recursos
export const filter = async (option) => {
  const information = await getUser();

  if (option === 'News') {
    const container = document.getElementById('container-news');
    const listNews = await information.find.news;

    container.innerHTML = listNews.map(element => renderNewsinformation(element)).join("");

    // Agrega un evento click a cada tarjeta de noticias
    const newsCards = document.querySelectorAll('.card3');
    newsCards.forEach(card => {
      card.addEventListener('click', () => {
        handleClick(card, newsCards);
      });

      // Agrega un evento click para editar la tarjeta
      const editButton = card.querySelector('.edit-button');
      editButton.addEventListener('click', () => {
        const cardType = editButton.getAttribute('data-type');
        const cardId = editButton.getAttribute('data-id');
        editCard(cardType, cardId);
      });

      // Agrega un evento click para borrar la tarjeta
      const deleteButton = card.querySelector('.delete-button');
      deleteButton.addEventListener('click',()=>{
        const cardId = deleteButton.getAttribute('data-id');
        const cardType = deleteButton.getAttribute('data-type');
        deleteCard(cardType,cardId);
      })
    });
  } else {
    const container = document.getElementById('container-resources');
    const listResources = await information.find.recources;

    container.innerHTML = listResources.map(element => renderResourcesInformation(element)).join("");

    // Agrega un evento click a cada tarjeta de recursos
    const resourceCards = document.querySelectorAll('.card3');
    resourceCards.forEach(card => {
      card.addEventListener('click', () => {
        handleClick(card, resourceCards);
      });

      // Agrega un evento click para editar la tarjeta
      const editButton = card.querySelector('.edit-button');
      editButton.addEventListener('click', () => {
        const cardType = editButton.getAttribute('data-type');
        const cardId = editButton.getAttribute('data-id');
        editCard(cardType, cardId);
      });

            // Agrega un evento click para borrar la tarjeta
      const deleteButton = card.querySelector('.delete-button');
      deleteButton.addEventListener('click',()=>{
        const cardId = deleteButton.getAttribute('data-id');
        const cardType = deleteButton.getAttribute('data-type');
        deleteCard(cardType,cardId);
      })
    });
  }
}

// ...
