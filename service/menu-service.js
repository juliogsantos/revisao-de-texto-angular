angular.module("rev").service('menuService', function($rootScope){
    this.mostrarMenu = function(valor){
        $rootScope.menu = valor;
    };
});