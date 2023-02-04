
function mostrar()
{
	/*
	//Solución con SWITCH

	var edad_persona;
	
	edad_persona = prompt("Ingrese su edad: ");

	edad_persona = parseInt(edad_persona);

	switch(edad_persona)
	{
		case nino:(edad_persona<=15)
		{
			alert("Eres un/a niño/a");
			break;
		}
			case adolescente:(edad_persona<=18)
			{
				alert("Eres adolescente");
				break;
			}
				case adulto:(edad_persona>18)
				{
					alert("Eres un adulto")
				}
	}
}
*/

	var edad;
	var resultado;

	edad = document.getElementById("txtIdEdad").value;
	resultado = "Eres un niño";

	edad = parseInt(edad);

	if (edad>=13 && edad<=18)
	{
		resultado="Eres adolescente";
	}
		if (edad>18)
		{
			resultado="Eres adulto";
		}
	alert(resultado);



}//FIN DE LA FUNCIÓN