// Botón "Saludar": el usuario ve el alert y el desarrollador ve el log
function saludar() {
  alert("Hola, soy Oliver");
  console.log("Botón Saludar pulsado");
}

// Botón "Simular un error": solo lo ve quien abre la consola
function simularError() {
  console.error("Error simulado: no se pudo completar la operación");
}

// Botón "¿Qué navegador soy?": muestra el userAgent en alert y en consola
function queNavegador() {
  alert(navigator.userAgent);
  console.log("userAgent:", navigator.userAgent);
}