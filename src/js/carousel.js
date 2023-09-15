const carousel = document.getElementById("carousel");

const colors = {
    informatica: "var(--informatica)",
    automotores: "var(--automotores)",
    gestion: "var(--gestion)",
    electronica: "var(--electronica)",
    electromecanica: "var(--electromecanica)"
}

const specialitiyDescriptions = document.querySelectorAll(".speciality-description")
const specialities = {

    informaticaLi: document.getElementById("informatica-description"),
    automotoresLi: document.getElementById("automotores-description"),
    gestionLi: document.getElementById("gestion-description"),
    electromecanicaLi: document.getElementById("electromecanica-description"),
    electronicaLi: document.getElementById("electronica-description"),

}


export const clickCarousel = () => {
    carousel.addEventListener("click", e => {

        if (e.target.id === "informatica" || e.target.classList.value === "speciality" && e.target.children[1].id === "informatica") {

            ChangeBackground(e.target.id || "informatica")
            specialitiyDescriptions.forEach(element=> element.classList.add("hidden"))
            specialities.informaticaLi.classList.remove("hidden")

        } else if (e.target.id === "automotores" || e.target.classList.value === "speciality" &&  e.target.children[1].id === "automotores") {
            ChangeBackground(e.target.id || "automotores")
            specialitiyDescriptions.forEach(element=> element.classList.add("hidden"))
            specialities.automotoresLi.classList.remove("hidden")
        } else if (e.target.id === "gestion" || e.target.classList.value === "speciality" && e.target.children[1].id === "gestion") {
            ChangeBackground(e.target.id || "gestion")
            specialitiyDescriptions.forEach(element=> element.classList.add("hidden"))
            specialities.gestionLi.classList.remove("hidden")
        } else if (e.target.id === "electronica" || e.target.classList.value === "speciality" && e.target.children[1].id === "electronica") {
            ChangeBackground(e.target.id || "electronica")
            specialitiyDescriptions.forEach(element=> element.classList.add("hidden"))
            specialities.electronicaLi.classList.remove("hidden")
        } else if (e.target.id === "electromecanica" || e.target.classList.value === "speciality"&& e.target.children[1].id === "electromecanica") {
            ChangeBackground(e.target.id || "electromecanica")
            specialitiyDescriptions.forEach(element=> element.classList.add("hidden"))
            specialities.electromecanicaLi.classList.remove("hidden")
        } else {
            return;
        }
    });
}




const ChangeBackground = (element) => {
    const informatica = document.querySelector(`#informatica`);
    const automotores = document.querySelector("#automotores");
    const gestion = document.querySelector("#gestion");
    const electronica = document.querySelector("#electronica");
    const electromecanica = document.querySelector("#electromecanica");

    if (element === "informatica") {
        ChangeStyle(informatica, colors.informatica, "changeBackgroundAnimInforma");
        renderList([automotores,gestion,electromecanica,electronica])
    }else if(element === "automotores"){
        ChangeStyle(automotores, colors.automotores, "changeBackgroundAnimAuto");
        renderList([informatica,gestion,electromecanica,electronica])
    }else if(element === "gestion"){
        ChangeStyle(gestion, colors.gestion, "changeBackgroundAnimGestion");
        renderList([informatica,automotores,electromecanica,electronica])
    }else if(element === "electronica"){
        ChangeStyle(electronica, colors.electronica, "changeBackgroundAnimElectron");
        renderList([informatica,gestion,electromecanica,automotores])
    }else if(element === "electromecanica"){
        ChangeStyle(electromecanica, colors.electromecanica, "changeBackgroundAnimElectrome");
        renderList([informatica,gestion,automotores,electronica])
    }
        
}




const ChangeStyle = (items, color, nameAnim) => {
    items.parentElement.style.animation = `${nameAnim} 1s ease`;
    items.parentElement.style.paddingLeft = "2rem";
    items.parentElement.style.backgroundColor = color;
    items.parentElement.childNodes[1].lastChild.style.color = "white";
    items.parentElement.style.color = "white";

}

const renderList = (listElemnt)=>{
    listElemnt.map(items => removeStyle(items));
}


const removeStyle = (component)=>{
    if(component.parentElement.getAttribute("style")){
        component.removeAttribute("style")
        component.parentElement.style.animation = "removeBackground 1s ease";
        component.parentElement.style.paddingLeft = "";
        component.parentElement.childNodes[1].lastChild.style.color = "";
        component.parentElement.style.animation = "";
        component.parentElement.style.backgroundColor = "white";
        setTimeout(()=>{
            component.parentElement.style.color = "";
        },100)
    }
}

