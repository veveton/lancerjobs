angular.module("angularApp").controller("perfilController",function($scope,$http){
	
	$scope.limpar = function(){
		$scope.nome="";
		$scope.especialidade="";
		$scope.resumoProfissional="";
		$scope.perfil="";
		$scope.habilidades="":
		areaInteresse="";

	};
	
	
	
	$scope.profissionalList = function(){//ADICIONA PROJETO
		

		var perfil = {nomeprof:$scope.nomeprof,especialidade:$scope.especialidade,resumoprofissional:$scope.resumoprofissional,perfil:$scope.perfil,habilidades:$scope.habilidades,areainteresse:$scope.areainteresse};//PEGA O VALOR DO CAMPO
		$http.post("/salvaPerfil",perfil, {
			headers:{ 'Content-Type' : 'application/json' }
		})
		.then(
				function(response){//CASO TRUE LIMPA E LISTA

					$scope.limpar();
					alert("Perfil inserido com Sucesso!")

				},
				function(response){//CASO DE ERRO
					alert(response.data);
				}
		);
		/**/

	};

});