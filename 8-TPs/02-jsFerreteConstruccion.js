/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;
    var metrosDeAlambre;
    var cantidadDeAlambres;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;
    cantidadDeAlambres = 3;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);
    
    metrosDeAlambre =  ((largoTerreno*2) + (anchoTerreno*2)) * cantidadDeAlambres;

    alert("Los metros de alambres a cortar es de: " + metrosDeAlambre + " metros");


}
function Circulo () 
{
	var variablePi;
    var variableRadio; 
    var cantidadDeAlambres;
    var alambreAComprar;
    
    variablePi = Math.PI;
    variableRadio = document.getElementById("txtIdRadio").value;
    cantidadDeAlambres = 3;

    variableRadio = parseFloat(variableRadio);

    alambreAComprar =  2 * variablePi * variableRadio * 3;

    alert("El largo de alambre a comprar es " + alambreAComprar + " metros")



}
function Materiales () 
{
    
    var bolsasDeCal;
    var bolsasDeCemento;
    var largoTerreno;
    var anchoTerreno;
    var metroCuadradosDeTerreno;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    metroCuadradosDeTerreno = largoTerreno * anchoTerreno;
    bolsasDeCal = metroCuadradosDeTerreno * 3;
    bolsasDeCemento = metroCuadradosDeTerreno * 2;

    alert("para " + metroCuadradosDeTerreno + "metros cuadrados de terreno se necesitan " + bolsasDeCal + " bolsas de cal y " + bolsasDeCemento + " bolsas de cemento"  );


}