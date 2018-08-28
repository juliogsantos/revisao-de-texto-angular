angular.module("rev").controller("publicacao-controller", function ($scope, publicacaoService, menuService, loaderService) {

    $scope.publicacao = {
        titulo : "",
        texto : "",
        dataCriacao : new Date(),
        dataCorrecao : "",
        dataAutorizacao : "",
        dataPublicacao : "",
        observacao : "", 
    };

    $scope.resolveMes = function(valor){
        
        return valor+1;
    }

    $scope.criarPublicacao = function(publicacao){
    console.log(publicacao.dataCriacao.getDate()+"/"+$scope.resolveMes(publicacao.dataCriacao.getMonth())+"/"+publicacao.dataCriacao.getFullYear());
    
    };

    menuService.mostrarMenuSv(true);
});