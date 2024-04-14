import Splide from "@splidejs/splide";
import validator from 'validator';


/****************************
     SPLIDE - IMDEX.HTML
*****************************/
//Generaba un error cuando cargaba cualquier página que no
//tuviera el slider.
//Sol: https://github.com/Splidejs/splide/discussions/1032

document.addEventListener("DOMContentLoaded", function () {
  const splideCheck = document.getElementsByClassName("splide").length;
  if (splideCheck) {
    new Splide("#fullscreen-carousel", {
      width: "100vw",
      height: "100vh",
      type: "loop",
      autoplay: "play",
    }).mount();
  }
});

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
  ) {
    opcionesMenu.classList.remove("on");
    opcionesMenu.style.display = "none";
  }
};

/****************************
  ANULAR ENVIO NEWSLETTER Y VALIDAR DATOS
*****************************/
/* compruebo si los valores son correctos. Sino muestro mensaje de error */
const suscribirse = document.querySelector("button[type=submit]");
const nombre = document.querySelector("input[name='name']");
const nombreError=document.querySelector("input[name='name'] + span.error");
const email = document.querySelector("input[name='email']");
const emailError=document.querySelector("input[name='email'] + span.error");

email.addEventListener('input', ()=>{
  document.querySelector("input[name='email'] + span.error").innerHTML='';
})
nombre.addEventListener('input', ()=>{
  document.querySelector("input[name='name'] + span.error").innerHTML='';
})

suscribirse.addEventListener("click", (e) => {
  e.preventDefault();
  let correcto=true;
  if(!validator.isEmail(email.value)) {
    correcto=false;
    emailError.innerHTML='Por favor introduce una dirección de correo correcta';
  } 
  if (!validator.isLength(nombre.value, {min:3})){
    correcto=false;
    nombreError.innerHTML="El nombre debe contener un mínimo de 3 caracteres."
  } 
  
  correcto && alert("Envío no implementado");
  

  /* if (nombre.value.length > 0 && email.value.length > 0) {
    e.preventDefault();
    alert("Envío no implementado");
    
  }  */
});

/****************************
  PAGINACION SIN IMPLEMENTAR
*****************************/

const paginacion = document.querySelector("ul.paginacion");
paginacion.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Paginación no implementada");
});
