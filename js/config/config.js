angular.module("myApp").config(
    function ($routeProvider) {
        $routeProvider
            .when('/produtos', {
                templateUrl: 'produtos.html',
                controller: 'produtoController'
            }).when('/vendas', {
                templateUrl: 'vendas.html',
                controller: 'vendasController'
            }).otherwise({
                redirectTo: '/'
            });
    }
);