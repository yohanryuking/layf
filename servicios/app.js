window.onload = inicio;

let corrido = 36, cards, cardConrainers;
presente = 2;

function inicio() {
    document.querySelector(".header__button").onclick = mostrar;
    document.querySelector(".alante").onclick = alante;
    document.querySelector(".atras").onclick = atras;
    cards = document.querySelectorAll(".card");
    cardConrainers = document.querySelectorAll(".card__container");
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
        case 2:
            cards[0].style = `visibility: hidden`;
            cards[1].style = `visibility:hidden`;
            cards[2].style = `transform:translatex(-${corrido}vw)`;
            cardConrainers[2].style = "opacity:.5";
            cards[3].style = `transform:translatex(-${corrido}vw)`;
            cardConrainers[3].style = "opacity:1";
            cards[4].style = `transform:translatex(-${corrido}vw)`;
            cardConrainers[4].style = "opacity:.5";
            presente = 3;
            break;
        case 3:
            cards[1].style = `visibility:hidden`;
            cards[2].style = `visibility:hidden`;
            cards[3].style = `transform:translatex(-${corrido * 2}vw)`;
            cardConrainers[3].style = "opacity:.5";
            cards[4].style = `transform:translatex(-${corrido * 2}vw)`;
            cardConrainers[4].style = "opacity:1";
            cards[0].style = `transform:translatex(${corrido * 3}vw)`;
            cardConrainers[0].style = "opacity:.5";
            presente = 4;
            break;
        case 4:
            cards[2].style = `visibility:hidden`;
            cardConrainers[2].style = "opacity:1";
            cards[3].style = `visibility:hidden`;
            cards[4].style = `transform: translatex(-${corrido * 3}vw)`;
            cardConrainers[4].style = "opacity:.5";
            cards[0].style = `transform:translatex(${corrido * 2}vw)`;
            cardConrainers[0].style = "opacity:1";
            cards[1].style = `transform:translatex(${corrido * 2}vw)`;
            cardConrainers[1].style = "opacity:.5";
            presente = 0;
            break;
        case 0:
            cards[3].style = `visibility:hidden`;
            cards[4].style = `visibility:hidden`;
            cards[0].style = `transform:translatex(${corrido}vw)`;
            cardConrainers[0].style = "opacity:.5";
            cards[1].style = `transform:translatex(${corrido}vw)`;
            cardConrainers[1].style = "opacity:1";
            cards[2].style = `transform:translatex(${corrido}vw)`;
            cardConrainers[2].style = "opacity:1";
            presente = 1;
            break;
        case 1:
            cards[4].style = `visibility:hidden`;
            cards[0].style = `visibility:hidden`;
            cards[1].style = `transform:translatex(0)`;
            cardConrainers[1].style = "opacity:.5";
            cards[2].style = `transform:translatex(0)`;
            cardConrainers[2].style = "opacity:1";
            cards[3].style = `transform:translatex(0)`;
            cardConrainers[3].style = "opacity:.5";
            presente = 2;
            break;
        default:
            break;
    }
}


function movimientoD() {
    switch (presente) {
        case 2:
            cards[0].style = `transform:translatex(${corrido}vw)`;
            cardConrainers[0].style = "opacity:.5";
            cards[1].style = `transform:translatex(${corrido}vw)`;
            cardConrainers[1].style = "opacity:1";
            cards[2].style = `transform:translatex(${corrido}vw)`;
            cardConrainers[2].style = "opacity:1";
            cards[3].style = `visibility:hidden`;
            cards[4].style = `visibility:hidden`;
            presente = 1;
            break;
        case 1:
            cards[4].style = `transform:translatex(-${corrido * 3}vw)`;
            cardConrainers[4].style = "opacity:.5";
            cards[0].style = `transform:translatex(${corrido * 2}vw)`;
            cardConrainers[0].style = "opacity:1";
            cards[1].style = `transform:translatex(${corrido * 2}vw)`;
            cardConrainers[1].style = "opacity:.5";
            cards[2].style = `visibility:hidden`;
            cards[3].style = `visibility:hidden`;
            presente = 0;
            break;
        case 0:
            cards[3].style = `transform:translatex(-${corrido * 2}vw)`;
            cardConrainers[3].style = "opacity:.5";
            cards[4].style = `transform:translatex(-${corrido * 2}vw)`;
            cardConrainers[4].style = "opacity:1";
            cards[0].style = `transform:translatex(${corrido * 3}vw)`;
            cardConrainers[0].style = "opacity:.5";
            cards[1].style = `visibility:hidden`;
            cards[2].style = `visibility:hidden`;
            presente = 4;
            break;
        case 4:
            cards[2].style = `transform:translatex(-${corrido}vw)`;
            cardConrainers[2].style = "opacity:.5";
            cards[3].style = `transform:translatex(-${corrido}vw)`;
            cardConrainers[3].style = "opacity:1";
            cards[4].style = `transform:translatex(-${corrido}vw)`;
            cardConrainers[4].style = "opacity:.5";
            cards[0].style = `visibility:hidden`;
            cards[1].style = `visibility:hidden`;
            presente = 3;
            break;
        case 3:
            cards[1].style = `transform:translatex(0)`;
            cardConrainers[1].style = "opacity:.5";
            cards[2].style = `transform:translatex(0)`;
            cardConrainers[2].style = "opacity:1";
            cards[3].style = `transform:translatex(0)`;
            cardConrainers[3].style = "opacity:.5";
            cards[4].style = `visibility:hidden`;
            cards[0].style = `visibility:hidden`;
            presente = 2;
            break;
        default:
            break;
    }
}



function clases() {
    for (let index = 0; index < 5; index++) {
        cards[index].classList.toggle("mostrar1");
        cards[index].classList.toggle("mostrar2");
    }
}