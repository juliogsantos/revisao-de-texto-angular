angular.module("rev").service('publicacaoService', function($http){
    this.validarLogin = function(user){
        if(user.login == "admin" && user.senha == "admin") {
            console.log("logou");
            return true;
        }
        console.log("n logou");
        return false;
    };
});



