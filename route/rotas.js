angular.module("rev").config(function($routeProvider) {

    $routeProvider
    .when("/", {
        templateUrl : "./view/login/login.html",
        controller : "login-controller"
        })
    .when("/main", {
        templateUrl : "./view/index.html",
        controller : "main-controller"
        })
    .when("/criar-publicacao", {
        templateUrl : "./view/publicacao/criar-publicacao.html",
        controller : "publicacao-controller"
        })
    .otherwise({ redirectTo : "./view/login/login.html"});
    })
    .run(function ($rootScope) {
        $rootScope.menu = false;
        $rootScope.loader = false;

        $rootScope.loaderRoot = function(valor){
            console.log("no .run setando o valor de Loader");  
            $rootScope.loader = valor;
        };

        $rootScope.menuRoot = function(valor){
            console.log("no .run setando o valor de menu");
            $rootScope.menu = valor;
        };
    });