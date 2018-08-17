angular.module("rev").service('loginService', function($http){
    this.validarLogin = function(user){
        if(user.login == "admin" && user.senha == "admin") {
            console.log("logou");
            return true;
        }
        console.log("n logou");
        return false;
    };
});