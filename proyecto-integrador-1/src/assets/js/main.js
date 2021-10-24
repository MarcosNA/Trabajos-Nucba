addEventListener("DOMContentLoaded", () => {
    const iconMenu = document.querySelector(".btn-nav")
    if(iconMenu){
        iconMenu.addEventListener("click", () => {
            const nav = document.querySelector(".navbar")
            nav.classList.toggle("show")
           
        })
    }

    const a = document.querySelectorAll(".a-nav")
    console.log(a)
    for (let i = 0 ; i < a.length; i++) {
        a[i].addEventListener('click',() => {
            const nav = document.querySelector(".navbar")
            nav.classList.toggle("show")
        } ) ; 
     }   
})