angular.module("rev").controller("publicacao-controller", function ($scope, publicacaoService) {

    $scope.user = {
        login : "",
        senha : "",
        perfil : ""
    };

    $scope.login = function(user){
        publicacaoService.validarLogin(user);
    };
});