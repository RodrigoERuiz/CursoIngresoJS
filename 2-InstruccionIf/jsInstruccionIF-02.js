
function mostrar()
{
	
	var edadUsuario;

	edadUsuario = document.getElementById("txtIdEdad").value;
	edadUsuario = parseInt(edadUsuario);

	if(edadUsuario>18)
	{
		alert("La persona es mayor de edad");
	}

}//FIN DE LA FUNCIÓN