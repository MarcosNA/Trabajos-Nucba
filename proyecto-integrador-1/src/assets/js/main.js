addEventListener("DOMContentLoaded", () => {
    const iconMenu = document.querySelector(".btn-nav")
    const nav = document.querySelector(".navbar")
    const main = document.querySelector(".container")
    const a = document.querySelectorAll(".a-nav")
    
   
  
    if(iconMenu){
        iconMenu.addEventListener("click", () => {
            nav.classList.toggle("show")
            main.classList.toggle("container-fixed")  
        })

    }

    for (let i = 0 ; i < a.length; i++) {
        a[i].addEventListener('click',() => {
            nav.classList.toggle("show")
            main.classList.toggle("container-fixed") 
        } ) ; 
     }   
})
