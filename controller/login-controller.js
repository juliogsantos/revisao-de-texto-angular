angular.module("rev").controller("login-controller", function ($scope, loginService, menuService, loaderService, $interval) {

    $scope.user = {
        login : "",
        senha : "",
        perfil : ""
    };

    $scope.login = function(user){
        loaderService.mostrarLoader(true);
        loginService.validarLogin(user);
        loaderService.mostrarLoader(false);
    };

    menuService.mostrarMenu(false);
    
});