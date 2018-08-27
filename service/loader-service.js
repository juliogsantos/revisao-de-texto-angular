angular.module("rev").service('loaderService', ['$rootScope', function($rootScope){
   this.mostrarLoaderSv = function(valor){
        console.log("chamando o loader no rootScope");
        $rootScope.loaderRoot(valor);
    };
}]);