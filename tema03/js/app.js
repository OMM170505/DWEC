/*
  Tarea 3 · DWEC · Oliver Montes Marcos
  Variables, tipos y conversiones.

  Cómo usar esta plantilla:
  · Hay una función por ejercicio. Cada una se ejecuta al pulsar su botón «Ejecutar» de index.html.
  · Solo console.log() y alert(): el JavaScript no escribe nada dentro de la página.
  · let y const, nunca var. Comillas rectas (" o ').
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");


// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  // Valores que no cambian: const
  const edad = 20;               // number
  console.log("edad =", edad, "→", typeof edad);

  const modulo = "DWEC";         // string
  console.log("modulo =", modulo, "→", typeof modulo);

  const esAlumno = true;         // boolean
  console.log("esAlumno =", esAlumno, "→", typeof esAlumno);

  const sinDato = null;          // null: ausencia de valor puesta a propósito
  console.log("sinDato =", sinDato, "→", typeof sinDato);

  const identificador = 10n;     // bigint: entero terminado en n
  console.log("identificador =", identificador, "→", typeof identificador);

  // Valor que se da más tarde: let
  let notaFinal;                 // undefined: declarada, pero sin valor todavía
  console.log("notaFinal =", notaFinal, "→", typeof notaFinal);

  notaFinal = 8;                 // ahora ya tiene valor
  console.log("notaFinal =", notaFinal, "→", typeof notaFinal);
}


// Ejercicio 2 · Conversiones explícitas
// Escribe el comentario «espero …» ANTES de ejecutar. Si fallas, no lo cambies: márcalo en la tabla de la página.
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  const textoDe123 = String(123);            // espero: ?
  console.log("String(123) →", textoDe123, typeof textoDe123);

  const numeroDe123 = Number("123");         // espero: ?
  console.log('Number("123") →', numeroDe123, typeof numeroDe123);

  const numeroDe12abc = Number("12abc");     // espero: ?
  console.log('Number("12abc") →', numeroDe12abc, typeof numeroDe12abc);

  const numeroDeVacio = Number("");          // espero: ?
  console.log('Number("") →', numeroDeVacio, typeof numeroDeVacio);

  const numeroDeTrue = Number(true);         // espero: ?
  console.log("Number(true) →", numeroDeTrue, typeof numeroDeTrue);

  const booleanoDeCero = Boolean(0);         // espero: ?
  console.log("Boolean(0) →", booleanoDeCero, typeof booleanoDeCero);

  const booleanoDeTexto = Boolean("texto");  // espero: ?
  console.log('Boolean("texto") →', booleanoDeTexto, typeof booleanoDeTexto);

  const booleanoDeVacio = Boolean("");       // espero: ?
  console.log('Boolean("") →', booleanoDeVacio, typeof booleanoDeVacio);

  // Tres conversiones más, elegidas por mí
  const numeroDeUndefined = Number(undefined);  // espero: ?
  console.log("Number(undefined) →", numeroDeUndefined, typeof numeroDeUndefined);

  const booleanoDeCeroTexto = Boolean("0");     // espero: ?
  console.log('Boolean("0") →', booleanoDeCeroTexto, typeof booleanoDeCeroTexto);

  const textoDeFalse = String(false);           // espero: ?
  console.log("String(false) →", textoDeFalse, typeof textoDeFalse);
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // Expresiones que mezclan tipos
  console.log('"5" - 2 →', "5" - 2);               // espero: ?
  console.log('"5" + 2 →', "5" + 2);               // espero: ?
  console.log('"5" * "2" →', "5" * "2");           // espero: ?
  console.log("true + 1 →", true + 1);             // espero: ?

  // Dos expresiones inventadas por mí
  console.log('"hola" - 1 →', "hola" - 1);         // espero: ?
  console.log('"3" + 4 + 5 →', "3" + 4 + 5);       // espero: ?

  // Comparaciones con == (compara convirtiendo tipos) y con === (compara valor y tipo)
  console.log('5 == "5" →', 5 == "5");                       // espero: ?
  console.log('5 === "5" →', 5 === "5");                     // espero: ?

  console.log("0 == false →", 0 == false);                   // espero: ?
  console.log("0 === false →", 0 === false);                 // espero: ?

  console.log("null == undefined →", null == undefined);     // espero: ?
  console.log("null === undefined →", null === undefined);   // espero: ?
}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Mis datos, con const
  const nombre = "Oliver Montes Marcos";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "2.º";
  const aficion = "Futbol";

  // Un dato que cambia, con let
  let horasEstudio = 6;
  horasEstudio += 3;   // ahora vale 9

  // La ficha con plantilla de cadena: backticks (`) y ${ }
  const ficha = `Soy ${nombre}, estudio ${ciclo} (${curso} curso) y mi afición es ${aficion}. Esta semana he estudiado ${horasEstudio} horas.`;
  alert(ficha);
  console.log(ficha);

  // La misma ficha concatenando con +
  const fichaConMas = "Soy " + nombre + ", estudio " + ciclo + " (" + curso + " curso) y mi afición es " + aficion + ". Esta semana he estudiado " + horasEstudio + " horas.";
  console.log(fichaConMas);

  // Comparación de las dos: tiene que salir true
  console.log("¿Son iguales? →", ficha === fichaConMas);
}