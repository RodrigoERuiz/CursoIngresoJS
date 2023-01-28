function mostrar()
{
	/*Solucion con SWITCH
	let edad_persona=prompt("Ingrese su edad: ");
	switch(edad_persona)
	{
		case 1:(edad_person<=15)
		{
			alert("Eres un/a niño/a");
			break;
		}
			case 2:(edad_persona<=18)
			{
				alert("Eres adolescente");
				break;
			}
				case 3:(edad_persona>18)
				{
					alert("Eres un adulto")
				}
	}*/



	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let resultado="Eres un niño";
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