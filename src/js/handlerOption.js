export const handlerOption = (option,typesContainer) => {
    option === "Noticia"
      ? (typesContainer.innerHTML = `<div class="uploaded-container">
      <h2>Cargar una noticia</h2>
      <form action="">
          <div class="info-container"  id="titulo-container">
              <label for="titulo-noticia">Ingrese el titulo de la noticia</label>
              <input type="text" name="titulo-noticia" id="titulo-noticia">
          </div>
          <div class="info-container"  id="descripcion-container">
              <label for="descripcion-noticia">Ingrese una breve descripcion de la noticia</label>
              <input type="text" name="descripcion-noticia" id="descripcion-noticia">
          </div>
          <div class="info-container"  id="imagen-container">
              <label for="imagen-noticia">Ingrese el enlace de la imagen</label>
              <input type="text" name="imagen-noticia" id="imagen-noticia">
          </div>
          <div class="info-container"  id="imagen-container">
            <label for="imagen-noticia">Ingrese el enlace de la noticia</label>
            <input type="text" name="link-noticia" id="enlace-noticia">
        </div>
          <button id="submit-news" class="upload-button">Cargar Noticia
          <i id="loader_adminPanel" class="fa-solid fa-rotate fa-spin hidden"></i>
          <div id="container-check">
            <i id="check" class="fa-solid fa-check hidden"></i>
          </div>
          </button>
          
      </form>
  </div>`)
      : (typesContainer.innerHTML = `<div class="uploaded-container">
   <h2>Cargar un recurso</h2>
   <form action="">
       <div class="info-container" id="titulo-container">
           <label for="titulo-recurso">Ingrese el titulo del recurso</label>
           <input type="text" name="titulo-recurso" id="titulo-recurso">
       </div>
       <div class="info-container"  id="descripcion-recurso">
           <label for="descripcion-noticia">Ingrese una breve descripcion del recurso</label>
           <input type="text" name="descripcion-recurso" id="descripcion-recurso_input">
       </div>
       <div class="info-container"  id="boton-recurso">
           <label for="enlace-recurso">Ingrese el enlace al recurso</label>
           <input type="text" name="enlace-recurso" id="enlace-recurso">
       </div>
  
       <button id="submit-recources" class="upload-button">Cargar recurso
        <i id="loader_adminPanel" class="fa-solid fa-rotate fa-spin hidden"></i>
        <div id="container-check">
            <i id="check" class="fa-solid fa-check hidden"></i>
        </div>
       </button>
   </form>
   
  </div>`);
  };