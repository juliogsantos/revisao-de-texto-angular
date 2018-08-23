angular.module("rev").controller("main-controller", function ($scope, menuService) {
    menuService.mostrarMenu(true);
});