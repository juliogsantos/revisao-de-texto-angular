angular.module("rev").config(['$locationProvider', '$routeProvider', function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider
    .when("/", {
        templateUrl : "login.html"
        })
    .when("/main", {
        templateUrl : "view/index.html"
        })
    }])