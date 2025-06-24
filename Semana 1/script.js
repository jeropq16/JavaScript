let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let ciudad = prompt("¿En qué ciudad vives?");
console.log(`Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}.`);



let lado1 = parseFloat(prompt("Ingresa el primer lado del triángulo: "));
let lado2 = parseFloat(prompt("Ingresa el segundo lado del triángulo: "));
let lado3 = parseFloat(prompt("Ingresa el tercer lado del triángulo: "));
if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero.");
}else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("El triángulo es isósceles.");
}else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
    console.log("El triángulo es escaleno.");
}else {
    console.log("No es un triángulo válido.");
}

// Ejercicio 1: Quita el primer elemento
let frutas = ["manzana", "piña", "mango"];
frutas.shift();
console.log(frutas); 

//Ejercicio 2: Agrega un número al final
let numeros1 = [1, 2, 3];
numeros1.push(4);
console.log(numeros1);

// Ejercicio 3: Agrega un elemento al principio
let palabras = ["balones", "futbol"];
palabras.unshift("equipos");
console.log(palabras);

// Ejercicio 4: Elimina el último elemento
let colores1 = ["rojo", "verde", "azul"];
colores1.pop();
console.log(colores1); 

// Ejercicio 5: Extrae un valor sin modificar original
let animales = ["perro", "gato", "caballo", "vaca"];
let algunos = animales.slice(1, 3);
console.log(algunos); 
console.log(animales); 

// Ejercicio 6: Reemplaza un elemento
let comidas = ["pizza", "hamburguesa", "salchipapas"];
comidas[1] = "perros";
console.log(comidas); 

//Ejercicio 7: Une en un string en una frase
let palabras2 = ["Hola", "bienvenido a", "JavaScript"];
let frase = palabras2.join(" ");
console.log(frase); 

// Ejercicio 8: Ordena alfabéticamente
let nombres2 = ["Andrea", "Ana", "Pedro", "Pablo"];
nombres2.sort();
console.log(nombres2);

// Ejercicio 9: Invierte el orden
let numeros2 = [1, 2, 3, 4];
numeros2.reverse();
console.log(numeros2);

// Ejercicio 10: Verifica si existe un valor
let colores2 = ["rojo", "verde", "azul"];
let existe = colores2.includes("verde");
console.log(existe);

// without arrays

//1
let palabra = "Hola";
for (let letra of palabra) {
  console.log(letra);
}

//2
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


//3
let texto = "Mundo";
for (let indice in texto) {
  console.log(`Índice ${indice}: ${texto[indice]}`);
}

// with arrays
//1
let nombres = ["Ana", "Luis", "Pedro"];
for (let nombre of nombres) {
  console.log(`Hola, ${nombre}`);
}

//2
let colores = ["Rojo", "Verde", "Azul"];
for (let indice in colores) {
  console.log(indice);
}

//3
let numeros = [10, 20, 30];
for (let i in numeros) {
  console.log(`indice ${i}: ${numeros[i]}`);
}

// Ejercicios con objetos

//1
let persona = {
  nombre: "Carlos",
  edad: 30,
  ciudad: "Medellín"
};

console.log(persona.edad); // 30

//2

let libro = { titulo: "El principito", autor: "Antoine de Saint-Exupéry" };
libro.titulo =  "El principito (Edición especial)";

//3
let auto = { marca: "Toyota", modelo: "Tacoma" };
auto.color = "Blanco";

//4
let estudiante = { nombre: "Mariana", nota: 4.5, curso: "JS" };
for (let clave in estudiante) {
  console.log(`${clave}: ${estudiante[clave]}`);
}

//5
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludar("Jero"));

//6
function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 3)); // 8

//7
function esPar(numero) {
  return numero % 2 === 0;
}
console.log(esPar(4)); // true

//8
function areaRectangulo(base, altura) {
  return base * altura;
}
console.log(areaRectangulo(5, 2)); // 10

//9

function celsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
console.log(celsiusAFahrenheit(25)); // 77

