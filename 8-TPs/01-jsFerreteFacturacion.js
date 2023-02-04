/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

//Rodrigo Ruiz

function Sumar () 
{
	var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var resultado;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    primerPrecio = parseFloat(primerPrecio);
    segundoPrecio = parseFloat(segundoPrecio);
    tercerPrecio = parseFloat(tercerPrecio);

    resultado = primerPrecio + segundoPrecio + tercerPrecio;

    alert("La suma de los tres productos es: " + resultado);
}
function Promedio () 
{
	
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var resultadoSuma;
    var promedio;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    primerPrecio = parseFloat(primerPrecio);
    segundoPrecio = parseFloat(segundoPrecio);
    tercerPrecio = parseFloat(tercerPrecio);

    resultadoSuma = primerPrecio + segundoPrecio + tercerPrecio;
    promedio = resultadoSuma / 3;
   
    alert ("El promedio es: " + promedio);

}

function PrecioFinal () 
{
    
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var precioFinal;
    var iva;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;
    iva = 1.21;

    primerPrecio = parseFloat(primerPrecio);
    segundoPrecio = parseFloat(segundoPrecio);
    tercerPrecio = parseFloat(tercerPrecio);

    precioFinal = (primerPrecio + segundoPrecio + tercerPrecio) * iva;
    
    alert ("El precio final: " + precioFinal);

	

}