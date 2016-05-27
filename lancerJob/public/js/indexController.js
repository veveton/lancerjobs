angular.module("angularApp").controller("inicioController", function($scope, $http) {
	$scope.email="";
	$scope.password="";
	
	
	$scope.validarLogin = function(){//ADICIONA CONTATO
		
			
			var usuario = {email:$scope.email,senha:$scope.password};//PEGA O VALOR DO CAMPO
			$http.post("/sessaoAdicionar",usuario, {
				headers:{ 'Content-Type' : 'application/json' }
			})
			.then(
				function(response){//CASO TRUE LIMPA E LISTA
					
					
					$scope.email="";
					$scope.password="";
					
					alert(response.data);
				},
				function(response){//CASO DE ERRO
					alert(response.data);
				}
			);
			
		}
		
	
		
		
		
		
		
});