function mostrar()
{
	var edadUsuario;

	edadUsuario = document.getElementById("txtIdEdad").value;

	edadUsuario = parseInt(edadUsuario);

	if (edadUsuario >= 18)
	{
		alert("Eres mayor de edad");
	}



}//FIN DE LA FUNCIÓN