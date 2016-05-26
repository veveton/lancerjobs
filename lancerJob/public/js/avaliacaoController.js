angular.module("angularApp").controller("avaliacaoController",function($scope,$http){
	$scope.nota: "";
	$scope.descricao: "";
	$scope.replica: "";
	$scope.valor = "";
	$scope.nomeUser= "";



$scope.salvarAvaliacao = function(){




};

$scope.listarUser = function(){
	//fazer chamada user
$http({
method:'GET',
url:'/'
})
.then(function successCallback(response) {
$scope.listaContato=response.data;
}, function errorCallback(response)	{
alert(response.data);
});

}

$scope.listarAvaliacao = function(){


	$http({
		method:'GET',
		url:'/listarAvaliacao'
	})
	.then(function successCallback(response) {
		$scope.nota=response.data;
	}, function errorCallback(response)	{
		alert(response.data);
});
	
	
	
