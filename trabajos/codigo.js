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
let numeroParaSumar = 0;
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

//comentario