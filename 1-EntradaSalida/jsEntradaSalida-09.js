/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

//Rodrigo Ruiz

function mostrarAumento()
{
	//Declaración varaibles
	var sueldo;
	var aumento;

	//Asignacion del valor del input a la varaible "sueldo"
	sueldo = document.getElementById("txtIdSueldo").value;
	aumento = prompt("Ingrese el porcentaje de aumento");

	//Conversion del valor de la variable "sueldo" a float
	sueldo = parseFloat(sueldo);

	//Asignación del resultado del sueldo con su respectivo aumento  al valor del inputBox resultado
	document.getElementById("txtIdResultado").value = ((aumento * sueldo) /100) + sueldo ;


}
