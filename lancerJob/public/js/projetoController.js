angular.module("angularApp").controller("projetoController",function($scope,$http){
	$scope.nomeproj = "";
	$scope.horas = "";
	$scope.prazofinal = "";
	$scope.categoria = "";
	$scope.requisitos = "";
	$scope.nivel = "";
	$scope.prioridade = "";
	$scope.descricao = "";
	$scope.valor = "";
	$scope.nomeUser= "";



$scope.registrar = function(){//ADICIONA PROJETO


		var usuario = {nomeproj:$scope.nomeproj,horas:$scope.horas,prazofinal:$scope.prazofinal,categoria:$scope.categoria,requisitos:$scope.requisitos,nivel:$scope.nivel,prioridade:$scope.prioridade,descricao:$scope.descricao,valor:$scope.valor};//PEGA O VALOR DO CAMPO
		$http.post("/addProjeto",usuario, {
			headers:{ 'Content-Type' : 'application/json' }
		})
		.then(
				function(response){//CASO TRUE LIMPA E LISTA

					$scope.nomeproj = "";
					$scope.horas = "";
					$scope.prazofinal = "";
					$scope.categoria = "";
					$scope.requisitos = "";
					$scope.nivel = "";
					$scope.prioridade = "";
					$scope.descricao = "";
					$scope.valor = "";

					alert("Projeto inserido com Sucesso!")

				},
				function(response){//CASO DE ERRO
					alert(response.data);
				}
		);
		/**/

	};
	
$scope.listarProjeto = function(){//ADICIONA PROJETO


	$http({
		method:'GET',
		url:'/listarProjeto'
	})
	.then(function successCallback(response) {
		if($scope.listaContato=response.data==""){
			alert("Nenhum projeto cadastrado!");
		
	}else{$scope.listaContato=response.data;}
		
	}, function errorCallback(response)	{
		alert(response.data);
	});	
	
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
$scope.listarUser = function();

$scope.removerProjeto = function(id){
		$http.delete("/removerProjeto/"+id) //eclipse nao reconhece delete
		.then(
			function(response){
				$scope.carregarListaUsuarios();
			},
			function(response){
				alert(response.data);
			}
		);
		
		}

	
});