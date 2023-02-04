/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

//ºC = (ºF-32) ÷ 1.8.
//ºF = ºC x 1.8 + 32

function FahrenheitCentigrados () 
{
	var temperaturaIngresada;
    var conversion;

    temperaturaIngresada = document.getElementById("txtIdTemperatura").value;
    conversion = (temperaturaIngresada - 32) / 1.8;

    temperaturaIngresada = parseFloat(temperaturaIngresada);
    conversion = conversion.toFixed(1); //Limita el valor de conversión a un solo decimal.

    alert(temperaturaIngresada + "° Fahrenheit son: "+ conversion + "°C" );

}

function CentigradosFahrenheit () 
{
    var temperaturaIngresada;
    var conversion;

    temperaturaIngresada = document.getElementById("txtIdTemperatura").value;
    conversion = (temperaturaIngresada * 1.8) + 32;

    temperaturaIngresada = parseFloat(temperaturaIngresada);
    conversion = conversion.toFixed(1); //Limita el valor de conversión a un solo decimal.

    alert(temperaturaIngresada + "° Centígrados son: "+ conversion + "°F" );
}
