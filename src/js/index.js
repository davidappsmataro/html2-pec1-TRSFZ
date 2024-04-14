
/****************************
     MENÚ BURGUER
*****************************/

const opcionesMenu = document.querySelector(".opciones_menu");
const opcion = document.querySelectorAll("ul.opciones_menu > li > a");
const bBurguer = document.querySelector("button.bburguer");

const toggleMenuBurguer = () => {
  opcionesMenu.classList.toggle("on");
  if (opcionesMenu.classList.contains("on")) {
    opcionesMenu.style.display = "block";
  } else {
    opcionesMenu.style.display = "none";
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
  ) { //si pulsamos fuera del menu lo cerranis
    opcionesMenu.classList.remove("on");
    opcionesMenu.style.display = "none";
  }
};


