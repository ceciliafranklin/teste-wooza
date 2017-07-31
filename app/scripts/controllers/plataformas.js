'use strict';

app.controller('plataformasCtrlr', ['$scope', 'plataformaService', function($scope, plataformaService) {
	$scope.Plataformas = {};
  $scope.loading = true;
	
  plataformaService.all()
    .then(function (response) {
      $scope.Plataformas = response.data.plataformas;
    })
    .catch(function (){
      alert('Ocorreu um erro ao efetuar a operação.');
    })
    .finally(function(){
      $scope.loading = false;
    })
}]);
