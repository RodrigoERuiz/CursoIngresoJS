function mostrar()
{

	let edad_usuario =parseInt(document.getElementById("txtIdEdad").value)
	let estadocivil_usuario = document.getElementById("estadoCivil").value
	if (edad_usuario<18 && estadocivil_usuario!="soltero")
	{
		alert("Eres muy chico para no ser soltero");
	}
		


}//FIN DE LA FUNCIÓN