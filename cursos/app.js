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
    title: "Curso de Alemán",
    content:
      "¿Quieres sumergirte en la cultura Alemana y aprender su idioma?¡Nuestro curso es la opción perfecta para ti! Aprenderás los fundamentos del idioma y mejorarás tus habilidades comunicativas. ¡No esperes más y comienza tu aventura con el Alemán hoy mismo!.",
  },
  {
    title: "Curso de Francés",
    content:
      "¿Quieres aprender Francés? ¡Únete a nuestro curso! Aprenderás los elementos lingüisticos y gramaticales del idioma y mejorarás tus habilidades comunicativas. ¡No esperes más y comienza tu aventura con el Francés hoy mismo!.",
  },
  {
    title: "Curso de Inglés",
    content:
      "El curso de ingles de LAYF te ofrece clases en vivo con profesores expertos en la materia, ejercicios interactivos y material didáctico actualizado. El curso se adapta a tu nivel y a tus objetivos, y te da flexibilidad de horario y certificado oficial.",
  },
  {
    title: "Curso de Administración",
    content:
      "Este curso te enseñará  a gestinar una empresa en el ambito empresarial. Aprenderás sebre administración, negocios, ánalisis, planificacíon, liderazgo y ñetica. Al finalizar el curso, podrás resolver problemas reales en el mundo de los negocios y obtener un certificado que acredite tus competencias.",
  },
  {
    title: "Traducciones orales y de documentos",
    content:
      "Este curso te introduce al desarrollo de sitios web dinámicos y responsivos. Aprenderás sebre los lenguajes y frameworks más utilizados en la web, como HTML, CSS, JavaScript, Bootstrap, jQuery y React. El curso es interactivo y práctico. con casos reales actividades y proyectos que te ayudarán a consolidar lo aprendido. El curso está dirigido a personas que quieran iniciarse o perfeccionarse en el mundo de la programacíon web, sin importar su nivel previo.",
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
