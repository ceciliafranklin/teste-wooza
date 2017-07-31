'use strict';

app.controller('plataformasItemsCtrlr', ['$scope','$location','plataformaService', function($scope,$location,plataformaService) {

	this.selecionarPlataforma = function(plataforma)  {
      plataformaService.selecionarPlataforma(plataforma);
      $location.path("/planos/" + plataforma.sku);
  }

  

}]);
