/*
comillas simples o dobles son indiferentes en JS
usar camellCase
alert('Hola mundo')
*/

//#region Codigo de Ejemplo
let numeroUsuario = prompt("Me indicas un numero por favor"); //ingresar un parametro en chrome
let numeroSecreto = 6;

console.log(numeroUsuario);

if(numeroUsuario == numeroSecreto){
    alert('Acertaste el numero');
}
//#endregion

/*
1 - Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
*/

alert("¡Bienvenida y bienvenido a nuestro sitio web!");

/*
2 - Declara una variable llamada nombre y asígnale el valor "Lua".
*/

let nombre = "Lua";
console.log(nombre);

/*
3 - Crea una variable llamada edad y asígnale el valor 25.
*/

let edad = 25;
console.log(edad);

/*
4 - Establece una variable numeroDeVentas y asígnale el valor 50.
*/

let numeroDeVentas = 50;
console.log(numeroDeVentas);

/* 
5 - Establece una variable saldoDisponible y asígnale el valor 1000.
*/

let saldoDisponible = 1000;
console.log(saldoDisponible);

/*
6 - Muestra una alerta con el texto "¡Error! Completa todos los campos".
*/

alert("¡Error! Completa todos los campos");

/*
7 - Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". 
Ahora muestra una alerta con el valor de la variable mensajeDeError .
*/

let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

/*
8- Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.
*/

let nombre2 = prompt("Cual es tu nombre?");
console.log(nombre2);

/*
9 - Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
*/

let edad2 = prompt("Ingresa tu edad");
console.log(edad2);

/*
10 - Ahora, si la edad es mayor o igual a 18, 
muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección
*/

if(edad2 >= 18){
    alert('"¡Puedes obtener tu licencia de conducir!".Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección');
}