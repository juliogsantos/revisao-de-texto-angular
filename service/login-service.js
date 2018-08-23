angular.module("rev").service('loginService', function($http, $location, menuService){
    this.validarLogin = function(user){
        if(user.login == "admin" && user.senha == "admin") {
            //console.log("logou");
            //return true;
            $location.path('/main');
        }
        //console.log("n logou");
        //return false;
    }

    menuService.mostrarMenu(false);
});    