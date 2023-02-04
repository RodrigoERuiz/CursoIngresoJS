function mostrar()
{
	var edadUsuario 
	var resultado;

	edadUsuario = document.getElementById("txtIdEdad").value;
	resultado = "Es menor de edad";

	if (edadUsuario >= 18)
	{
		resultado = "Es mayor de edad";
	}
		alert(resultado);
}