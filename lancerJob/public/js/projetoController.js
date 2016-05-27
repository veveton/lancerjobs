angular.module("angularApp").controller("projetoController",function($scope,$http){
<<<<<<< HEAD
	$scope.iduser="574835680cb0845813aa1bf5";
=======
	$scope.iduser="574835680cb0845813aa1bf5";
>>>>>>> branch 'master' of https://github.com/veveton/lancerjobs.git
	$scope.logado="";
<<<<<<< HEAD
	$scope._id="";
=======
	$scope._id="";
>>>>>>> branch 'master' of https://github.com/veveton/lancerjobs.git
	$scope.projetoList=[];
	$scope.userList=[];
<<<<<<< HEAD
	$scope.projeto="";
=======
	$scope.projeto="";
>>>>>>> branch 'master' of https://github.com/veveton/lancerjobs.git
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


$scope.limpar = function(){
	$scope.nomeproj = "";
	$scope.horas = "";
	$scope.prazofinal = "";
	$scope.categoria = "";
	$scope.requisitos = "";
	$scope.nivel = "";
	$scope.prioridade = "";
	$scope.descricao = "";
	$scope.valor = "";

}

$scope.validar = function(){
	if($scope.nomeproj == ""){
		alert("Insira o nome do projeto!");
		return false;
	}
	
	if($scope.horas == ""){
		alert("Insira as horas Previstas");
		return false;
	}
	
	if($scope.prazofinal == ""){
		alert("Insira a data prevista de término! ");
		return false;
	}
	if($scope.descricao == ""){
		alert("Insira a descrição do projeto! ");
		return false;
	}
	if($scope.valor == ""){
		alert("Informe o valor do projeto! ");
		return false;
	}
}

$scope.registrar = function(){//ADICIONA PROJETO

	if($scope.validar() != false){
		var projeto = {_id: $scope.id, nomeproj:$scope.nomeproj,horas:$scope.horas,prazofinal:$scope.prazofinal,categoria:$scope.categoria,requisitos:$scope.requisitos,nivel:$scope.nivel,prioridade:$scope.prioridade,descricao:$scope.descricao,valor:$scope.valor};//PEGA O VALOR DO CAMPO
		$http.put("/addProjeto/"+$scope.iduser,projeto, {
			headers:{ 'Content-Type' : 'application/json' }
		})
		.then(
				function(response){//CASO TRUE LIMPA E LISTA

					
					$scope.limpar();
					alert("Projeto inserido com Sucesso!!")

				},
				function(response){//CASO DE ERRO
					alert(response.data);
				}
		);
		/**/
	}
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
