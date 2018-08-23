angular.module("rev").service('loaderService', function($rootScope){
    this.mostrarLoader = function(valor){
        $rootScope.loader = valor;
    };
});