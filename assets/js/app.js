//Déclaration du module
var items = angular.module('content', []);
//Déclaration des tableaux pour le panier au lancement de la page
items.run(['$rootScope', function($rootScope) {
  $rootScope.productBasket = [];
  $rootScope.priceBasket = [];
  $rootScope.refBasket = [];
  $rootScope.descBasket = [];
  $rootScope.typeBasket = [];
}]);
//Déclaration du controlleur
items.controller('contentCtrl',['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
  //Appel du fichier .json
  $http.get('assets/js/articles.json')
  .then(function(res) {
    $scope.articles = res.data;
  });
  $scope.sendArticles = function(index) {
    $rootScope.productBasket.push($scope.articles[index].product);
    $rootScope.priceBasket.push($scope.articles[index].price);
    $rootScope.refBasket.push($scope.articles[index].ref);
    $rootScope.descBasket.push($scope.articles[index].desc);
    $rootScope.typeBasket.push($scope.articles[index].type);
  }
}]);
