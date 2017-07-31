var app = angular.module('myApp', ['ngRoute', 'angularSpinner','ngMask','ngSanitize']);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/plataformas.html",
        controller:"plataformasCtrlr"
    })
    .when("/planos/:sku", {
        templateUrl : "views/planos.html",
        controller:"planosCtrlr"
    })
    .when("/dadosPessoais", {
        templateUrl : "views/dadosPessoais.html",
        controller:"dadosPessoaisCtrlr"
    })

}]);
