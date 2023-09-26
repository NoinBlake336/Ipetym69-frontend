// En el archivo editCard.js, agrega una función para mostrar todas las tarjetas nuevamente.
export const showAllCards = () => {
    // Puedes recuperar todos los elementos con clase "card3" y mostrarlos.
    const cards = document.querySelectorAll('.card3');
    cards.forEach(card => {
      const cardList = {card};
      if( cardList.card.attributes[2].nodeValue=== "display: none;"){
        cardList.card.style.display = "block !important";
        return
      }else{
        cardList.card.style.display = "none";
        return
      }

    });
  };