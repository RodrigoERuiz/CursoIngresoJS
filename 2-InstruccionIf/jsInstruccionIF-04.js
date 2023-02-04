function mostrar()
{
	
	
	var edadUsuario 

	edadUsuario = document.getElementById("txtIdEdad").value;

	edadUsuario = parseInt(edadUsuario);
	
	if (edadUsuario >= 13 && edadUsuario <=17)
	{
		alert("Eres adolescente");
	}

}//FIN DE LA FUNCIÓN