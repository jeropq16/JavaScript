/* 1.1
JavaScript es un lenguaje de programación que permite darle interactividad y dinamismo a una página web.
A diferencia de HTML y CSS, JavaScript permite programar interacciones, como dar a clics, mostrar mensajes,
comprobar formularios formularios, etc

1.2

Tres características:

Es interpretado así que no necesita compilarse

Funciona en el navegador y en servidores como Node.js

Permite manipular el DOM que es el contenido de la página web

1.3

Interpretado significa que se ejecuta línea por línea en tiempo real, sin compilar

Basado en eventos quiere decir que responde a acciones del usuario como clics o teclas.*/

// 2.1

let nombre = "Jerónimo";
console.log("Hola, " + nombre);

// 2.2

let entero = 16;
let decimal = 20.5;
let texto = "Esto es javaScript";
console.log(entero, decimal, texto);

// 2.3

const PI = 3.1416;


// 2.4

let sinValor;
console.log(sinValor);

// 2.5

let vacio = null;
let booleano = true;
console.log(vacio, booleano);

// 3.1

let edad = prompt("¿Cuál es tu edad?");
console.log("Tienes " + edad + " años");

// 3.2

alert("¡Bienvenido al taller de JavaScript!");

// 3.3

let continuar = confirm("¿Deseas continuar?");
console.log("¿Continuar?:", continuar);

// 4.1
let a = 10;
let b = 3;
console.log(a + b, a - b, a * b, a / b, a % b);

// 4.2

let texto1 = "Hola ";
let texto2 = "Mundo";
let unido = texto1 + texto2;
console.log(unido);

// 4.3

console.log(10 == "10");       // true
console.log(6 === "6");      // false
console.log(true && false);  // false
console.log(false || true);  // true
console.log(!true);          // false

// 5.1

let num = prompt("Ingresa un número");
num = Number(num);
if (num > 10) {
  console.log("Es mayor que 10");
} else if (num < 10) {
  console.log("Es menor que 10");
} else {
  console.log("Es igual a 10");
}

// 5.2

let usuario = prompt("¿Cuál es tu nombre?");
if (usuario === "Admin") {
  console.log("Bienvenido, Administrador");
} else {
  console.log("Hola, " + usuario);
}

// 5.3

let numero = prompt("Ingresa un número");
console.log(numero % 2 === 0 ? "Es par" : "Es impar");

console.info("Este es un mensaje informativo");
console.warn("Este es un mensaje de advertencia");
console.error("Este es un mensaje de error");
console.group("Grupo de mensajes");
console.groupEnd();

// Comentarios pequeños o de una sola linea//

/*
Comentarios grandes o de varias líneas para explicar el código
*/

let saludo = "Bienvenido de nuevo,";
console.log(saludo);