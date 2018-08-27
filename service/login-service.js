angular.module("rev").service('loginService', function($http, $location){
    this.validarLogin = function(user){
        console.log("teste o usuario");
        if(user.login == "admin" && user.senha == "admin") {
            //console.log("logou");
            //return true;
            console.log("redirecionando para o /main");
            $location.path('/main');
        }
        //console.log("n logou");
        //return false;
    }

   
});    