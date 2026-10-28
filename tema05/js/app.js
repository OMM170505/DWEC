/*
  Tarea 5 · DWEC · Oliver Montes Marcos
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  const tercero = document.querySelectorAll("#contenido p")[2];
  tercero.classList.add("text-danger");

  console.log("Cambios aplicados a los tres parrafos");
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const contenido = document.querySelector("#contenido");
  const nuevo = document.createElement("p");
  contenido.append(nuevo);
  nuevo.textContent = "Parrafo nuevo " + contenido.children.length;
  console.log("Parrafo añadido: " + nuevo.textContent);
}

function eliminarUltimo() {
  const ultimo = document.querySelector("#contenido").lastElementChild;
  if (ultimo === null) {
    document.querySelector("#aviso2").classList.remove("d-none");
    console.log("No quedan parrafos");
  } else {
    ultimo.remove();
    console.log("Ultimo parrafo eliminado");
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // addEventListener("mouseenter", ...) ejecuta la función cuando el ratón entra en el párrafo.
    // Los eventos los veremos a fondo en el tema 9: de momento, copia este modelo.
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  console.log("Resaltado activado en " + parrafos.length + " párrafos");
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
 const texto = document.querySelector("#nuevoTexto").ariaValueMax.trim();
 const error = document.querySelector("#error4");

 if (texto === "") {
  error.classList.remove("d-none");
  console.log("Campo vacio: no se cambia nada");
  return;
 }
 error.classList.add("d-none");
 document.querySelector("#contenido p").textContent = texto;
 console.log("Cambiado con textContent: " + texto);
}

function cambiarConHtml() {
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");
  
    if (texto === "") {
    error.classList.remove("d-none");
    console.log("Campo vacío: no se cambia nada");
    return;
  }

  error.classList.add("d-none");
  document.querySelector("#contenido p").innerHTML = texto;
  console.log("Cambiado con innerHTML: " + texto);
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {

  const entrada = document.querySelector("#tareaInput");
  const error = document.querySelector("#error5");
  const texto = entrada.value.trim();

  if (texto === ""){
    error.textContent = "Escribe una tarea antes de añadirla";
    error.classList.remove("d-none");
    console.log("Tarea vacia");
    return;
  }

  error.classList.add("d-none");

  const li = document.createElement("li");
  li.classList.add("list-group-item");

  const casilla = document.createElement("input");
  casilla.type = "checkbox";
  casilla.classList.add("form-check-input", "me-2");

  const span = document.createElement("span");
  span.textContent = texto;

  entrada.value = "";
  document.querySelector("#totalTareas").textContent = 
    document.querySelector("#listaTareas").children.length;
  console.log("Tarea añadida: " + texto);
}

function borrarCompletadas() {
  const marcadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.querySelector("#error5");

  if (marcadas.length === 0){
    error.textContent = "No hay tareas completadas que borrar";
    error.classList.remove("d-none");
    console.log("Ninguna tarea marcada");
    return;
  }

  error.classList.add("d-none");

  for (const casilla of marcadas){
    casilla.parentElement.remove();
  }

  document.querySelector("#totalTareas").textContent =
    document.querySelector("#listaTareas").children.length;
  console.log("Tareas borradas: " + marcadas.length);
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // TODO: con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768),
  //       lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  // TODO: el tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  // TODO: la URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
}
