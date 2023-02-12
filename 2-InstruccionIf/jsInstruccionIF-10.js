function mostrar()
{
	
	var notaExamen;
	var mensaje;

	notaExamen = Math.random() * 10 + 1; 
	notaExamen = Math.floor(notaExamen);
	

	//notaExamen = parseFloat(notaExamen);

	alert(notaExamen);

	if(notaExamen < 4)
	{
		mensaje = "Vamos la próxima se puede";
	}

/*	solucion anterior
		else if (notaExamen >= 4 && notaExamen < 9)
		{
			alert("Aprobó");
		}
			else
			{
				alert("Excelente");
			}
*/

	else 	
	{
		if(notaExamen < 9 )
		{
			mensaje = "Aprobó";
		}	
			else
			{
				mensaje = "Excelente";
			}
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN