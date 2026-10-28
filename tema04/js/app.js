/*
  Tarea 4 · DWEC · [Tu nombre y apellidos]
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} × ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta algún número");
  } else if (n2 === 0) {
    // Ojo: en JavaScript, 5 / 0 no da error, da Infinity.
    mostrar("No se puede dividir entre 0.", "danger");
    console.error(`Dividir: intento de dividir ${n1} entre 0`);
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ^ ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  } else if (n2 === 0) {
    // 5 % 0 da NaN: si el número 2 es 0, error en rojo
    mostrar("No se puede calcular el módulo con 0.", "danger");
    console.error(`Módulo: intento de calcular ${n1} % 0`);
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}

// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  // TODO: con if, else if y else, di cuál de los dos números es mayor o si son iguales.
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if(Number.isNaN(n1) || Number.isNaN(n2)){
    mostrar("Escriba los dos numeros antes de comparar", "danger");
    console.warn("¿Cual es mayor?: falta algun numero");
  } else if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2}.`, "info");
    console.log(`¿Cuál es mayor?: ${n1} > ${n2}`);
  } else if (n1 < n2) {
    mostrar(`${n2} es mayor que ${n1}.`, "info");
    console.log(`¿Cuál es mayor?: ${n1} < ${n2}`);
  } else {
    mostrar(`${n1} y ${n2} son iguales.`, "info");
    console.log(`¿Cuál es mayor?: ${n1} === ${n2}`);
  }
}

function parOImpar() {
  // TODO: solo con el número 1. Usa el operador % y el ternario ( condición ? "par" : "impar" ).
  // TODO: si el número tiene decimales, avisa de que no es ni par ni impar.
  const n1 = leerNumero("numero1");

  if(Number.isNaN(n1)) {
    mostrar("Escribe el numero 1 antes de comprobar", "danger");
    console.warn("¿Par o impar?: falta el numero 1");
  } else if(!Number.isInteger(n1)) {
    mostrar(`${n1} tiene decimales: no es ni par ni impar.`, "warning");
    console.warn(`¿Par o impar?: ${n1} tiene decimales`);
  } else {
    const palabra = n1 % 2 === 0 ? "par" : "impar";
    mostrar(`${n1} es ${palabra}.`, "info");
    console.log(`¿Par o impar?: ${n1} es ${palabra}`);
  }
}
//funciones auxiliares para los bucles

// true si el número no sirve para repetir: falta, tiene decimales o pasa de MAXIMO_REPETICIONES
function repeticionesNoValidas(veces) {
  return Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES;
}
function errorDeRepeticiones(veces, nombreBucle) {
  mostrar(`El número 1 tiene que ser un entero que no pase de ${MAXIMO_REPETICIONES}.`, "danger");
  console.error(`${nombreBucle}: número no válido (${veces})`);
}
function textoTotal(contador) {
  return `Total: ${contador} ${contador === 1 ? "repetición" : "repeticiones"}`;
}

// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  // Si el número falta, tiene decimales o pasa de MAXIMO_REPETICIONES, error en rojo.
  if (repeticionesNoValidas(veces)) {
    errorDeRepeticiones(veces, "for");
    return;
  }

  // Repite con un for tantas veces como diga «veces» y cuenta las vueltas en contador.
  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    anadirLinea(`for · repetición ${i} de ${veces}`);
    contador++;
  }

  // Al terminar, una línea con el total: «Total: 5 repeticiones» o «Total: 1 repetición».
  anadirLinea(textoTotal(contador));
  console.log(`for: ${contador} vueltas con el número ${veces}`);
}

function bucleWhile() {
  // Lo mismo que bucleFor(), con un while.
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (repeticionesNoValidas(veces)) {
    errorDeRepeticiones(veces, "while");
    return;
  }

  let contador = 0;
  let i = 1;
  // while comprueba la condición ANTES de cada vuelta: con 0 no entra ni una vez
  while (i <= veces) {
    anadirLinea(`while · repetición ${i} de ${veces}`);
    contador++;
    i++;
  }

  anadirLinea(textoTotal(contador));
  console.log(`while: ${contador} vueltas con el número ${veces}`);
}

function bucleDoWhile() {
  // Lo mismo que bucleFor(), con un do…while. Pruébalo con 0 y con un negativo: ¿qué pasa?
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (repeticionesNoValidas(veces)) {
    errorDeRepeticiones(veces, "do…while");
    return;
  }

  let contador = 0;
  let i = 1;
  // do…while ejecuta el bloque primero y comprueba DESPUÉS: siempre da una vuelta, incluso con 0 o negativo
  do {
    anadirLinea(`do…while · repetición ${i} de ${veces}`);
    contador++;
    i++;
  } while (i <= veces);

  anadirLinea(textoTotal(contador));
  console.log(`do…while: ${contador} vueltas con el número ${veces}`);
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  // TODO: como bucleFor(), pero cada vuelta añade un badge con el número de la repetición:
  //         anadirBadge(i, "primary");
  // TODO: los pares, de un color y los impares, de otro. Elige el color con el operador ternario.
    const veces = leerNumero("numero1");
  limpiarSalida();

  if (repeticionesNoValidas(veces)) {
    errorDeRepeticiones(veces, "badges for");
    return;
  }

  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    const color = i % 2 === 0 ? "primary" : "secondary";
    anadirBadge(i, color);
    contador++;
  }

  anadirLinea(textoTotal(contador));
  console.log(`badges for: ${contador} vueltas con el número ${veces}`);
}

function badgesWhile() {
  // TODO: lo mismo que badgesFor(), con un while.
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (repeticionesNoValidas(veces)) {
    errorDeRepeticiones(veces, "badges while");
    return;
  }

  let contador = 0;
  let i = 1;
  while (i <= veces) {
    const color = i % 2 === 0 ? "primary" : "secondary";
    anadirBadge(i, color);
    contador++;
    i++;
  }

  anadirLinea(textoTotal(contador));
  console.log(`badges while: ${contador} vueltas con el número ${veces}`);
}


function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.
    const veces = leerNumero("numero1");
  limpiarSalida();

  if (repeticionesNoValidas(veces)) {
    errorDeRepeticiones(veces, "badges do…while");
    return;
  }

  let contador = 0;
  let i = 1;
  do {
    const color = i % 2 === 0 ? "primary" : "secondary";
    anadirBadge(i, color);
    contador++;
    i++;
  } while (i <= veces);

  anadirLinea(textoTotal(contador));
  console.log(`badges do…while: ${contador} vueltas con el número ${veces}`);
}
