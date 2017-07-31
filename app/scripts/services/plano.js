

app.service('planoService', ['dataService', function(dataService) {
  var URL_PLANOS = 'http://private-59658d-celulardireto2017.apiary-mock.com/planos/';
  var planoService = {};
  var parcelas = 1;
  var plano = {};
  planoService.selecionarPlano = function(novoPlano) {
      plano = novoPlano;
  };

  planoService.planoSelecionado = function(){
      return plano;
  };

  planoService.all = function(skuPlataforma) {
  	return dataService.getData(URL_PLANOS + skuPlataforma);
  };

  return planoService;
}]);
