function mostrar()
{
	notaExamen=Math.floor(Math.random()*10);
	alert(notaExamen);
	if(notaExamen<4)
	{
		alert("Vamos la próxima se puede");
	}
		else if (notaExamen>=4 && notaExamen<9)
		{
			alert("Aprobó");
		}
			else
			{
				alert("Excelente");
			}
}//FIN DE LA FUNCIÓN