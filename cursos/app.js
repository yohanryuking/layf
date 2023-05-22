window.onload = inicio;

let corrido = 36, cards;
presente = 1;

function inicio() {
    document.querySelector(".header__button").onclick = mostrar;
    document.querySelector(".alante").onclick = alante;
    document.querySelector(".atras").onclick = atras;
    cards = document.querySelectorAll(".card");
}


function mostrar() {
    document.querySelector(".header__nav").classList.toggle("mostrar");
    document.querySelector(".oculto").classList.toggle("subir");
}

function alante() {
    clases();
    movimientoD();

}

function atras() {
    clases();
    movimientoI();
}

function movimientoI() {
    switch (presente) {
        case 1:
            cards[0].style = `transform:translatex(${corrido * 2}vw)`;
            cards[1].style = `transform:translatex(-${corrido}vw)`;
            cards[2].style = `transform:translatex(-${corrido}vw)`;
            presente = 2;
            break;
        case 2:
            cards[1].style = `transform:translatex(0)`;
            cards[2].style = `transform:translatex(0)`;
            cards[0].style = `transform:translatex(0)`;
            presente = 0;
            break;
        case 0:
            cards[2].style = `transform:translatex(-${corrido * 2}vw)`;
            cards[0].style = `transform:translatex(${corrido}vw)`;
            cards[1].style = `transform:translatex(${corrido}vw)`;
            presente = 1;
            break;
        default:
            break;
    }
}

function movimientoD() {
    switch (presente) {
        case 1:
            cards[0].style = `transform:translatex(${corrido}vw)`;
            cards[1].style = `transform:translatex(${corrido}vw)`;
            cards[2].style = `transform:translatex(-${corrido*2}vw)`;
            // cards[0].style = "color:red";
            presente = 0;
            break;
        case 0:
            cards[2].style = `transform:translatex(-${corrido}vw)`;
            cards[0].style = `transform:translatex(${corrido *2}vw)`;
            cards[1].style = `transform:translatex(-${corrido}vw)`;
            // cards[0].style = "color:blue";
            presente = 2;
            break;
        case 2:
            cards[1].style = `transform:translatex(0)`;
            cards[2].style = `transform:translatex(0)`;
            cards[0].style = `transform:translatex(0)`;
            // cards[0].style = "color:green";
            presente = 1;
            break;
        default:
            break;
    }
}

function clases() {
    for (let index = 0; index < 3; index++) {
        cards[index].classList.toggle("mostrar1");
        cards[index].classList.toggle("mostrar2");
    }
}