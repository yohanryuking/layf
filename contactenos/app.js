window.onload = inicio;


function inicio() {
    document.querySelector(".header__button").onclick = mostrar;
}


function mostrar() {
    document.querySelector(".header__nav").classList.toggle("mostrar");
    document.querySelector(".oculto").classList.toggle("subir");
}