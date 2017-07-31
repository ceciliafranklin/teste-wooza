'use strict';
app.controller('planosItemsCtrlr', ['$scope', '$location', '$routeParams', 'planoService','plataformaService',
    function($scope, $location, $routeParams, planoService,plataformaService) {
	
  $scope.plataformaSelecionada = plataformaService.plataformaSelecionada();
	
  this.comprar = function(plano)  {
      planoService.selecionarPlano(plano);
      $location.path( '/dadosPessoais' );
  }

}]);
