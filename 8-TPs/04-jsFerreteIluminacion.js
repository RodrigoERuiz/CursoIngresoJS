/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

    //Rodrigo Ruiz

 */
function CalcularPrecio () 
{
    var precioinicialLamparas;
    var cantidadLamparasCompradas;
    var marca;
    var porcentajeDescuento;
    var precioFinalLamparas;
    var porcentajeIngresosBrutos;
    var netoIngresosBrutos;

    precioinicialLamparas = 35;
    cantidadLamparasCompradas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    porcentajeDescuento = 1;
    netoIngresosBrutos = 0;

    cantidadLamparasCompradas = parseInt(cantidadLamparasCompradas);

    //A Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%
    if (cantidadLamparasCompradas > 5)
    {
        porcentajeDescuento = 0.5;
    }

    //B Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%
    else
    {
        if(cantidadLamparasCompradas == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentajeDescuento = 0.6;
            }
            else
            {
                descuento = 0.70;
            }
        }
         //C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%
        if(cantidadLamparasCompradas ==4)
        {  
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentajeDescuento = 0.75;
            }
            else
            {
                porcentajeDescuento = 0.80;
            }
        }
        //Si compra 3  lamparas "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%
        if(cantidadLamparasCompradas == 3)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentajeDescuento = 0.75;
            }
            else 
            {
                if(marca == "FelipeLamparas")
                {
                    porcentajeDescuento = 0.8;
                }
                else
                {
                    porcentajeDescuento = 0.95;
                }

            }
        }

    }

     //E Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
     //”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
    
    precioFinalLamparas = precioinicialLamparas * cantidadLamparasCompradas * porcentajeDescuento;

    if(precioFinalLamparas > 120)
    {
        porcentajeIngresosBrutos = 10;
        netoIngresosBrutos = (porcentajeIngresosBrutos * precioFinalLamparas) / 100;
    }

    alert("Usted pagó: $" + netoIngresosBrutos + " de ingresos brutos");
    document.getElementById("txtIdprecioDescuento").value = (precioinicialLamparas * cantidadLamparasCompradas * porcentajeDescuento) + netoIngresosBrutos ;


}                   