/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//Desclaración de variables
	var dividendo;
	var divisor;
	var resto;																		

	//Asignación de variables
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;					

	//conversión a float
	dividendo = parseFloat(dividendo);
	divisor	 = parseFloat(divisor);

	//asignación a la variable resto el resultado de la operación
	resto = dividendo % divisor;

	alert("el resto es: " + resto);

}
