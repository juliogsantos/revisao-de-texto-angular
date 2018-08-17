angular.module("rev").controller("login-controller", function ($scope, loginService) {

    $scope.user = {
        login : "",
        senha : "",
        perfil : ""
    };

    $scope.login = function(user){
        loginService.validarLogin(user);
    };
});