/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var app = angular.module('FerreteIluminacion', []);

app.controller('Controllerilumination', function($scope){

$scope.cantLamparas="";
$scope.marca="";
$scope.precioDesc="";

$scope.CalcularPrecio=function(){
var precioBruto = 35 * parseInt($scope.cantLamparas);


switch(parseInt($scope.cantLamparas))
{
	case 1:
	case 2:
		$scope.precioDesc = precioBruto;	
	break;
	case 3:
		if($scope.marca == "ArgentinaLuz"){
			$scope.precioDesc = precioBruto - precioBruto*0.15 ;	
		}else if($scope.marca == "FelipeLamparas"){
			$scope.precioDesc = precioBruto - precioBruto*0.1 ;
		}else{
			$scope.precioDesc = precioBruto - precioBruto*0.05 ;
		}
	break;
	case 4:
		$scope.precioDesc = precioBruto;	
	break;
	case 5:
		$scope.precioDesc = precioBruto;	
	break;   


}

  }


});