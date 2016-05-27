angular.module("angularApp").controller("perfilController",function($scope,$http){
		$scope.iduser="57475811959e35a018cf877a";
		$scope.setperfil="";
		$scope._id="";
		$scope.userList=[];
		$scope.perfilList=[];
		$scope.nome="";
		$scope.especialidade="";
		$scope.resumoProfissional="";
		$scope.prof="";
		$scope.perfilr="";
		$scope.habilidade="";
		$scope.areaInteresse="";
		$scope.prof="";
	
		$scope.limpar = function(){
		$scope.nome="";
		$scope.especialidade="";
		$scope.resumoProfissional="";
		$scope.perfilr="";
		$scope.habilidades="";
		$scope.areaInteresse="";

	};
	
	
	$scope.userCarregar = function(){
		$http({
			method: 'GET',
			url: '/listarUser'	
		})
		.then(function sucessCallback(response){
			$scope.userList = response.data;
		}, function errorCallback(response){
			alert(response.data);
		});
				
	};
		
	$scope.profissionalList =function(){
		var setperfil ={_id: $scope.id, nome:$scope.nome,especialidade:$scope.especialidade,resumoProfissional:$scope.resumoProfissional,perfil:$scope.perfil,habilidades:$scope.habilidades,areaInteresse:$scope.areaInteresse};//PEGA O VALOR DO CAMPO
		$http.put('/inserirPerfil/'+$scope.iduser, setperfil,{
			headers:{'Content-Type':'application/json'}
		})
		.then(
				function(response){
				alert(response.data);
			}
			);
		$scope.limpar();
	}
	
	
	$scope.validar = function(){
		if($scope.nome == ""){
			alert("Insira o nome que deseja exibir no perfil!");
			return false;
		}
		
		if($scope.especialidade == ""){
			alert("Insira sua especialidade");
			return false;
		}
		
		if($scope.resumoProfissional == ""){
			alert("Insira seu resumo profissional! ");
			return false;
		}
	}
	
	
	$scope.userCarregar();
	
});