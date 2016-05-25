angular.module("app").controller("controllerTelefone",function($scope,$http){
	$scope.hello = "Tela de Telefones!";
	$scope.telefone = "";
	$scope.id_telefone = "";
	$scope.telefoneList = [];
	$scope.contatoList = [];
	$scope.todosTelefones = [];
	$scope.indexEditarT = null;
	$scope.itemEditarT = [];
	$scope.objListado = false;
	
	
	
	$scope.listarContato = function(){//LISTA TODOS OS CONTATOS
		
		$http({
			method: 'GET',
			url:'/getContato'
		})
		.then(function sucessCallback(response){//CASO TRUE
			$scope.contatoList = response.data;//JOGA NA LISTA DE CONTATOS
			//$scope.indexEditar = null;
			}
			,function errorCallback(response){//CASO FALSE
				alert(response.data);
			});
	};
	
	
	$scope.allTelefones = function(){
		
		$http({
			method: 'GET',
			url:'/getTelefones'
		})
		.then(function sucessCallback(response){//CASO TRUE
			$scope.todosTelefones = response.data;//JOGA NA LISTA DE TODOS OS TELEFONES
			//$scope.indexEditar = null;
			
			}
			,function errorCallback(response){//CASO FALSE
				alert(response.data);
			});
	};
	
	
	
	$scope.listar = function(contato){
		if(contato!=null){
		$scope.telefoneList = contato.telefones;
	}
		
	};
	
	$scope.adicionar = function(contato){//ADICIONA TELEFONE
		var tel = {numero:$scope.telefone,tipo:$scope.tipo,id:contato._id};//PEGA O VALOR DO CAMPO
		
		$http.put("/adicionarTelefone",tel, {
			headers:{ 'Content-Type' : 'application/json' }
		})
		.then(function(response){//CASO TRUE LIMPA E LISTA
				
			$scope.telefone = "";
			$scope.tipo = "";
			
			
			
		
			},
			function errorCallback(response){//CASO DE ERRO
				alert(response.data);
			});
		
	};
	

	$scope.deletar = function(id1,id2){//DELETA TELEFONE
		
		$http.delete("/deletarTelefone/"+id1+"/"+id2)
		.then(
			function(response){//CASO TRUE LISTA NOVAMENTE
				//$scope.listar(contatoId);
			},
			function(response){
				alert(response.data);//CASO FALSE IMPRIME ERRO
			}
		); 
		
	};
	
	$scope.editarConfirmar = function(){//SALVA EDIÇÃO
		
		var telefoneEditar = {numero:$scope.telefone,tipo:$scope.tipo,id:$scope.itemEditarT._id};//PEGA VALOR DOS CAMPOS
		
		$http.put("/editarTelefone",telefoneEditar,{
			headers:{ 'Content-Type' : 'application/json' }
		})
		.then(
			function(response){//CASO TRUE LISTA NOVAMENTE
				//$scope.listar(contato);
				$scope.telefone = "";
				$scope.tipo = "";
				
				$scope.indexEditarT = null;
				//$scope.itemEditarT = null;
			},
			function(response){//CASO FALSE IMPRIME ERRO
				alert(response.data);
			}
		); 
		
	};
	
	
	
	$scope.editar = function(telefone){//PREENCHE OS CAMPOS DA TELA COM O OBJETO SELECIONADO
		//$scope.indexEditarT = index;//SALVA O INDEX PARA CONFIRMAR EDIÇÃO
		$scope.itemEditarT = telefone;//PEGA O ITEM A SER EDITADO
		console.log($scope.itemEditarT);
		//PREENCHE OS CAMPOS
		//$scope.id_telefone = $scope.itemEditarT.id_telefone;
		$scope.telefone = $scope.itemEditarT.numero;
		$scope.tipo = $scope.itemEditarT.tipo;
		$scope.objListado = false;
		
		
	};
	
	$scope.cancelarEdicao = function(){//CANCELA EDIÇÃO, LIMPA OS CAMPOS
		$scope.telefone = "";
		$scope.id_telefone = null;
		$scope.indexEditarT = null;
		$scope.itemEditarT = null;
	};
	
	$scope.allTelefones();//CARREGA NO INICIO A LISTA
	$scope.listarContato();//CARREGA NO INICIO A LISTA
});