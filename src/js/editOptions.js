export const editOptions = (idButton, typesContainer)=>{
    idButton === "edit-news" ? 
    (typesContainer.innerHTML = `<div class="uploaded-container">
    <h2>Editar Noticias</h2>
    <div id="container-news" class="container-information">
    <a class="card1" href="#">
    <h3>This is option 1</h3>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
  <a class="card3" href="#">
    <h3>This is option 3</h3>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
  <a class="card3" href="#">
    <h3>This is option 3</h3>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
  <a class="card3" href="#">
    <h3>This is option 3</h3>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="dimmer"></div>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
    </div>
</div>`) 
:
(typesContainer.innerHTML = `<div class="uploaded-container">
<h2>Editar Recursos</h2>
<div id="container-resources" class="container-information">

</div>
</div>`);
} 