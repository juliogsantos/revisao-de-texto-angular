angular.module("rev").controller("main-controller", function ($scope, menuService, loaderService) {
   
    menuService.mostrarMenuSv(true);
    loaderService.mostrarLoaderSv(false);

});