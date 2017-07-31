'use strict';
app.controller('dadosPessoaisCtrlr', ['$scope','$location','planoService','plataformaService', function($scope,$location,planoService,plataformaService) {
    $scope.planoSelecionado = planoService.planoSelecionado();
    $scope.nome = "";
    $scope.email = "";
    $scope.cpf = "";
    $scope.dt_birth = "";
    $scope.telefone = "";
    $scope.visualizacao = 'form';
    $scope.exibir = false;
    $scope.plataformaSelecionada = plataformaService.plataformaSelecionada();

    if ($scope.plataformaSelecionada.sku == undefined || $scope.planoSelecionado.sku == undefined)
        $location.path('/');

    $scope.ExibirPlano = function() { $scope.exibir = !$scope.exibir }
    $scope.enviarDados = function() {
        console.log('%c Nome: ' + $scope.nome, 'background: #222; color: #bada55; font-size: 18px');
        console.log('%c Email: ' + $scope.email, 'background: #222; color: #bada55; font-size: 18px');
        console.log('%c CPF: ' + $scope.cpf, 'background: #222; color: #bada55; font-size: 18px');
        console.log('%c Telefone: ' + $scope.telefone, 'background: #222; color: #bada55; font-size: 18px');
        console.log('%c Data de Nascimento: ' + $scope.dt_birth, 'background: #222; color: #bada55; font-size: 18px');
        console.log('%c Plano: ' + $scope.planoSelecionado.sku, 'background: #222; color: #bada55; font-size: 18px');
        $scope.visualizacao = 'feedback';
    }
}]);
