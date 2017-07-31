app.service('plataformaService', ['dataService', function(dataService) {
  
  var URL_PLATAFORMAS = 'http://private-59658d-celulardireto2017.apiary-mock.com/plataformas';
  var plataformaService = {};
  var plataforma = {};
  plataformaService.selecionarPlataforma = function(novaPlataforma) {
      plataforma = novaPlataforma;
  };

  plataformaService.plataformaSelecionada = function(){
      return plataforma;
  };

  plataformaService.all = function()
  {
  	return dataService.getData(URL_PLATAFORMAS);
  }

  return plataformaService;
}]);
