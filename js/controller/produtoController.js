angular.module("myApp").controller("produtoController",produtoController);

produtoController.$inject = ['$scope'];

function produtoController($scope){

    $scope.titulo = "Cadastro de Produtos"
    $scope.categorias = ["Alimentício","Limpeza","Cosméticos"]
    $scope.produtos = [{nomeProduto:"Feijão",quantidadeProduto:10,validadeProduto:"31-01-2018",categoriaProduto:"Alimentício"}];

    $scope.cadastraProduto = function(produto){
    
        $scope.produtos.push(produto);
        $scope.produto = {};
        
    }

}