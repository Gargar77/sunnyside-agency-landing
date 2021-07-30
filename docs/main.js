const burgerIcon = document.querySelector('#burger-icon');
const menu = document.querySelector("#main-menu");
burgerIcon.addEventListener("click",(event)=> {
    if (menu.style.display !== 'flex') {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
})