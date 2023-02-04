function mostrar()
{

	var edad_usuario;
	var estadocivil_usuario;

	edad_usuario = document.getElementById("txtIdEdad").value;
	estadocivil_usuario = document.getElementById("estadoCivil").value;

	edad_usuario = parseInt(edad_usuario);


	if (edad_usuario < 18 && estadocivil_usuario != "Soltero")
	{
		alert("Eres muy chico para no ser soltero");
	}
		


}//FIN DE LA FUNCIÓN