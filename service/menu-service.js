angular.module("rev").service('menuService', ['$rootScope', function($rootScope){
   this.mostrarMenuSv = function(valor){
    console.log("chamando o menu no rootScope");
        $rootScope.menuRoot(valor);
    };
}]);