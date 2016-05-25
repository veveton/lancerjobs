angular.module("app").controller("appController",function($scope,$http){
	$scope.hello = "Tela de Contatos!";
	$scope.nome = "";
	$scope.sobrenome = "";
	$scope.id = "";
	$scope.pessoaList = [];
	$scope.idEditar = null;
	$scope.itemEditar = null;
	
	
	$scope.listar = function(){//LISTA TODOS OS CONTATOS
	
		$http({
			method: 'GET',
			url:'/getContato'
		})
		.then(function sucessCallback(response){//CASO TRUE
			$scope.pessoaList = response.data;//JOGA NA LISTA DE CONTATOS
			$scope.nome = "";
			$scope.sobrenome = "";
			$scope.idEditar = null;
			}
			,function errorCallback(response){//CASO FALSE
				alert(response.data);
			});
	};
	
	
	
	$scope.adicionar = function(){//ADICIONA CONTATO
		var usuario = {nome:$scope.nome,sobrenome:$scope.sobrenome,telefone:$scope.telefone};//PEGA O VALOR DO CAMPO
		$http.post("/adicionarContato",usuario, {
			headers:{ 'Content-Type' : 'application/json' }
		})
		.then(
			function(response){//CASO TRUE LIMPA E LISTA
				
				$scope.nome = "";
				$scope.sobrenome = "";
				$scope.telefone = "";
				$scope.id = null;
				$scope.listar();
		
			},
			function(response){//CASO DE ERRO
				alert(response.data);
			}
		);
		
	};
	

	$scope.deletar = function(index){//DELETA CONTATO
		
		$http.delete("/deletarContato/"+index)
		.then(
			function(response){//CASO TRUE LISTA NOVAMENTE
				$scope.listar();
			},
			function(response){//CASO FALSE IMPRIME ERRO
				alert(response.data);
			}
		); 
	};
	
	$scope.editarConfirmar = function(){//SALVA EDIÇÃO
		var usuarioEditar = {id:$scope.id, nome:$scope.nome,sobrenome:$scope.sobrenome, telefone:$scope.telefone};//PEGA VALOR DOS CAMPOS
		
		$http.put("/editarContato",usuarioEditar,{
			headers:{ 'Content-Type' : 'application/json' }
		})
		.then(
			function(response){//CASO TRUE LISTA NOVAMENTE
				$scope.listar();
				$scope.nome = "";
				$scope.sobrenome = "";
				$scope.telefone = "";
				$scope.id = null;
				$scope.idEditar = null;
				
			},
			function(response){//CASO FALSE IMPRIME ERRO
				alert(response.data);
			}
		); 
		
	};
	
	
	
	$scope.editar = function(contatoId){//PREENCHE OS CAMPOS DA TELA COM O OBJETO SELECIONADO
		$scope.idEditar = contatoId;//SALVA O ID PARA CONFIRMAR EDIÇÃO
		
		for(var i=0;i<$scope.pessoaList.length;i++){//PROCURA O CONTATO REFERENTE AO ID SEDECIONADO
			if($scope.pessoaList[i]._id==contatoId){
				$scope.itemEditar = $scope.pessoaList[i];//PEGA O ITEM A SER EDITADO
				
				$scope.id = $scope.itemEditar._id;
				$scope.nome = $scope.itemEditar.nome;
				$scope.sobrenome = $scope.itemEditar.sobrenome;
				$scope.telefone = $scope.itemEditar.telefone;
			}
		}
	};
	
	$scope.cancelarEdicao = function(){//CANCELA EDIÇÃO, LIMPA OS CAMPOS
		$scope.nome = "";
		$scope.sobrenome = "";
		$scope.telefone = "";
		$scope.id = null;
		$scope.idEditar = null;
	};
});