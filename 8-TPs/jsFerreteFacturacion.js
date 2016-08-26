/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var app = angular.module('ferreteFacturacion', []);

app.controller('ControladorFacturacion', function($scope){

$scope.test="Hola Prima de Lucas";

$scope.PrecioUno="";
$scope.PrecioDos="";
$scope.PrecioTres="";
$scope.Sumar=function(){
	$scope.resultado = parseInt($scope.PrecioUno) + parseInt($scope.PrecioDos) + parseInt($scope.PrecioTres);

  }

  $scope.Promedio=function(){
	$scope.resultado = (parseInt($scope.PrecioUno) + parseInt($scope.PrecioDos) + parseInt($scope.PrecioTres))/ 3;

  }


});