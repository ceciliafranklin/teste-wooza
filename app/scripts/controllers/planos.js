'use strict';
app.controller('planosCtrlr', ['$scope', '$location', '$routeParams', 'planoService','plataformaService',
    function($scope, $location, $routeParams, planoService,plataformaService) {
	$scope.Planos = {};
  $scope.plataformaSelecionada = plataformaService.plataformaSelecionada();
	$scope.sku = $routeParams.sku;
	$scope.parcelas = 1;
	$scope.PlanoSelecionado = {};
  $scope.loading = true;
  console.log();
  if ($scope.plataformaSelecionada.sku != undefined)
  {
    planoService.all($scope.sku)
      .then(function (response) {
        $scope.Planos = response.data.planos;
      })
      .catch(function (){
        alert('Ocorreu um erro ao processar sua solicitação.');
      })
      .finally(function (){
        $scope.loading = false;
      });
  }
  else
    $location.path('/');
}]);
