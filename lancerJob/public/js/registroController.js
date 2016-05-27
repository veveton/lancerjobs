angular.module("angularApp").controller("registroController",function($scope,$http){
	$scope.nome = "";
	$scope.cpfCnpj = "";
	$scope.email = "";
	$scope.senha = "";
	$scope.confSenha = "";
		
	$scope.registrar = function() {	//ADICIONA CONTATO
		
		// Validação dos campos do formulário
		
		if($scope.nome == "") alert("O campo NOME é obrigatório!");
		else if($scope.cpfCnpj == "") alert("O campo CPF OU CNPJ é obrigatório!");
		else if($scope.cpfCnpj == "") alert("O campo CPF OU CNPJ é obrigatório!");
		else if($scope.email == "") alert("O campo E-MAIL é obrigatório!");
		else if($scope.senha == "") alert("O campo SENHA é obrigatório!");
		else if($scope.confSenha == "") alert("O campo CONFIRMAR SENHA é obrigatório!");
		else {
			if($scope.senha == $scope.confSenha) {
				
				var usuario = {nome:$scope.nome,cpfCnpj:$scope.cpfCnpj,email:$scope.email,senha:$scope.senha}; //PEGA O VALOR DO CAMPO
				$http.post("/addCadastro", usuario, {
					headers:{ 'Content-Type' : 'application/json' }
				})
				.then(
					function(response){	//CASO TRUE LIMPA E LISTA
						alert("Registrado com Sucesso!");
						
						$scope.nome = "";
						$scope.cpfCnpj = "";
						$scope.email = "";
						$scope.senha = "";
						$scope.confSenha = "";
					},
					function(response){	//CASO DE ERRO
						alert(response.data);
					});
			} // fim IF
			
			else alert("Senhas Não Coincidem!");
		}		
	};
});