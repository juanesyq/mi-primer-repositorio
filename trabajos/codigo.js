// tipo de datos
/*string = "cadena de texto"
number = 19
booleano = false*/


//------------tipo de variables------------
//funcion de las variable var, let, const 
// trabajan con bloques
/*var = "para inicializar una variable"
let = "nos limita el alcance de la variable al bloque que lo utilizamos"
const = "es una variable que no puede cambiar su valor"*/

//ejemplo
/*let numero = 29;
numero = 23
alert(numero)*/

//-------------multiples variables------
//ejemplo1
/*let numero, numero2, numero3;

numero = 2;
numero2 = 9;
numero3 = 13;

alert(numero);
alert(numero2);
alert(numero3);*/

//ejemplo 2
/*let numero1 = 23;
let numero2 = 39;*/


//-----------casos especiales de datos: undefined, null, Nan;---------------------

/*let numero = null // nos dice que variables esta vacia

let numero1 = 5;
let numero2 = "pedro";

alert(numero1 * numero2); //resultado NaN (cuando se intenta hacer algo que no es un numero)*/


//------------pruebas con prompt------------------

//prompt("decime tu nombre");
//ejemplo1

/*let nombre = prompt("decime tu nombre");

alert(nombre);

//ejemplo 2
let nombre = prompt("dime tu nombre");

alert("hola " + nombre);*/



//----------operadores aritmeticos------------
//ejemplo1
/*numero1 = 10;
numero2 = 5;

resultado = numero1 + numero2;

alert(resultado);*/


//ejemplo 2
/*numero1 = 10;
numero2 = 5;

//numero1--; // decremento
//resultado = numero1/ numero2;
//resultado = numero1**2; // se hace multiplica al cuadrado
//resultado = numero1**3; // se multiplica al cubo
//resultado = numero1**numero2; // se eleva 5 veces
//numero1++;
//resultado = numero1; // incremento
//resultado = numero1&numero2; // el resto de 10 / 5 =0


alert(resultado);*/

//----------operadores de asignacion---------

/*let numero = 10;
//numero += 5;
//numero -= 5;
//numero *= 5;
//numero /= 5;
//numero %= 6;
//numero **=2;// exponente


document.write(numero); */


//---------------concatencion-------------
//ejemplo 1
/*saludo = "¡hola pedro!";
pregunta = " ¿como estas?";

frase = saludo + pregunta;

document.write(frase);*/

//ejemplo 2
/*numero1 = 53;
numero2 = 8;
frase = "" + numero1 + numero2;
document.write(frase);*/

//funcion concat es un metodo de cadena si o si tiene que tener un string
//ejemplo 3
/*numero1 = "5";
numero2 = 8;
frase = numero1.concat(numero2);
document.write(frase);*/

//ejemplo 4
/*nombre = "juan esteban yepes";
//frase = "soy " + nombre + " y estoy caminando"
frase = `soy ${nombre} 
y estoy caminando`;  //`` para sacar esos signos ctrl + alt + }
document.write(frase);*/

//ejemplo 5
/*nombre = "juan esteban";
//frase = "mi nomre es 'juanes' y soy un crack"; // escape de comillas simple
frase = 'mi nomre es "juanes" y soy un crack'; // escape de comillas dobles
document.write(frase);*/

//------------operadores de comparacion-------------
// por lo general devuelven un booleano true o false
/*let numero = 23;
let numero2 = 2;
let texto = "23";
let texto1 = "texto 2";
// igualdadd
//document.write(numero == numero2);

//inegualdad (distintos)
//document.write(texto != texto1);

//identidad (para ver si el mismo tipo de dato)
//document.write(texto === numero);

//no identidad
//document.write(texto !== numero);

//mayor, mayorIgual, menor, menorIgual
document.write(numero > numero2);
document.write(numero >= numero2);
document.write(numero < numero2);
document.write(numero <= numero2);*/


//-----------------operadores logicos--------------
//ejemplo1
/*let valor = true;
let valor2 = true;

let resultado = valor && valor2;
let resultado2 = valor || valor2;
let resultado3 = !valor;

document.write(resultado);
document.write(resultado2);
document.write(resultado3);*/

//ejemplo2
/*num1 = 12;
num2 = 24;
afirmacion1 = num1 < num2 ;
afirmacion2 = num1 == num2;
document.write(!afirmacion2);*/

//-----------camel case-------------------
// holaComoEstas
// document.getElementById();
// decimeAlgunaCosa


//------------------Condicionales--------------
/*
nombre = "juanes"
if (nombre == "lucas") {
	alert("tu nombre es malardo");
}

else if (nombre == "pedro") {
	alert("tu nombre es buenardo");
} 

else{
	alert("tu nombre es otro");
}*/


//----------------Arrays------------------

/*let frutas = ["banana" ,"manzana" ,"pera",5,9,"pedro"];

document.write(frutas[5]);*/

//--------------Arrays asociativos---------------

/*let pc1 = {
	nombre: "daltopc",
	procesador: "Intel Core I7",
	ram: "16GB",
	espacio: "1TB"
};

pc2 = ["daltopc", "Intel Core I7", "16GB", "1TB"];

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nomre de mi pc es: <b>${nombre} </b><br>
		 el procesador es: <b>${procesador} </b><br>
		 la memoria ram es: <b>${ram}</b> <br>
		 el espacio en disco es de: <b>${espacio}</b> <br>`;

document.write(frase);*/


//------------Bucles e Iteracion--------------------
// while
//let numeroParaSumar = 0;
/*
while (numeroParaSumar < 10) {
	numeroParaSumar++;
	document.write(numeroParaSumar + "<br>");
}*/


//do while
/*do {
	document.write(numeroParaSumar + "<br>");
	numeroParaSumar++;
	
	
}

while(numeroParaSumar <= 6)*/

// break

/*while(numeroParaSumar < 1000){
	numeroParaSumar++;
	document.write(numeroParaSumar)
	if (numeroParaSumar == 10) {
		break;
	}
	
	
}

document.write(" FIN")*/


//for (inicilizacion, condicion, aumento o decremento)
/*for (let i = 0; i < 6; i++){
	document.write(i + "<br>");
}*/

// continue

/*for (let i=1; i <= 20; i++){
 		if (i == 12) {
 			continue;
 		}
 	document.write(i + "<br>");
}*/


// for in - for of
// in devuelve la posicion en la que se encuentra
/*let animales = ["gato", "perro", "dinosaurio"];
 //animales.edad = "20"; //opcional entra en poo
for(animal in animales){
	//document.write(animal + "<br>");
	document.write(animal + "<br>"); // para mostrar los elementos
}

document.write("<br>");
// of muestra los elementos 
for(animal of animales){
	document.write(animal + "<br>");
}

//document.write(animales.edad); // opcional de poo*/


// label
/*array1 = ["maria","josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];


forRancio: 
for(let array in array2){
	if(array == 2){

		for(let array of array1) {
			if(array == "maria"){
				//continue forRancio // para romper el array y no recorrerlo;
			}
			document.write(array + "<br>");

		}

	} else{
		document.write(array2[array]+ "<br>");
	}

}*/

//-------------Funciones-------------------
//ejemplo 1
/*function saludar(){

	respuesta = prompt("¡hola juanes! ¿como fue tu dia?")

if(respuesta == "bien"){
	alert("me alegro");
}else{
	alert("una pena");
}

}

saludar();
saludar();*/

//-------funcion con return----------
//ejemplo 2

/*function saludar() {
	alert("hola");
	return 3;
}

let saludo = saludar();

document.write(saludo);*/

//-----------parametros--------------
//ejemplo 1
/*function suma(num1, num2) {
	let res = num1 + num2;
	document.write(res);
	document.write("<br>");
}

suma(12,32);
suma(22,55);*/

//ejemplo2
/*function suma(num1, num2) {
	let res = num1 + num2;
	return res;
}

let resultado = suma(20,25);

document.write(resultado);*/

//ejemplo 3
/*function saludar(nombre) {
	let frase = `¡hola ${nombre}! ¿como estas?`;
	document.write(frase);
}

saludar("juanes");*/

//ejemplo 4
/*const saludar = function(nombre){
	let frase =  `¡hola ${nombre}! ¿como estas?`;
	document.write(frase);

}

saludar("juanes");*/

//-----------funciones flecha----------------
//ejemplo 1
/*const saludar = (nombre) =>{
	let frase =  `¡hola ${nombre}! ¿como estas?`;
	document.write(frase);
} 

saludar("juan");*/


//problemas a resolver
/* A) un joven afortunado logro ganar el primer premio de la loteria
exacto, estamos hablando del pre al que cofla le dio una mano, este 
pobre decide hacer una fiesta para festejar que salio de la pobreza con
este millonario compro una maquina que deja pasar solamente a los mayores
de edad, entre otras cosas.....

-dejar pasar solo a los mayores de edad
-la primer persona que entre despues de las 2 am, no paga
*/


// let free = false;

/*const validarCliente = (time)=>{
	let edad = prompt("¿cual es tu edad?");
	if (edad >= 18) {
		if (time >=2 && time < 7 && free == false) {
			alert("podes pasar gratis, sos la primera persona en entrar despues de las 2am");
			free = true;
		}else{
			alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entrada`);
		}
	}else{
		alert("mira papu, sos menor de edad por ende no vas a pasar, MAQUINA");
	}
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);*/

//problema2
/*
B)cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue
a dormir.. al otro dia comienzan las clases del ciclo basico de la universidad
(porque cofla quiere ser programador y se inscriio en la facultad de
ingenieria para estudiar desarrollo de software).
En su curso en total son 19 alumnos, pero surio un problema que complico un
poco a la facultad; se rompio el sistema de registro de asistencias y durante
los proximos 30 dias no se podran hacer registros de datos de ningun tipo, por
ende las clases no podran comenzar hasta que esto este solucionado.

-crear mini-sistema que nos permita registrar los alumnos que estan presentes(P)
y ausentes (A) en clase.
-pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro total presentes y ausentes)
-se puede tener maximo de 10% de ausencias por semestre, si se tiene mas aclarar que esta reprobado.
*/

/*let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

for(i =0; i < cantidad; i++){
	alumnosTotales[i] = [prompt("¿nombre del alumno" + (i+1)), 0]; // el 0 es numero de asistencias

}

const tomarAsistencia = (nombre,p)=>{
	let presencia = prompt(nombre);
	if(presencia == "p" || presencia =="P"){
		alumnosTotales[p][1]++;
	}
}

for(i =0; i < 30; i++){
	for (alumnos in alumnosTotales){
		tomarAsistencia(alumnosTotales[alumnos][0], alumnos)
	}
}

for(alumnos in alumnosTotales){
	let resultado = `${alumnosTotales[alumnos][0]}:<br>
	_________Presentes: <b>${alumnosTotales[alumnos][1]}<b> <br>
	_________Ausencias: <b>${ 30 - parseInt(alumnosTotales[alumnos][1])}<b>
	`;
	if( 30 - alumnosTotales[alumnos][1] > 18){
		resultado += "<b style= 'color:red'> REPROBADO POR INASISTENCIAS</b><br><br>";
	}else{
		resultado+= "<br><br>";
	}

	document.write(resultado);
}*/


//ejercicio 3 
//calculadora
/*
const sumar = (num1,num2) =>{
	return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2) =>{
	return parseInt(num1) - parseInt(num2);
}

const dividir = (num1,num2) =>{
	return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1,num2) =>{
	return parseInt(num1) * parseInt(num2);
}


alert("¿que operacion deseas realizar?");
operacion = prompt("1:suma, 2:resta, 3: division, 4:multiplicacion");

if (operacion == 1){
	let numero1 = prompt("primer numero para sumar");
	let numero2 = prompt("segundo numero para sumar");
	resultado = sumar(numero1,numero2);
	alert(`tu resultado es: ${resultado}`);
}

else if (operacion == 2){
	let numero1 = prompt("primer numero para restar");
	let numero2 = prompt("segundo numero para restar");
	resultado = restar(numero1,numero2);
	alert(`tu resultado es: ${resultado}`);
}

else if (operacion == 3){
	let numero1 = prompt("primer numero para dividir");
	let numero2 = prompt("segundo numero para dividir");
	resultado = dividir(numero1,numero2);
	alert(`tu resultado es: ${resultado}`);
}

else if (operacion == 4){
	let numero1 = prompt("primer numero para multiplicar");
	let numero2 = prompt("segundo numero para multiplicar");
	resultado = multiplicar(numero1,numero2);
	alert(`tu resultado es: ${resultado}`);
}

else{
	alert("no se ha encontrado la operacion");
}*/

//---------------POO(programacion orientada a objetos-------)




