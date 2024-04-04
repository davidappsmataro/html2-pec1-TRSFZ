/* console.log(`Hello ${name}`);
try {
    
  
      let {NODE_ENV, API_TOKEN} = process.env;
      console.log(NODE_ENV)
} catch (error) {
    console.log(error)
} */
import Splide from "@splidejs/splide";

/* new Splide( '.splide', {
  type    : 'loop',
  autoplay: 'play',
  perPage : 1,
  arrows: true,
  pagination: true
} ).mount(); */

//Generaba un error cuando cargaba cualquier página que no
//tuviera el slider.
//Sol: https://github.com/Splidejs/splide/discussions/1032

document.addEventListener("DOMContentLoaded", function () {
  const splideCheck = document.getElementsByClassName("splide").length;
  console.log(splideCheck);
  if (splideCheck) {
    new Splide("#fullscreen-carousel", {
      width: "100vw",
      height: "100vh",

       type: "loop",
      autoplay: "play",
    }).mount();
  }
});
/* document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.splide', {
		width : '100vw',
		height: '100vh',
  } ).mount();
} ); */

const opcionesMenu = document.querySelector(".opciones_menu");
const opcion = document.querySelectorAll("ul.opciones_menu > li > a");
const bBurguer = document.querySelector("button.bburguer");
/* const iBurguer = document.querySelector(".fa-bars"); */
/* const iCloseBurguer = document.querySelector(".fa-circle-xmark"); */

const toggleMenuBurguer = () => {
  /*  iBurguer.classList.toggle("on"); */
  /* iCloseBurguer.classList.toggle("on"); */
  opcionesMenu.classList.toggle("on");

  /*  if (iBurguer.classList.contains("on")) {
    iCloseBurguer.style.display = "none";
    iBurguer.style.display = "block";
    opcionesMenu.style.display = "none";
  } else {
    iCloseBurguer.style.display = "block";
    opcionesMenu.style.display = "block";
    iBurguer.style.display = "none";
  } */
  if (opcionesMenu.classList.contains("on")) {
    /*  iCloseBurguer.style.display = "none";
    iBurguer.style.display = "block"; */
    opcionesMenu.style.display = "block";
  } else {
    opcionesMenu.style.display = "none";
    /*  iCloseBurguer.style.display = "block"; */
    /*  iBurguer.style.display = "none"; */
  }
};

const opcionSeleccionada = (e) => {
  //Si hemos pulsado una de las opciones devolvemos
  //true para cerrar el menu burguer
  let pulsadaOpcion = false;
  opcion.forEach((opc) => {
    if (opc.contains(e.target)) {
      pulsadaOpcion = true;
    }
  });
  return pulsadaOpcion;
};

bBurguer.addEventListener("click", toggleMenuBurguer);

document.onclick = (e) => {
  if (
    (!opcionesMenu.contains(e.target) && !bBurguer.contains(e.target)) ||
    opcionSeleccionada(e)
  ) {
    /*  iBurguer.classList.add("on");
    iCloseBurguer.classList.remove("on"); */
    opcionesMenu.classList.remove("on");
    /*  iCloseBurguer.style.display = "none";
    iBurguer.style.display = "block"; */
    opcionesMenu.style.display = "none";
  }
};
