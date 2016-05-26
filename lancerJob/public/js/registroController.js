angular.module("angularApp").controller("registroController",function($scope,$http){
	$scope.nome = "";
	$scope.cpfCnpj = "";
	$scope.email = "";
	$scope.senha = "";
	$scope.confSenha = "";
	
	
	
	$scope.registrar = function(){//ADICIONA CONTATO
		if($scope.senha == $scope.confSenha){
			
			var usuario = {nome:$scope.nome,cpfCnpj:$scope.cpfCnpj,email:$scope.email,senha:$scope.senha};//PEGA O VALOR DO CAMPO
			$http.post("/addCadastro",usuario, {
				headers:{ 'Content-Type' : 'application/json' }
			})
			.then(
				function(response){//CASO TRUE LIMPA E LISTA
					
					$scope.nome = "";
					$scope.cpfCnpj = "";
					$scope.email = "";
					$scope.senha = "";
					$scope.confSenha = "";
					
					alert("Registrado com Sucesso!")
			
				},
				function(response){//CASO DE ERRO
					alert(response.data);
				}
			);
			
		}
		else{
			alert("Senhas Não Coincidem!")
		}
		
		/**/
		
	};
	
});