

app.factory('dataService', ['$rootScope', '$http', function($rootScope, $http) {
    var dataService = {};
    dataService.getData = function(url) {
        return $http.get(url);
    };
  
  return dataService;
}]);