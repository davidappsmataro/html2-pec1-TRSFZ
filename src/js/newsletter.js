import validator from "validator";

/****************************
  ANULAR ENVIO NEWSLETTER Y VALIDAR DATOS
*****************************/
/* compruebo si los valores son correctos. Sino muestro mensaje de error */
const suscribirse = document.querySelector("button[type=submit]");
const nombre = document.querySelector("input[name='name']");
const nombreError = document.querySelector("input[name='name'] + span.error");
const email = document.querySelector("input[name='email']");
const emailError = document.querySelector("input[name='email'] + span.error");
if (email) {
  email.addEventListener("input", () => {
    document.querySelector("input[name='email'] + span.error").innerHTML = "";
  });
}
if (nombre) {
  nombre.addEventListener("input", () => {
    document.querySelector("input[name='name'] + span.error").innerHTML = "";
  });
}
if (suscribirse) {
  suscribirse.addEventListener("click", (e) => {
    e.preventDefault();
    let correcto = true;
    if (!validator.isEmail(email.value)) {
      correcto = false;
      emailError.innerHTML =
        "Por favor introduce una dirección de correo correcta";
    }
    if (!validator.isLength(nombre.value, { min: 3 })) {
      correcto = false;
      nombreError.innerHTML =
        "El nombre debe contener un mínimo de 3 caracteres.";
    }

    correcto && alert("Envío no implementado");
  });
}