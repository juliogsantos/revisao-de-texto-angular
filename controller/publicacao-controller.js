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
    
    $scope.publicacao.titulo = publicacao.titulo;
    $scope.publicacao.texto = publicacao.texto;
    $scope.publicacao.dataCriacao = publicacao.dataCriacao.getDate()+"/"+$scope.resolveMes(publicacao.dataCriacao.getMonth())+"/"+publicacao.dataCriacao.getFullYear();
    $scope.publicacao.dataCorrecao = publicacao.dataCorrecao;
    $scope.publicacao.dataAutorizacao = publicacao.dataAutorizacao;
    $scope.publicacao.dataPublicacao = publicacao.dataPublicacao;
    $scope.publicacao.observacao = publicacao.observacao;

    console.log($scope.publicacao.dataCriacao);
    };

    menuService.mostrarMenuSv(true);
});