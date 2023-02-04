/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero; 														
	var segundoNumero;														
	var resultado;															//Declaración de variables

	primerNumero = document.getElementById("txtIdNumeroUno").value;	
	segundoNumero = document.getElementById("txtIdNumeroDos").value;		//Asiganción de los valores de los textBox a las varaibles que actuan como sumandos	

	primerNumero = parseInt(primerNumero);										
	segundoNumero	= parseInt(segundoNumero);								//paso valor de las variables a entero
	
	resultado = primerNumero + segundoNumero;								//Asigno a la variable "resultado" el valor de la suma de los sumandos
	alert("El resultado de la suma es: "+resultado);						//Imprimo por pantalla el valor de "resultado"
}

