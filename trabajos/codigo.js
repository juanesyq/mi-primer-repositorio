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

// conceptos basicos de POO
// clase, objeto, atributo, metodo, constructor, instanciacion
/*class animal {
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `soy ${this.especie}, tengo ${this.edad} años
		y soy de color ${this.color}`;
	}

	verInfo(){
		document.write(this.info + "<br>")
	}
}



let perro = new animal("perro",5,"marron");
let gato = new animal("gato",2,"negro");
let pajaro = new animal("pajaro",1,"verde");

// document.write(perro.info + "<br>")
// document.write(gato.info + "<br>")
// document.write(pajaro.info + "<br>")


perro.verInfo();
gato.verInfo();
pajaro.verInfo();*/

//caracteristicas de la POO
//abstaccion, modularidad, encapsulamiento, polimorfismo

/*class Animal {
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `soy ${this.especie}, tengo ${this.edad} años
		y soy de color ${this.color}`;
	}

	verInfo(){
		document.write(this.info + "<br>")
	}
	
}

class Perro extends Animal{
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = raza
	}
	ladrar(){
		alert("¡Waw!");
	}
}


let perro = new Perro("perro",5,"marron", "doberman");
let gato = new Animal("gato",2,"negro");
let pajaro = new Animal("pajaro",1,"verde");

perro.ladrar();
gato.verInfo();
pajaro.verInfo();*/

//metodos estaticos - metodos acesores

/*class Animal {
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `soy ${this.especie}, tengo ${this.edad} años
		y soy de color ${this.color}`;
	}

	verInfo(){
		document.write(this.info + "<br>")
	}
	
}

class Perro extends Animal{
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = null;
	}
	set setRaza(newName){
		this.raza = newName
	}

	get getRaza(){
		return this.raza;
	}
	
}


const perro = new Perro("perro",5,"marron", "doberman");
const gato = new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1,"verde");

perro.setRaza = "pedro";
document.write(perro.getRaza)*/

//ejercicio de POO
/*Problema A
confla entro a una tienda que vende celulares porque le parecio bastante bueno comprarse un nuevo celular
de todos los modelos que hay disponibles en esa tienda, a cofla le llamaron la atencion 3 telefonos especificamente
el problema es que ningun vendedor sabe nada al respecto entonces no pueden recomendarle absolutamente nada... pero claro:
el antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos,
ahi entramos nosotros

CREAR SOLUCIONES
-crear un sistema para mostrarle a cofla las particularidades de los 3 celulares.
-cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria ram
-cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar
*/

/*class Celular{
	constructor(color,peso,rdp,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.resolucionPantalla = rdp;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;
	}
	//una opcion de prender y apagar
	/*prender(){
		if(this.encendido == false){
			alert("prendiendo");
			encendido = true;
		}else{
			alert("el celular ya esta encendido")
		}
	}

	apagar(){
		if(this.encendido == true){
			alert("celular apado");
			encendido = false;
		}else{
			alert("el celular ya esta apagado")
		}
	}*/

	//los dos en una sola funcion
	/*presionarBotonEncendido(){
		if(this.encendido == false){
			this.encendido = true
			alert("celular prendido");
		}else{
			alert("celular apagado")
			this.encendido = false
		}
	}

	reiniciar(){
		if(this.encendido == true){
			alert("reiniciando celular");
		}else{
			alert("el celular esta apagado")
		}
	}

	tomarFotos(){
		alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
	}

	grabarVideo(){
		alert(`grabando video en ${this.resolucionDeCamara}`)
	}

	mobileInfo(){
		return `
		Color: <b>${this.color}</b></br>
		peso: <b>${this.peso}</b></br>
		tamaño: <b>${this.resolucionPantalla}</b></br>
		Resolucion de camara: <b>${this.resolucionDeCamara}</b></br>
		Resolucion de video: <b>${this.resolucionDeCamara}</b></br>
		Memoria Ram: <b>${this.memoriaRam}</b></br>`
	}
}

celular1 = new Celular("rojo","150g",5,"HD", "1GB");
celular2 = new Celular("negro","155g",5.4,"full HD", "2GB");
celular3 = new Celular("blanco","146g",5.9,"full HD", "2GB");

document.write(`
	${celular1.mobileInfo()} </br>
	${celular2.mobileInfo()} </br>
	${celular3.mobileInfo()} </br>`)
// celular1.presionarBotonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();*/

//problema B
/* confla no esta satisfecho con los celulares asi que decide ir a la seccion de celulares de alta gama, donde va a poder
encontrar los celularesmas caros del lugar, asi que al entrar io dos celulares que le encantaron, estos 2 celulares de alta
gama pueden hacer todo lo que podian hacer los 3 anteriores pero tienen mejores caracteristicas y ademas pueden grabar en
camara super lenta, tiene reconcimiento facial y una camara extra.

CREAR SOLUCIONES

-implementar todas estas cualidades en los celulares de alta gama
*/

/*class Celular{
	constructor(color,peso,rdp,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.resolucionPantalla = rdp;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;
	}
	

	//los dos en una sola funcion
	presionarBotonEncendido(){
		if(this.encendido == false){
			this.encendido = true
			alert("celular prendido");
		}else{
			alert("celular apagado")
			this.encendido = false
		}
	}

	reiniciar(){
		if(this.encendido == true){
			alert("reiniciando celular");
		}else{
			alert("el celular esta apagado")
		}
	}

	tomarFotos(){
		alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
	}

	grabarVideo(){
		alert(`grabando video en ${this.resolucionDeCamara}`)
	}

	mobileInfo(){
		return `
		Color: <b>${this.color}</b></br>
		peso: <b>${this.peso}</b></br>
		tamaño: <b>${this.resolucionPantalla}</b></br>
		Resolucion de camara: <b>${this.resolucionDeCamara}</b></br>
		Resolucion de video: <b>${this.resolucionDeCamara}</b></br>
		Memoria Ram: <b>${this.memoriaRam}</b></br>`
	}
}

class CelularAltaGama extends Celular{
	constructor(color,peso,rdp,rdc,ram,rdce){
		super(color,peso,rdp,rdc,ram);
		this.resolucionDeCamaraExtra = rdce;
	}
	grabarVideoLento(){
		alert("estas grabando en camara lenta");
	}

	reconocimientoFacial(){
		alert("vamos a iniciar un reconocimiento facial");
	}
	infoAltaGama(){
		return this.mobileInfo() + `resolucion de camara extra: ${this.resolucionDeCamaraExtra}`;
	}
}

celular1 =  new CelularAltaGama("rojo","130g", "5.2", "4K", "3GB", "FULL HD");
celular2 = new CelularAltaGama("rojo","142g", "6", "4K", "4GB", "HD");
// celular1 = new Celular("rojo","150g",5,"HD", "1GB");
// celular2 = new Celular("negro","155g",5.4,"full HD", "2GB");
// celular3 = new Celular("blanco","146g",5.9,"full HD", "2GB");

document.write(`
	${celular1.infoAltaGama()} </br></br>
	${celular2.infoAltaGama()} </br>`)
// celular1.presionarBotonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();*/

//problema C
/*
cofla ya tiene su nuevo celular y ahora esta mirando las aplicaciones del play store ya que quiere juar juegos que sean
muy populares, que tengan buena puntuacion y que pesen poco, pero las 7 apps que llamaron su atencion son un tanto similares
y sabe que si se descarga todas, probablemente juegue con todas, pero el se va a descargar solo 2 para tener perdidas
innecesarias de tiempo jugando juegos de su celular, pero el problema viene cuando no uede decidirse cual de todas estas
aplicaciones es la que va a descargar.

CREAR SOLUCIONES

-crear un sistema que ayude a cofla a decidir cual app descargar
-la informacion de los instaladores debe contener la cantidad de descargas y la puntuacion y el peso
-las Apps se deben poder instalar, abrir, cerrar y desinstalar.
*/

/*class App{
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}

	abrir(){
		if(this.iniciada == false && this.instalada == true){
			this.iniciada = true;
		alert("app encendida");
		}
	}

	cerrar(){
		if(this.iniciada == true && this.instalada == true){
			this.iniciada = false;
		alert("app cerrada");
		}
	}

	instalar(){
		if(this.instalada == false){
			this.instalada = true;
		alert("app instalada");
		}
	}

	desinstalar(){
		if(this.instalada == true){
			this.instalada = false;
		alert("app desinstalada correctamente");
		}
	}

	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b></br>
		Puntuacion: <b>${this.puntuacion}</b></br>
		Peso: <b>${this.peso}</b></br>`
	}

}

app = new App("16.000", "5 estrellas", "900mb");
app2 = new App("1.000", "4 estrellas", "400mb");
app3 = new App("6.000", "4.5 estrellas", "100mb");
app4 = new App("23.000", "4.8 estrellas", "1gb");
app5 = new App("900", "5 estrellas", "250mb");
app6 = new App("17", "3.7 estrellas", "522mb");
app7 = new App("42.981", "2.9 estrellas", "723mb");



document.write(`
	${app.appInfo()} </br>
	${app2.appInfo()} </br>
	${app3.appInfo()} </br>
	${app4.appInfo()} </br>
	${app5.appInfo()} </br>
	${app6.appInfo()} </br>
	${app7.appInfo()} </br>
	`)
// app.appInfo();
// app2.appInfo();
// app3.appInfo();
// app4.appInfo();
// app5.appInfo();
// app6.appInfo();
// app7.appInfo();
// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();*/

//----------------Metodos de cadena----------------
// concat es para concatener otras cadenas
/*let cadena = "cadena de prueba";
let cadena2 = " cadena 2"
resultado = cadena.concat(cadena2);

document.write(resultado);*/

//verifica que una cadena empieza con la otra
/*let cadena = "cadena de prueba";
let cadena2 = "cadena"
resultado = cadena.startsWith(cadena2);

document.write(resultado);*/


//verifica que una cadena termine con la otra
/*let cadena = "cadena de prueba";
let cadena2 = "prueba"
resultado = cadena.endsWith(cadena2);

document.write(resultado);*/

//verifica que cualquier oracion se identica a la otra cadena
/*let cadena = "cadena de prueba";
let cadena2 = "de"
resultado = cadena.includes(cadena2);

document.write(resultado);*/


//nos da la posicion de la palabra (tira un numero)
/*let cadena = "cadena de prueba";
let cadena2 = "prueba"
resultado = cadena.indexOf(cadena2);

document.write(resultado);*/


//encuentra la posicion de atras para adelante
/*let cadena = "cadena de prueba tarado tarado tarado";
let cadena2 = "tarado"
resultado = cadena.lastIndexOf(cadena2);

document.write(resultado);*/


//rellena la cadena con una nueva cadena al principio
/*let cadena = "abc";
let cadena2 = ""
resultado = cadena.padStart(10,"12");

document.write(resultado);*/

//rellena la cedena con una nueva cadena al final
/*let cadena = "cadena";
let cadena2 = ""
resultado = cadena.padEnd(10, "1");

document.write(resultado);*/


//para repetir las cadenas varias veces
/*let cadena = "123 ";
let cadena2 = ""
resultado = cadena.repeat(10);

document.write(resultado);*/


//divide la cadena como le pedimos
/*let cadena = "hola como estas";
//let cadena2 = " cadena 2"
resultado = cadena.split(" ");

document.write(resultado[0]);*/


//nos retorna un pedazo de la oracion de la cadena
/*let cadena = "ABCDEFG";
resultado = cadena.substring(0,2);

document.write(resultado);*/

//convierte la cadena en minuscula
/*let cadena = "ABCDEFG";
resultado = cadena.toLowerCase();
document.write(resultado);*/


//conviernte la cadena en mayuscula
/*let cadena = "cadena de prueba";
resultado = cadena.toUpperCase();

document.write(resultado);*/

//devuelve una cadena conertida a string
/*let cadena = 50;
let resultado = cadena.toString();

document.write(2 * resultado);*/

//elimina los espacios en blanco al comienzo de una cadena
/*let cadena = "   pedro   ";
//let resultado = cadena.trim();
//let resultado = cadena.trimStart();
//let resultado = cadena.trimEnd();
document.write(resultado.length);*/


//--------------metodos de Arrays (transformadores)------------

//elimina el ultimo elemento de un array y lo devuelve
/*let nombre = ["pedro", "maria", "jorge"];
document.write(nombre + "</br>");
let resultado = nombre.pop()
document.write(resultado + "</br>");
document.write(nombre);*/


//elimina el primer elemento de un array y lo devuelve
/*let nombre = ["pedro", "maria", "jorge"];
document.write(nombre + "</br>");
let resultado = nombre.shift()
document.write(resultado + "</br>");
document.write(nombre);*/

//agrega un nuevo elemento a un array al final
/*let nombre = ["pedro", "maria", "jorge"];
document.write(nombre + "</br>");
let resultado = nombre.push("juancito")
document.write(nombre);*/


//invierte el orden de una array
/*let nombre = ["pedro", "maria", "jorge"];
document.write(nombre + "</br>");
let resultado = nombre.reverse()
document.write(resultado + "</br>");
document.write(nombre);*/


//agrega datos en un array al principio
/*let numero = [1,2,3,4];
document.write(numero + "</br>");
let resultado = numero.unshift(0)
document.write(resultado + "</br>");
document.write(numero);*/


//ordena los elementos de un array localmente y devuelve el array ordenado
/*let numero = ["abecedario", "manzana", "pedro", "dedo", "bobo"];
document.write(numero + "</br>");
let resultado = numero.sort()
document.write(resultado + "</br>");
document.write(numero);*/


// cambia el contenido de un array eliminando elementos existentes y/o aregando nuevos elementos
/*let numero = ["abecedario", "manzana", "pedro", "dedo", "bobo"];
document.write(numero + "</br>");
let resultado = numero.splice(0,1, "roberto", "gustavo", "maximo")
document.write(resultado + "</br>");
document.write(numero);*/


//--------metodos arrays (accesores)------------

//une todos los elementos de una matriz en una cadena y la devuelve
/*let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"];
document.write(numeros + "</br>");
let resultado = numeros.join("<br>elemento: ") //convierte en cadena de texto
document.write("elemento: " + resultado)*/


//devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin
/*let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"];
document.write(numeros + "</br>");
let resultado = numeros.slice(0,-2)
document.write(resultado)*/

//funcion filter y forEach funcionan igual
/*let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"];
let resultado = numeros.filter(numero => numero.length > 5)
document.write(resultado)*/


//----------objeto math - basico-------

//numero = Math.sqrt(25) // raiz cuadrada;
//numero = Math.cbrt(27); // raiz cubica
//numero = Math.max(4,1,12,63,243,90); // numero maximo
//numero = Math.min(4,1,12,63,243,90); // numero minimo
//numero = Math.random(); // numero aleatoria entre 0 y 1
//numero = Math.random()*100 // numero aleatorio entre 0 y 100;
 /*let numero = Math.random()*100
numero = Math.round(numero);*/
/*let numero = Math.fround(9.8)
document.write(numero);*/

//video 6:21:24