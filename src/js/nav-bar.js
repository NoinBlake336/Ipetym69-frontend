const body = document.querySelector("body")
const nav = document.querySelector("#navbar");
const anchorsList = document.querySelector("#ham-menu-list");


export const Menu = ()=>{
    window.addEventListener("click", e=>{
        if(e.target.id === "ham-button"){
            
            if(nav.classList.contains("ampliar")){
    
                anchorsList.classList.add("hidden");
                nav.classList.remove("ampliar");
                setTimeout(()=>{
                    nav.style.gridTemplateRows="1fr";
                    body.style.gridTemplateRows="6% 85% 5%";
                },200)
            }
            else{
                nav.classList.add("ampliar");
                nav.style.gridTemplateRows="repeat(2,1fr)";
                anchorsList.classList.remove("hidden");
                body.style.gridTemplateRows="9% 85% 5%";
            }
        }else{
            return;
        }
    });
};
