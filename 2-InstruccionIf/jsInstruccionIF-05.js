function mostrar()
{
	var edadUsuario;

	edadUsuario = document.getElementById("txtIdEdad").value;

	edadUsuario = parseInt(edadUsuario);

	if (edadUsuario < 12 || edadUsuario > 18)
	{
		alert("No es adolescente");
	}



}//FIN DE LA FUNCIÓN