angular.module("angularApp").controller("rankingController",function($scope,$http){

	

$scope.listarRanking = function(){//ADICIONA PROJETO

	$http({
		method:'GET',
		url:'/listarRanking'
	})
	$http({
		method: 'GET',
		url:'/getTelefones'
	})
	.then(function sucessCallback(response){//CASO TRUE
		$scope.todosTelefones = response.data;//JOGA NA LISTA DE TODOS OS TELEFONES
		console.log($scope.todosTelefones);
		//$scope.indexEditar = null;
		
		}
		,function errorCallback(response){//CASO FALSE
			alert(response.data);
		});	
	
};
	
$scope.listarProjeto = function(){//ADICIONA PROJETO


	$http({
		method:'GET',
		url:'/listarProjeto'
	})
	.then(function successCallback(response) {
		if($scope.projetoList=response.data==""){
			alert("Nenhum projeto cadastrado!");
		
	}else{$scope.projetoList=response.data;}
		
	}, function errorCallback(response)	{
		alert(response.data);
	});	
	
	};
$scope.listarUser = function(){
										//fazer chamada user
	$http({
		method:'GET',
		url:'/listarUser'
	})
	.then(function successCallback(response) {
		$scope.userList=response.data;
	}, function errorCallback(response)	{
		alert(response.data);
	});
	
}
//$scope.listarUser = function()

$scope.removerProjeto = function(id){
		$http.delete("/removerProjeto/"+id) //eclipse nao reconhece delete
		.then(
			function(response){
				$scope.listarProjeto();
			},
			function(response){
				alert(response.data);
			}
		);
		
		}

	
});