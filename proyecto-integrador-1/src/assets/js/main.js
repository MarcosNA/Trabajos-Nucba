addEventListener("DOMContentLoaded", () => {
    const iconMenu = document.querySelector(".icon-menu")
    if(iconMenu){
        iconMenu.addEventListener("click", () => {
            const nav = document.querySelector("navbar")
            nav.classList.toggle("show")
            const login = document.querySelector("login")
            login.classList.toggle("show")

        })
    }
})