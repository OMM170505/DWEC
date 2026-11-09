/*
  Tarea 6 · DWEC · Oliver Montes Marcos
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.

  Al final del archivo hay una guía para la defensa en clase: los cambios que
  puede pedir el profesor, cómo hacerlos y las preguntas más probables.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

// join(", ") une los elementos del array en un solo texto, separados por coma y espacio.
function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// Objeto con cuatro propiedades y un método que usa this.
// ============================================================

// TODO: completa el objeto literal con tus datos: nombre, apellidos, edad y curso.
// TODO: añádele el método presentarse(), que devuelve una frase con this.nombre, this.apellidos, this.edad y this.curso.
//       Por ejemplo: «Soy [nombre] [apellidos], tengo [edad] años y estudio [curso].»
const estudiante = {
  nombre: "Oliver",
  apellidos: "Montes Marcos",
  edad: 21,
  curso: "2 DAW",
  // Dentro del método, this es el propio objeto: this.nombre es lo mismo que estudiante.nombre.
  presentarse: function () {
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  }
  // DEFENSA 1: aquí iría el método esMayorDeEdad() (antes, pon una coma detrás de la } de presentarse)
};

// «Ver ficha»: lista con las cuatro propiedades y, debajo, la frase de presentarse().
function verFicha() {
  // querySelector("#salida1") busca en el HTML el elemento con id="salida1" (el div donde se muestra el resultado).
  // textContent = "" lo vacía, para que al pulsar el botón otra vez no se acumule la ficha anterior.
  const salida = document.querySelector("#salida1");
  salida.textContent = "";
  const lista = document.createElement("ul");
  lista.classList.add("list-group", "mb-3");
  // Las claves van en un array y el valor se lee con corchetes, porque el nombre
  // de la propiedad está en una variable. estudiante.clave buscaría una propiedad llamada «clave».
  const claves = ["nombre", "apellidos", "edad", "curso"];
  claves.forEach(function (clave) {
    const elemento = document.createElement("li");
    elemento.classList.add("list-group-item");
    elemento.textContent = clave + ": " + estudiante[clave];
    lista.append(elemento);
  });
  salida.append(lista);
  const presentacion = document.createElement("p");
  presentacion.textContent = estudiante.presentarse();
  salida.append(presentacion);
  // DEFENSA 1: aquí iría el párrafo que dice si es mayor de edad, usando estudiante.esMayorDeEdad()
  console.log("Ejercicio 1: ficha", estudiante);
}

// «Cumplir años»: cambia una propiedad que ya existe.
function cumplirAnios() {
  estudiante.edad = estudiante.edad + 1;
  verFicha();
  console.log("Ejercicio 1: nueva edad", estudiante.edad);
}

// «Quitar el curso»: delete borra la propiedad entera. Después, leer
// estudiante.curso da undefined, y eso es lo que sale en la ficha y en la frase.
function quitarCurso() {
  delete estudiante.curso;
  verFicha();
  console.log("Ejercicio 1: curso eliminado", estudiante);
}

// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

// Es const, pero su contenido se puede cambiar con push, pop o shift:
// const solo impide asignarle otro array (colores = [...] daría error).
const colores = ["rojo", "verde", "azul"];

// Pinta la lista y actualiza el contador con colores.length.
function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";
  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });
  document.querySelector("#totalColores").textContent = colores.length;
}

// Muestra el aviso quitándole la clase d-none de Bootstrap, que lo tiene oculto.
function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

// «Añadir»: push mete el color al final. trim() quita los espacios de los lados.
function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();
  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    console.log("Ejercicio 2: no se ha añadido ningún color");
    return;
  }
  colores.push(color);
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

// «Quitar el último»: pop() quita el último elemento y lo devuelve.
// Con la lista vacía devolvería undefined, por eso se comprueba antes.
function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No hay colores para quitar.");
    console.log("Ejercicio 2: lista vacía");
    return;
  }
  const eliminado = colores.pop();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: pop ha quitado", eliminado);
}

// «Quitar el primero»: shift() quita el primero y lo devuelve; los demás avanzan una posición.
function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("No hay colores para quitar.");
    console.log("Ejercicio 2: lista vacía");
    return;
  }
  const eliminado = colores.shift();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: shift ha quitado", eliminado);
}
mostrarColores();  // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================
// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
// Una fila (tr) por producto con tres celdas (td). toFixed(2) deja el precio con dos decimales.
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";
  lista.forEach(function (producto) {
    const fila = document.createElement("tr");
    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;
    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;
    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";
    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

// «Todos»: el catálogo completo y cuántos productos hay.
function mostrarProductos() {
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = "Mostrando todos los productos " + productos.length + ".";
  console.log("Ejercicio 3: todos los productos", productos);
}

// «Ordenar por precio»: sort con función de comparación.
// Si la función devuelve un número negativo, a va antes que b; si es positivo, b va antes.
function ordenarPorPrecio() {
  const copia = [...productos];   // una copia: sort cambia el array y así podemos restaurarlo
  // DEFENSA 6: esta es la línea que evita ordenar el original. Sin ella sería productos.sort(...)
  // DEFENSA 3: para ordenar por nombre, aquí iría la función de comparación con if, < y >
  copia.sort(function (a, b) {
    // DEFENSA 2: para ordenar de más caro a más barato, aquí iría b.precio - a.precio
    return a.precio - b.precio;   // de menor a mayor
  });
  pintarProductos(copia);
  // DEFENSA 2 y 3: si cambias el orden, cambia también este mensaje
  document.querySelector("#mensaje3").textContent = "Productos ordenados de menor a mayor precio: " + copia.length + ".";
  console.log("Ejercicio 3: sort por precio", copia);
}

// «Más de 50 €»: filter devuelve un array nuevo con los productos para los que la función devuelve true.
function filtrarCaros() {
  const caros = productos.filter(function (producto) {
    // DEFENSA 4: para filtrar por categoría, aquí iría return producto.categoria === "Periféricos";
    return producto.precio > 50;
  });
  pintarProductos(caros);
  // DEFENSA 4: y aquí cambiarías el mensaje («Hay X productos de Periféricos.»)
  document.querySelector("#mensaje3").textContent = "Hay " + caros.length + " productos de más de 50 €.";
  console.log("Ejercicio 3: productos de mas de 50", caros);
}

// «Buscar»: find devuelve el PRIMER producto que cumple la condición, o undefined si ninguno.
// Los dos textos se pasan a minúsculas para que «RATÓN» y «ratón» coincidan.
function buscarProducto() {
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");
  if (texto === "") {
    mensaje.textContent = "Escribe el nombre de un producto para buscarlo.";
    document.querySelector("#tablaProductos").textContent = "";
    console.log("Ejercicio 3: búsqueda vacía");
    return;
  }
  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(texto);
  });
  if (encontrado === undefined) {
    mensaje.textContent = "Producto no encontrado.";
    pintarProductos([]);
  } else {
    mensaje.textContent = "Producto encontrado: " + encontrado.nombre;
    pintarProductos([encontrado]);   // entre corchetes porque pintarProductos espera un array
  }
  console.log("Ejercicio 3: búsqueda exitosa", encontrado);
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Oliver",
  notas: [],
  // Guarda la nota y devuelve true, o devuelve false sin guardarla si no es un número entre 0 y 10.
  anadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  },

  // Media con reduce: el acumulado empieza en 0 y en cada vuelta suma una nota.
  // Sin notas devuelve 0, para no dividir entre 0.
  media: function () {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(function (acumulado, nota) {
      return acumulado + nota;
    }, 0);
    return suma / this.notas.length;
  }
  // DEFENSA 5: aquí iría el método notaMasAlta() (antes, pon una coma detrás de la } de media)
};

// Badges en verde si la nota es de 5 o más y en rojo si no; debajo, la media con dos decimales.
function mostrarNotas() {
  const contenedor = document.querySelector("#notas");
  contenedor.textContent = "";
  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-2");
    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }
    badge.textContent = nota;
    contenedor.append(badge);
  });
  const media = document.querySelector("#media");
  if (alumno.notas.length === 0) {
    media.textContent = "Todavia no hay notas.";
  } else {
    media.textContent = "Media: " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
    // DEFENSA 5: aquí se añadiría al texto la nota más alta: " · Nota más alta: " + alumno.notaMasAlta()
  }
}

// «Añadir nota»: la casilla vacía se comprueba ANTES de convertir,
// porque Number("") vale 0 y se guardaría un 0 sin que nadie lo haya escrito.
function anadirNota() {
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");
  if (casilla.value.trim() === "") {
    error.textContent = "Introduce una nota antes de añadirla.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: casilla vacía");
    return;
  }
  const nota = Number(casilla.value);
  if (alumno.anadirNota(nota) === false) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: nota no válida", nota);
    return;
  }
  error.classList.add("d-none");
  casilla.value = "";
  mostrarNotas();
  console.log("Ejercicio 4: nota añadida", nota);
}

// «Borrar»: se le asigna un array vacío nuevo a la propiedad notas.
function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();
  console.log("Ejercicio 4: notas borradas");
}
mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// Los tres devuelven algo nuevo: numeros no cambia nunca, y por eso se enseña debajo.
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map: un array nuevo, del mismo tamaño, con lo que devuelve la función para cada número.
function verDobles() {
  const dobles = numeros.map(function (numero) {
    return numero * 2;
  });
  document.querySelector("#salida5").textContent = "Dobles: " + comoTexto(dobles) + "\nArray original: " + comoTexto(numeros);
  console.log("Ejercicio 5: map dobles", dobles);
}

// filter: se queda con los números cuyo resto entre 2 es 0.
function verPares() {
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });
  document.querySelector("#salida5").textContent = "Pares: " + comoTexto(pares) + "\nArray original: " + comoTexto(numeros);
  console.log("Ejercicio 5: filter pares", pares);
}

// reduce: deja el array en un solo valor. 1 + 2 + ... + 10 = 55.
function verSuma() {
  const suma = numeros.reduce(function (acumulado, numero) {
    return acumulado + numero;
  }, 0);
  document.querySelector("#salida5").textContent = "Suma: " + suma + "\nArray original: " + comoTexto(numeros);
  console.log("Ejercicio 5: reduce suma", suma);
}

// Cada paso trabaja sobre el resultado del anterior:
// filter → [2, 4, 6, 8, 10] · map → [4, 8, 12, 16, 20] · reduce → 60
function verCadena() {
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });
  const dobles = pares.map(function (numero) {
    return numero * 2;
  });
  const suma = dobles.reduce(function (acumulado, numero) {
    return acumulado + numero;
  }, 0);
  document.querySelector("#salida5").textContent = "Suma de dobles de pares: " + suma + "\nArray original: " + comoTexto(numeros);
  console.log("Ejercicio 5: pares", pares, "dobles", dobles, "suma", suma);
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
// Es let, y no const, porque «Restaurar» le asigna un array nuevo.
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

// forEach le pasa a la función el elemento y, como segundo parámetro, su posición.
function mostrarCiudades() {
 const contenedor = document.querySelector("#ciudades");
  contenedor.textContent = "";
  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-secondary", "me-2", "mb-2");
    badge.textContent = posicion + " · " + ciudad;
    contenedor.append(badge);
  });
  console.log("Ejercicio 6: ciudades", ciudades);
}

// slice(2, 5) devuelve una copia de las posiciones 2, 3 y 4 (el 5 no entra).
// NO cambia ciudades: sigue teniendo las mismas.
function verSlice() {
  const seleccion = ciudades.slice(2, 5);
  document.querySelector("#salida6").textContent = "slice(2, 5) devuelve: " + comoTexto(seleccion) + "\nSiguen en el array original: " + ciudades.length + " ciudades.";
  console.log("Ejercicio 6: slice", seleccion, "ciudades sin modificar", ciudades);
}

// splice(2, 2) SÍ cambia ciudades: desde la posición 2 quita 2 y las devuelve.
// Las que iban detrás se mueven hacia delante (Jaén pasa de la posición 4 a la 2).
function hacerSplice() {
  const salida = document.querySelector("#salida6");
  if (ciudades.length < 3) {
    salida.textContent = "No hay suficientes ciudades para hacer splice.";
    console.log("Ejercicio 6: splice no se ha hecho, ciudades menos de 3");
    return;
  }
  // DEFENSA 7: si aquí pusieras ciudades.slice(2, 2), devolvería [] y ciudades no cambiaría
  const eliminadas = ciudades.splice(2, 2);
  salida.textContent = "splice(2, 2) ha quitado: " + comoTexto(eliminadas) + "\nAhora quedan " + ciudades.length + " ciudades.";
  mostrarCiudades();
  console.log("Ejercicio 6: ciudades eliminadas", eliminadas);
}

// Se vuelve a copiar con [...]. Con ciudades = ciudadesOriginal las dos variables
// serían el MISMO array, y el siguiente splice estropearía también el original.
function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];
  document.querySelector("#salida6").textContent = "Se han restaurado las ciudades originales";
  mostrarCiudades();
  console.log("Ejercicio 6: restauradas ciudades", ciudades);
}

// includes() devuelve true/false; indexOf() devuelve la posición, o -1 si no está.
// Los dos comparan con ===, así que el nombre tiene que ser exacto (mayúsculas y tildes).
function buscarCiudad() {
  const nombre = document.querySelector("#buscarCiudad").value.trim();
  const salida = document.querySelector("#salida6");
  if (nombre === "") {
    salida.textContent = "Escribe el nombre de una ciudad para buscarla.";
    console.log("Ejercicio 6: búsqueda vacía");
    return;
  }
  const posicion = ciudades.indexOf(nombre);
  const incluida = ciudades.includes(nombre);
  salida.textContent = "includes(" + nombre + "): " + incluida + "\nindexOf(" + nombre + "): " + posicion;
  console.log("Ejercicio 6: búsqueda", nombre, "includes", incluida, "indexOf", posicion);
}
mostrarCiudades();


/*
  ============================================================
  GUÍA PARA LA DEFENSA EN CLASE
  ============================================================
  Lo que puede pedir el profesor y cómo hacerlo. Todo con function, sin flechas.
  En el código hay marcas «// DEFENSA n: aquí iría...» en el sitio exacto de
  cada cambio; el número n es el del punto de esta guía.

  ------------------------------------------------------------
  1. «Añade al estudiante un método esMayorDeEdad() y úsalo en la ficha»
  ------------------------------------------------------------
  Dentro del objeto estudiante, después de presentarse (con una coma entre los dos):

      esMayorDeEdad: function () {
        return this.edad >= 18;
      }

  En verFicha(), después de la frase de presentarse():

      const mayor = document.createElement("p");
      if (estudiante.esMayorDeEdad()) {
        mayor.textContent = "Es mayor de edad";
      } else {
        mayor.textContent = "No es mayor de edad";
      }
      salida.append(mayor);

  ------------------------------------------------------------
  2. «Ordena el catálogo de más caro a más barato»
  ------------------------------------------------------------
  En ordenarPorPrecio() se cambia el orden de la resta:

      return b.precio - a.precio;   // de mayor a menor

  ------------------------------------------------------------
  3. «Ordénalo por nombre»
  ------------------------------------------------------------
  Con textos no se puede restar. Se comparan con < y > y se devuelve -1, 1 o 0:

      copia.sort(function (a, b) {
        if (a.nombre < b.nombre) {
          return -1;
        }
        if (a.nombre > b.nombre) {
          return 1;
        }
        return 0;
      });

  Otra forma, que además respeta las tildes: return a.nombre.localeCompare(b.nombre);

  ------------------------------------------------------------
  4. «Cambia el filtro para quedarte con los productos de una categoría»
  ------------------------------------------------------------
  En filtrarCaros() se cambia la condición (y el mensaje de #mensaje3):

      return producto.categoria === "Periféricos";

  ------------------------------------------------------------
  5. «Añade al alumno un método que devuelva su nota más alta»
  ------------------------------------------------------------
  Dentro del objeto alumno, después de media (con una coma):

      notaMasAlta: function () {
        if (this.notas.length === 0) {
          return 0;
        }
        return this.notas.reduce(function (maxima, nota) {
          if (nota > maxima) {
            return nota;
          }
          return maxima;
        });
      }

  Sin valor inicial, reduce empieza con la primera nota como «maxima».
  Para enseñarla, en mostrarNotas(): "Nota más alta: " + alumno.notaMasAlta()

  ------------------------------------------------------------
  6. «¿Qué pasaría si ordenaras productos sin copiarlo?»
  ------------------------------------------------------------
  sort cambia el array sobre el que se llama. Se perdería el orden original:
  «Todos» enseñaría el catálogo ya ordenado y no habría forma de volver al de antes.
  Con [...productos] se ordena un array nuevo y productos se queda igual.

  ------------------------------------------------------------
  7. «¿Y si hacerSplice() usara slice?»
  ------------------------------------------------------------
  slice no cambia el array: ciudades seguiría con sus 8 ciudades y los badges no
  cambiarían. Además, slice(2, 2) significa «de la posición 2 hasta la 2, sin
  incluirla», así que devolvería un array vacío []. En splice el segundo número
  es CUÁNTOS quitar; en slice es la posición DONDE parar.

  ------------------------------------------------------------
  8. «Encuentra el error que te he metido» (con la consola, F12)
  ------------------------------------------------------------
  Leer el mensaje rojo y pulsar el enlace de la derecha, que lleva a la línea.
  · ReferenceError: x is not defined → nombre de variable o función mal escrito.
  · TypeError: Cannot read properties of null → querySelector no encuentra el
    elemento: id mal escrito o falta la # delante.
  · TypeError: x is not a function → el onclick del HTML no coincide con el
    nombre de la función, o falta el () al llamar a un método.
  · No sale error pero no hace nada → falta un return dentro de sort, filter,
    map, find o reduce, o una comparación está al revés (< en vez de >).
  · El console.log() de cada función dice si se ha llegado a ejecutar y con qué datos.

  ------------------------------------------------------------
  9. Preguntas de teoría que pueden caer
  ------------------------------------------------------------
  · Punto o corchetes: estudiante.edad cuando conoces el nombre de la propiedad;
    estudiante[clave] cuando el nombre está en una variable.
  · this: dentro de un método es el objeto que lo llama (estudiante, alumno).
  · Qué sale tras delete: undefined, porque la propiedad ya no existe.
  · Por qué colores es const y se le puede hacer push: const impide reasignar la
    variable, no cambiar lo que hay dentro del array.
  · Cambian el original: push, pop, shift, splice, sort.
    Devuelven uno nuevo: slice, map, filter (y [...array] hace una copia).
  · find o filter: find devuelve un elemento (el primero) o undefined; filter
    devuelve siempre un array, aunque esté vacío.
  · indexOf o includes: indexOf da la posición (-1 si no está); includes da true/false.
  · Posición tras splice: si buscas «Jaén» antes sale 4 y después 2, porque al
    quitar dos ciudades las de detrás avanzan.
  · El 0 del final de reduce: es el valor inicial del acumulado. Sin él, con un
    array vacío reduce da error.
  · Por qué textContent y no innerHTML: textContent mete solo texto, así que lo
    que escribe el usuario nunca se interpreta como HTML.
  · Por qué Number("") se comprueba antes: Number("") es 0, una nota «válida»,
    y se guardaría sin haber escrito nada.
*/
