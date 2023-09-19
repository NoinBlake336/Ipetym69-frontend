import {VerifyToken} from "./authenticateAdminPanel.js";
import {handlerOption} from "./handlerOption.js";
const token = localStorage.getItem('token');
const ObjToken = JSON.parse(token);



const container = document.getElementById("bodyAdminPanel");
const API_URL = 'https://ipetym69-api.vercel.app/';



const recources = async(inputs)=>{
  const loaderPanel = document.getElementById('loader_adminPanel');
  const checkPanel = document.getElementById('check');
  if(loaderPanel.classList.contains('hidden')){
    loaderPanel.classList.remove('hidden');
  }
  const response = await fetch(`${API_URL}api/recources`,{
    method:'POST',
    mode:'cors',
    headers:{
      'Content-Type':'Application/json',
    },
    body:JSON.stringify({
      user:ObjToken.user,
      title:inputs.title,
      description:inputs.description,
      image:inputs.image,
    })
  });

  const data = await response.json();
  loaderPanel.classList.add('hidden');
  if(checkPanel.classList.contains('hidden')){
    checkPanel.classList.remove('hidden');
    setTimeout(() => {
      checkPanel.classList.add('hidden')
    }, 1000);
  }

  
  return data;

}

const news = async(inputs)=>{
  const loaderPanel = document.getElementById('loader_adminPanel');
  const checkPanel = document.getElementById('check');
  if(loaderPanel.classList.contains('hidden')){
    loaderPanel.classList.remove('hidden');
  }
  const response = await fetch(`${API_URL}api/news`,{
    method:'POST',
    mode:'cors',
    headers:{
      'Content-Type':'Application/json',
    },
    body:JSON.stringify({
      user:ObjToken.user,
      title:inputs.title,
      description:inputs.description,
      image:inputs.image,
      enlace:inputs.enlace,
    })
  });

  const data = await response.json();
  loaderPanel.classList.add('hidden');
  if(checkPanel.classList.contains('hidden')){
    checkPanel.classList.remove('hidden');
    setTimeout(() => {
      checkPanel.classList.add('hidden');
    }, 1000);
  }
  return data;
}

const ValueInput = ({t,d,i,e})=>{
    const title = document.getElementById(t).value;
    const description = document.getElementById(d).value;
    const image = document.getElementById(i).value;
    
    if(title === "" || description === "" || image===""){
      throw new Error('Complete los campos'); 
    };
    if(e){
      const enlace = e.value;
      return {title,description,image, enlace};
    }
    return {title,description,image};
}

const Dashboard = (ObjToken)=>{
    VerifyToken(ObjToken,container);
};

Dashboard(ObjToken);


const uploadOptions = document.querySelectorAll(".upload-option");
const typesContainer = document.getElementById("types-container");


const Fecths = (e)=>{
    e.preventDefault();
    const id = e.submitter.id;
    if(id === "submit-news"){
      const enlace = document.getElementById('enlace-noticia');
      const inputs = ValueInput({t:'titulo-noticia',d:'descripcion-noticia',i:'imagen-noticia',e:enlace});
      return news(inputs)
    };

    if(id === "submit-recources"){
      const inputs = ValueInput({t:'titulo-recurso',d:'descripcion-recurso_input',i:'enlace-recurso'});
      console.log(id);
      recources(inputs);
      
    };

    const inputs = document.querySelectorAll("input");
    inputs.forEach((i)=>{
      i.value= "";
    });
} 

window.addEventListener('submit',Fecths);

uploadOptions.forEach((option) => {
  option.addEventListener(
    "click",
    (e) => {
      handlerOption(e.target.innerText,typesContainer);

    },
    false
  );
});



