
function mostrar()
{

	var edad;
	var resultado;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (edad > 17)
	{
		resultado = "Eres adulto";
	}
	else
	{
		if(edad < 13)
		{
			resultado = "Eres un niño";
		}
		else
		{
			resultado = "eres adolescente";
		}
	}
		alert(resultado);

}//FIN DE LA FUNCIÓN