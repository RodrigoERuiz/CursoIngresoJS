/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/


function validacion()
{
	return("utn750")
}




function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	while (claveIngresada/=validacion())
	{
		alert("clave incorrecta");
		claveIngresada = prompt("ingrese el número clave.");
	}
	
}//FIN DE LA FUNCIÓN
