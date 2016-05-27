angular.module("angularApp").controller("perfilController",function($scope,$http){
		$scope.iduser="57473162005c08fc0901ee4d";
		$scope.setperfil="";
		$scope._id="";
		$scope.userList=[];
		$scope.perfilList=[];
		$scope.nomeperfil="";
		$scope.especialidade="";
		$scope.resumoProfissional="";
		$scope.habilidade="";
		$scope.areaInteresse="";
		$scope.limpar = function(){
		$scope.especialidade="";
		$scope.resumoProfissional="";
		$scope.habilidades="";
		$scope.areaInteresse="";
		$scope.listado = [];
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
	
	$scope.atualizarView = function(xx){
		$scope.listado = $scope.perfilList[xx];
				
	};
	
	
	$scope.mostrarPerfil = function(){
		$http({
			method: 'GET',
			url: '/listarNomePerfil'	
		})
		.then(function sucessCallback(response){
			$scope.perfilList = response.data[0]._id.perfilList;
			
		}, function errorCallback(response){
			alert(response.data);
		});
				
	};
	
	$scope.profissionalList =function(){
		var setperfil ={_id: $scope.id, nomeperfil:$scope.nomeperfil,especialidade:$scope.especialidade,resumoProfissional:$scope.resumoProfissional,sobremim:$scope.sobremim,habilidades:$scope.habilidades,areaInteresse:$scope.areaInteresse};//PEGA O VALOR DO CAMPO
		$http.put('/inserirPerfil/'+$scope.iduser, setperfil,{
			headers:{'Content-Type':'application/json'}
		})
		.then(
				function(response){
				alert(response.data);
			}
			);
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
	//$scope.mostrarPerfil();
	
});