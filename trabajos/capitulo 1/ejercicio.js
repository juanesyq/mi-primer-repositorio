/* 3 chicos de 23 años perfectamente normales 
entran a una heladeria a comprar un helado pero hay un
problema: los precios no estan al lado de cada estante
con su respectivo helado.
Ellos quiren comprar el helado mas cara que puedan con la plata
que tienen, asi que.... veamos como podemos ayudarlos.

roberto tiene $1.5 usd
pedro tiene $1.7 usd
cofla tiene 3 usd

los precios de helados son los siguientes:
palito de helado de agua: $0.6 usd
palito de helado de crema: $1 usd
Bombon helado marca heladix: 1.6 usd
Bombon helado marca heladovich: 1.7 usd
Bombon helado marca helardo: 1.8 usd
potecito de helado con confites: $2.9 usd
pote de 1/4 kg : 2.9 usd

crear soluciones:

-pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan comprar
-si hay 2 o mas con el mismo precio, mostrar ambos.
-cofla quiere saber cuanto es el vuelto.

*/

dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroRoberto = prompt("cuanto dinero tienes roberto?");
dineroPedro = prompt("cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("cofla, comprate el helado de agua");
	alert(" y te sobran" + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 &&  dineroCofla < 1.6) {
	alert("cofla, comprate el helado de crema");
	alert(" y te sobran" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 &&  dineroCofla < 1.7) {
	alert("cofla, comprate el helado de heladix");
	alert(" y te sobran" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 &&  dineroCofla < 1.8) {
	alert("cofla, comprate el helado de heladovich");
	alert(" y te sobran" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert("cofla, comprate el helado de helardo");
	alert(" y te sobran" + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9) {
	alert("cofla, comprate el helado de confites o el pote de 1/4 kg");
	alert(" y te sobran" + (dineroCofla - 2.9));
}

else {
	alert("lo siento cofla, no te alcanza para ningun helado");
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("Roberto, comprate el helado de agua");
}
else if (dineroRoberto >= 1 &&  dineroRoberto< 1.6) {
	alert("Roberto, comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 &&  dineroRoberto < 1.7) {
	alert("Roberto, comprate el helado de heladix");
}
else if (dineroRoberto >= 1.7 &&  dineroRoberto < 1.8) {
	alert("Roberto, comprate el helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert("Roberto, comprate el helado de helardo");
}
else if (dineroRoberto >= 2.9) {
	alert("Roberto, comprate el helado de confites o el pote de 1/4 kg");
}

else {
	alert("lo siento roberto, no te alcanza para ningun helado");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("pedro, comprate el helado de agua");
}
else if (dineroPedro >= 1 &&  dineroPedro < 1.6) {
	alert("pedro, comprate el helado de crema");
}
else if (dineroPedro >= 1.6 &&  dineroPedro < 1.7) {
	alert("pedro, comprate el helado de heladix");
}
else if (dineroPedro >= 1.7 &&  dineroPedro < 1.8) {
	alert("pedro, comprate el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert("pedro, comprate el helado de helardo");
}
else if (dineroPedro >= 2.9) {
	alert("pedro, comprate el helado de confites o el pote de 1/4 kg");
}

else {
	alert("lo siento pedro, no te alcanza para ningun helado");
}

