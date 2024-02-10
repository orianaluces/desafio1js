//Ejercicio 1

let dia = false;

if (dia) {
    console.log("claro");
}
else {
    console.log("de noite");
}

//Ejercicio 2

for (let i= 0; i <= 20; i += 2){
    console.log(i);
}
 
//Ejercicio 3

function mostrarMensaje() {
    console.log("Mi primer trabajo");
}

mostrarMensaje();

//Ejercicio 4

function yo(nombre) {
    console.log(nombre);
}

yo("Oriana Luces");

//Ejercicio 5

function datosPersonales(nombre, edad, musica) {
    console.log(nombre, edad, musica);
}

datosPersonales("Oriana", 35, "Gaita");

//Ejercicio 6

function gustos(pelicula, musica) {
    console.log(pelicula, musica);
}
gustos("Noche de tormenta", "-Sabe a gloria");


//Ejercicio 7

function multiplicador(){
    for(let i = 3; i <= 9; i *= 3) {
        console.log (i);
        }
}

multiplicador();

//Ejercicio 8

function verificacion() {
    let verdadMentira = false

    if (verdadMentira) {
        console.log("verdad");
    }
    else {
        console.log("mentira");
    }
}

verificacion();

//Ejercicio 9

let apostoles = ["Pedro", "Pablo", "Mateo", "Lucas", "Marcos"];

console.log(apostoles);


//Ejercicio 10

let animales = ["Perro", "Gato", "Mariposa", "Puma", "Conejo"];

animales.unshift("Leon");

console.log(animales);


//Ejercicio 11

let colores = ["Anaranjado", "Verde", "Azul", "Dorado", "Gris"]

colores.pop();

console.log(colores);


//Ejercicio 12

let numeros = ["tres", "cuatro", "cinco"]

numeros.push("uno", "dos");

console.log(numeros);


//Ejercicio 13

let sabores = ["Amargo", "Acido", "Dulce", "Salado"]

sabores.shift();

console.log(sabores);


//Ejercicio 14

let nome = ["João",  "Maria",  "Jose",  "Pedro"]

nome.splice(nome.length / 2, 0, "Marcos");

console.log(nome);


//ejercicio 15

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort();

console.log(numbers);