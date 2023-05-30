window.onload = inicio;

function tamano() {
  if (window.innerWidth <= 960 && window.innerWidth > 480) {
    return 40;
  }

  if (window.innerWidth <= 480) {
    return 50;
  }

  if (window.innerWidth > 960) {
    return 36;
  }
}

let corrido = tamano(),
  cards,
  cardConrainers,
  cardButtons,
  modalTitle,
  modalContent;
presente = 2;

const contenidoModal = [
  {
    title: "Mentorías Privadas",
    content:
      "Te ofrecemos asesoramiento personalizado y capacitación en diferentes áreas, como la gestión de proyectos, liderazgo o emprendimiento, idiomas, desarrollo y más.",
  },
  {
    title: "Creación de sitios web",
    content:
      "Desarrollamos aplicaciones web y móviles a medida, con un diseño único y personalizado, utilizando las últimas tecnologías y siguiendo las mejores prácticas de seguridad y usabilidad.",
  },
  {
    title: "Traducciones orales y de documentos",
    content:
      "Contamos con un equipo de traductóres profesionales que pueden adaptar tus textos, con precisión y rapidez. Tambien ofrecemos servicios de interpretación simultánea o consecutiva para eventos, reuniones o conferencias.",
  },
  {
    title: "Diseños de logotipos",
    content:
      "Creamos logotipos personalizados y atractivos que reflejen la identidad y los valores de tu marca, siguiendo tus indicadores y preferencias.",
  },
  {
    title: "Preparación para pruebas de ingreso",
    content:
      "Te ayudamos a prepararte para el exámen de admisión a la universidad, con material didáctico, simulacros y retroalimentación.",
  },
];

function inicio() {
  document.querySelector(".header__button").onclick = mostrar;
  document.querySelector(".alante").onclick = alante;
  document.querySelector(".atras").onclick = atras;
  cards = document.querySelectorAll(".card");
  cardConrainers = document.querySelectorAll(".card__container");
  cardButtons = document.querySelectorAll(".card__button");
  eventos();

  document.querySelector(".cerrarModal").onclick = () => {
    document.querySelector(".modalContainer").classList.remove("mostrar");
  };

  modalTitle = document.querySelector(".modalTitle");
  modalContent = document.querySelector(".modalContent");
}

function eventos() {
  document.querySelector(".cerrarModal").onclick = () => {
    document.querySelector(".modalContainer").classList.remove("mostrar");
  };

  for (let index = 2; index < 7; index++) {
    cardButtons[index].onclick = () => {
      document.querySelector(".modalContainer").classList.add("mostrar");
    };
  }
}

function contenido() {
  modalTitle.innerHTML = contenidoModal[presente].title;
  modalContent.innerHTML = contenidoModal[presente].content;
}

function mostrar() {
  document.querySelector(".header__nav").classList.toggle("mostrar");
  document.querySelector(".oculto").classList.toggle("subir");
  document.querySelectorAll(".correr")[0].classList.toggle("noCorrer");
  document.querySelectorAll(".correr")[1].classList.toggle("noCorrer");
}

function alante() {
  clases();
  movimientoD();
  contenido();
}

function atras() {
  clases();
  movimientoI();
  contenido();
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
