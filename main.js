//Ejercicio 1: Obtener el primer elemento del array
let arr1 = [1 , 2 , 3 , 4];
console.log(arr1[0]);

//Ejercicio 2: Obtener el último elemento del array
let frutas = ["pera" , "manza" , "plantano" , "uva"];
console.log(frutas[frutas.length-1]);

//Ejercicio 3: Agregar un elemento al inicio del array
let numeros = [4, 9, 2, 7, 1];
console.log(numeros);
let mas = numeros.unshift(75);
console.log(numeros);

//Ejercicio 4: Eliminar el primer elemento del array
let nombres = ["Ana", "Luis", "Marta", "Carlos", "Sofía"];
console.log(nombres);
let eli = nombres.shift();
console.log(eli);
console.log(nombres)

//Ejercicio 5: Agregar un elemento al final del array
let colores = ["rojo", "azul", "verde", "amarillo", "morado"];
console.log(colores);
let masfin = colores.push("plata");
console.log(colores);

//Ejercicio 6: Eliminar el último elemento del array
let ciudades = ["Madrid", "Lisboa", "París", "Roma", "Berlín"];
console.log(ciudades);
let menos = ciudades.pop();
console.log(ciudades);

//Ejercicio 7: Combinar dos arrays
let temperaturas = [18, 22, 25, 19, 30, 28, 21];
let coches = ["Toyota", "Ford", "BMW", "Audi", "Seat"];
let juntar = temperaturas.concat(coches);
console.log(juntar);

//Ejercicio 8: Encontrar si un array incluye un elemento
let años = [1998, 2005, 2010, 2017, 2023];
let inclu = años.includes(2004);
let inclu2 = años.includes(2010);
console.log(inclu);
console.log(inclu2);
console.log(años);

//Ejercicio 9: Buscar el índice de un elemento
let marcas = ["Nike", "Adidas", "Puma", "Reebok", "Converse"];
marcas.forEach(function(valor, index){
    console.log(valor + ' ' + index)
});

//Ejercicio 10: Reemplazar un elemento en un array
let asignaturas = ["Matemáticas", "Historia", "Lengua", "Inglés", "Física"];
console.log(asignaturas);
asignaturas[1] = 3;
console.log(asignaturas);

//Ejercicio 11: Sumar todos los elementos del array
let puntuaciones = [45, 67, 89, 34, 22, 90, 76];
let totalSum = 0;
for(var i=0; i<puntuaciones.length; i++){
    totalSum += puntuaciones[i]; 
}
console.log(totalSum);

//Ejercicio 12: Multiplicar todos los elementos del array
let ventas = [12, 9, 4, 8, 5];

let totalMul = ventas.reduce(function (acumulador, num) {
  return acumulador * num;
}, 1);
console.log(totalMul);

/*
Como lo habia hecho
---------------
let totalMul = 1;
for(var i=0; i<ventas.length; i++){
    totalMul *= ventas[i]; 
}
console.log(totalMul);*/

//Ejercicio 13: Filtrar números mayores a un valor
let edades = [12, 17, 19, 23, 30, 45];
let mayoresa = edades.filter(function (num) {
  return num > 20;
});
console.log(mayoresa);

//Ejercicio 14: Verificar si todos los elementos son mayores a un número
let dediez = [10, 20, 30, 40, 50, 60];
let mensaje = "";
dediez.forEach(function (num) {
  if(num > 28){
    mensaje = "SI";
  }else{
    mensaje = "NO";
  }
  console.log(mensaje);
});

//Ejercicio 15: Obtener el primer elemento que cumple una condición
let edadesPrimos = [5, 15, 25, 35, 45];
let primero= edadesPrimos.find(function (num) {
  return num > 16 ;
});
console.log(primero);

//Ejercicio 16: Imprimir cada elemento del array
let comidas = ["Pizza", "Sushi", "Hamburguesa", "Tacos", "Ensalada"];
comidas.forEach(function (va) {
  console.log(va);
});

//Ejercicio 17: Crear un array con el doble de cada número
let calificaciones = [18, 20, 25, 22, 30, 27];
let duplica = calificaciones.map(function (num) {
  return num * 2;
});
console.log(duplica);

//Ejercicio 18: Convertir un array de nombres en mayúsculas
let animales = ["perro", "gato", "loro", "conejo", "tortuga"];
let animalesGrandes = animales.map(function (va) {
  let mayores = va.toUpperCase();
  return mayores;
});
console.log(animalesGrandes);

