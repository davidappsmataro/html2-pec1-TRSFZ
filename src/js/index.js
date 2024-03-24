/* console.log(`Hello ${name}`);
try {
    
  
      let {NODE_ENV, API_TOKEN} = process.env;
      console.log(NODE_ENV)
} catch (error) {
    console.log(error)
} */

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
