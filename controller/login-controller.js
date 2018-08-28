angular.module("rev").controller("login-controller", function ($scope, loginService, menuService, loaderService) {

    $scope.user = {
        login : "",
        senha : "",
        perfil : ""
    };

    $scope.login = function(u){
        console.log("login");
        loginService.validarLogin(u);
    };
  
   loaderService.mostrarLoaderSv(false);
   menuService.mostrarMenuSv(false); 
});