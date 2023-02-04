/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

//Rodrigo Ruiz

function mostrarAumento()
{
	//Declaración variables
	var importe;
	var descuento;

	//Asignación de las variables
	importe = document.getElementById("txtIdImporte").value;
	//descuento = 0.75;
	descuento = prompt("Ingrese el porcentaje de descuento: ")

	//Transfomación a numero entro
	importe = parseInt(importe);

	//Aplico el descuento y lo muestro por el inputBox "resultado"
	//document.getElementById("txtIdResultado").value = importe * descuento;
	
	document.getElementById("txtIdResultado").value = importe - ((descuento * importe) / 100);
}
