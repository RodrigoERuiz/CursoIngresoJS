/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var sumandoUno;			
	var sumandoDos;
	var resultado;														//Declaración varaibles

	sumandoUno = document.getElementById("txtIdNumeroUno").value;
	sumandoDos = document.getElementById("txtIdNumeroDos").value;		//Almacenamiento del valor input en las dos

	sumandoUno = parseInt(sumandoUno);									
	sumandoDos = parseInt(sumandoDos);									//Conversión a entero

	resultado = sumandoUno + sumandoDos;								//Asignación de resultado de la operación a la variable
	alert("El resultado es: "+resultado);								//Se imprime por pantalla el valor de la variable "resultado"
}

function restar()
{	
	var minuendo;
	var sustraendo;
	var resultado;

	minuendo = document.getElementById("txtIdNumeroUno").value;
	sustraendo = document.getElementById("txtIdNumeroDos").value;

	minuendo = parseInt(minuendo);
	sustraendo = parseInt(sustraendo);

	resultado = minuendo - sustraendo;
	alert("El resultado es: " + resultado);
	
}

function multiplicar()
{ 

	var factorA;
	var factorB;
	var producto;

	factorA = document.getElementById("txtIdNumeroUno").value;
	factorB = document.getElementById("txtIdNumeroDos").value;

	factorA = parseInt(factorA);
	factorB = parseInt(factorB);

	producto = factorA * factorB;
	alert("El producto de la multiplicación es: " + producto);
	
}

function dividir()
{
	
	var dividendo;
	var divisor;
	var cociente;

	dividendo = document.getElementById("txtIdNumeroUno").value;
	divisor = document.getElementById("txtIdNumeroDos").value;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	cociente = dividendo / divisor;
	alert("El cociente de la división es: " + cociente);




}

