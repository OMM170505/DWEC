/*
  Tarea 7 · DWEC · Oliver Montes Marcos
  Funciones, flechas y clases.

  Reglas que sigo en este tema:
      - declaración, function nombre() { ... }, para las funciones con nombre, como las de los botones;
      - FLECHA para todos los callbacks: forEach, map, filter, sort, reduce, find, some...;
      - nunca una flecha como método: en las clases, la forma corta media() { ... }.
  · Los resultados se pintan en la página como en los temas 5 y 6: createElement, textContent, classList y append.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// (ya está hecha, y su forEach ya lleva una flecha: es el modelo)
// ============================================================

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================

// Devuelve el precio final: primero resta el descuento y después suma el IVA. No lee ni pinta nada.
// iva y descuento tienen valores por defecto (21 y 0). calcularPrecio(100) da 121.
function calcularPrecio(base, iva = 21, descuento = 0) {
  const conDescuento = base - (base * descuento) / 100;
  const precioFinal = conDescuento + (conDescuento * iva) / 100;
  console.log("calcularPrecio:", base, iva, descuento, "→", precioFinal);
  return precioFinal;
}

// Ya está hecha: 74.8 → "74.80 €"
function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  const textoBase = document.querySelector("#base").value;
  const iva = Number(document.querySelector("#iva").value);
  const textoDescuento = document.querySelector("#descuento").value;
  const error = document.querySelector("#error1");
  const salida = document.querySelector("#salida1");

  const base = Number(textoBase);

  // La base no puede estar vacía ni ser negativa
  if (textoBase === "" || base < 0) {
    error.textContent = "Escribe un precio sin IVA que no sea negativo.";
    error.classList.remove("d-none");
    salida.textContent = "";
    console.log("Ejercicio 1: base no válida");
    return;
  }

  let descuento = 0;
  let precio;

  if (textoDescuento === "") {
    // Sin descuento: no paso el tercer argumento y se usa el valor por defecto (0)
    precio = calcularPrecio(base, iva);
  } else {
    descuento = Number(textoDescuento);
    if (descuento < 0 || descuento > 100) {
      error.textContent = "El descuento tiene que estar entre 0 y 100.";
      error.classList.remove("d-none");
      salida.textContent = "";
      console.log("Ejercicio 1: descuento no válido");
      return;
    }
    precio = calcularPrecio(base, iva, descuento);
  }

  error.classList.add("d-none");
  pintarLista("#salida1", [
    `Precio sin IVA: ${formatearEuros(base)}`,
    `Descuento: ${descuento} %`,
    `IVA: ${iva} %`,
    `Precio final: ${formatearEuros(precio)}`
  ]);
  console.log("Ejercicio 1: precio final →", precio);
}

// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

// Ya está hecha: una película como texto, «Coco (2017) · 105 min»
function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

// Callbacks con flecha: como el cuerpo es solo una expresión, van sin llaves ni return.

function verTitulos() {
  const titulos = peliculas.map((pelicula) => pelicula.titulo);
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter((pelicula) => pelicula.duracion > 120);
  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio);   // una copia: sort cambia el original
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

function buscarAntigua() {
  const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);

  if (antigua === undefined) {
    document.querySelector("#salida2").textContent = "";
    document.querySelector("#mensaje2").textContent = "No hay ninguna película anterior a 1990.";
    console.log("Ejercicio 2: find → undefined");
    return;
  }

  pintarLista("#salida2", [comoTexto(antigua)]);
  document.querySelector("#mensaje2").textContent = "La primera película anterior a 1990.";
  console.log("Ejercicio 2: find →", antigua);
}


// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

// Hace a mano lo mismo que map: aplica operacion a cada elemento y devuelve un array NUEVO.
function transformar(lista, operacion) {
  const resultado = [];
  for (const elemento of lista) {
    resultado.push(operacion(elemento));
  }
  console.log("transformar:", lista, "→", resultado);
  return resultado;
}

// Ya está hecha: escribe en #salida3 tu resultado, el de map y numeros
function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles →", resultado);
}

function verCuadrados() {
  const resultado = transformar(numeros, (n) => n ** 2);
  mostrar3("cuadrados", resultado, numeros.map((n) => n ** 2));
  console.log("Ejercicio 3: cuadrados →", resultado);
}

function verAbsolutos() {
  const resultado = transformar(numeros, Math.abs);
  mostrar3("absolutos", resultado, numeros.map(Math.abs));
  console.log("Ejercicio 3: absolutos →", resultado);
}



// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

// Devuelve una función que recuerda su propia variable cuenta (un closure). paso vale 1 por defecto.
function crearContador(paso = 1) {
  let cuenta = 0;
  console.log("crearContador: paso =", paso, "en", paso);

  return () => {
    cuenta = cuenta + paso;
    return cuenta;
  };
}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

// El modelo
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

function sumarCinco() {
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Ejercicio 4: de 5 en 5 →", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  // Guarda la nota solo si es un número entre 0 y 10. Devuelve true o false
  anadirNota(nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      console.log("anadirNota: nota no válida →", nota);
      return false;
    }
    this.notas.push(nota);
    return true;
  }

  // La media de las notas, o 0 si no tiene ninguna
  media() {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce((total, nota) => total + nota, 0);
    return suma / this.notas.length;
  }

  presentarse() {
    return `${this.nombre}, de ${this.curso}`;
  }
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);   // primero el constructor de Alumno
    this.empresa = empresa;
  }

  // Aprovecha la frase de Alumno y le añade la empresa
  presentarse() {
    return `${super.presentarse()}, en prácticas en ${this.empresa}`;
  }
}

const alumnos = [];

// Dos alumnos de partida: un Alumno y un AlumnoFCT, con dos notas cada uno
const lucia = new Alumno("Lucía Martín Ortega", "2º DAW");
lucia.anadirNota(7);
lucia.anadirNota(8.5);

const pablo = new AlumnoFCT("Pablo García López", "2º DAW", "InnovaTech");
pablo.anadirNota(9);
pablo.anadirNota(6.5);

alumnos.push(lucia, pablo);
console.log("Ejercicio 5: alumnos de partida →", alumnos);

// Ya está hecha: pinta una tarjeta por alumno en #listaAlumnos y actualiza #totalAlumnos
function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

function crearAlumno() {
  const nombre = document.querySelector("#nombre5").value.trim();
  const curso = document.querySelector("#curso5").value;
  const empresa = document.querySelector("#empresa5").value.trim();
  const textoNotas = document.querySelector("#notas5").value.trim();
  const error = document.querySelector("#error5");

  if (nombre === "") {
    error.textContent = "Escribe el nombre del alumno.";
    error.classList.remove("d-none");
    console.log("Ejercicio 5: falta el nombre");
    return;
  }

  // "7, 8.5, 6" → ["7", " 8.5", " 6"] → [7, 8.5, 6]
  let notas = [];
  if (textoNotas !== "") {
    notas = textoNotas.split(",").map((texto) => Number(texto.trim()));
  }

  // Si alguna nota no es válida, no se crea el alumno
  const hayMala = notas.some((nota) => Number.isNaN(nota) || nota < 0 || nota > 10);
  if (hayMala) {
    error.textContent = "Las notas tienen que ser números del 0 al 10, separados por comas.";
    error.classList.remove("d-none");
    console.log("Ejercicio 5: notas no válidas →", notas);
    return;
  }

  // Con empresa, un AlumnoFCT; sin ella, un Alumno
  let alumno;
  if (empresa === "") {
    alumno = new Alumno(nombre, curso);
  } else {
    alumno = new AlumnoFCT(nombre, curso, empresa);
  }

  notas.forEach((nota) => alumno.anadirNota(nota));

  alumnos.push(alumno);
  error.classList.add("d-none");
  document.querySelector("#nombre5").value = "";
  document.querySelector("#empresa5").value = "";
  document.querySelector("#notas5").value = "";
  pintarAlumnos();
  console.log("Ejercicio 5: alumno creado →", alumno);
}

pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

// Días que faltan desde hoy hasta fecha (negativo si ya pasó). Hoy a medianoche y Math.round,
// porque con el cambio de hora la resta no siempre da un número entero de días.
function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const MS_POR_DIA = 1000 * 60 * 60 * 24;
  const dias = Math.round((fecha - hoy) / MS_POR_DIA);
  console.log("diasHasta:", fecha, "→", dias);
  return dias;
}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;        // "2026-12-25", o "" si está vacía
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }

  // Ya está hecho: de "2026-12-25" a un Date. Fíjate en el mes - 1: el mes va de 0 a 11
  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);

  const dias = diasHasta(fecha);
  const nombreFecha = fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const palabra = Math.abs(dias) === 1 ? "día" : "días";

  if (dias > 0) {
    salida.textContent = `Faltan ${dias} ${palabra}: será ${nombreFecha}.`;
  } else if (dias === 0) {
    salida.textContent = `Es hoy: ${nombreFecha}.`;
  } else {
    salida.textContent = `Fue hace ${Math.abs(dias)} ${palabra}: fue ${nombreFecha}.`;
  }
  console.log("Ejercicio 6: días →", dias);
}

// «lucía  martín ortega» → «LMO». El filter quita las palabras vacías que dejan los espacios dobles.
function iniciales(nombreCompleto) {
  return nombreCompleto
    .trim()
    .split(" ")
    .filter((palabra) => palabra !== "")
    .map((palabra) => palabra[0].toUpperCase())
    .join("");
}

// «lucía martín ortega» → «lmo042»: iniciales en minúsculas y tres cifras al azar.
function crearUsuario(nombreCompleto) {
  const numero = Math.floor(Math.random() * 1000);          // de 0 a 999
  const cifras = String(numero).padStart(3, "0");           // 42 → "042"
  return iniciales(nombreCompleto).toLowerCase() + cifras;
}

function mostrarIniciales() {
  const nombre = document.querySelector("#nombre6").value;
  const salida = document.querySelector("#salida6b");

  if (nombre.trim() === "") {
    salida.textContent = "Escribe un nombre.";
    console.log("Ejercicio 6: nombre vacío");
    return;
  }

  const ini = iniciales(nombre);
  const usuario = crearUsuario(nombre);

  salida.textContent = `Iniciales: ${ini} · usuario: ${usuario}`;
  console.log("Ejercicio 6: iniciales →", ini, "· usuario →", usuario);
}
