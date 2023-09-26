export const editOptions = async(idButton, typesContainer)=>{
    idButton === "edit-news" ?
    (typesContainer.innerHTML = `<div class="uploaded-container">
      <h2>Editar Noticias</h2>
      <div id="container-news" class="container-information">
      <i id="loader-information" class="fa-solid fa-rotate fa-spin "></i>
      </div>
    </div>`)
  :
  (typesContainer.innerHTML = `<div class="uploaded-container">
  <h2>Editar Recurso</h2>
  <div id="container-resources" class="container-information">
  <i id="loader-information" class="fa-solid fa-rotate fa-spin "></i>
  </div>
  </div>`);
} 
