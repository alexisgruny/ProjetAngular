//Déclaration du module
var articles = angular.module('content', []);
//Déclaration des tableaux pour le panier au lancement de la page
articles.run(['$rootScope', function($rootScope) {
  $rootScope.productBasket = [];
  $rootScope.priceBasket = [];
  $rootScope.refBasket = [];
  $rootScope.descBasket = [];
  $rootScope.typeBasket = [];
}]);
//Déclaration du controlleur
articles.controller('contentCtrl',['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
  //Appel du fichier .json
  $http.get('assets/js/articles.json')
  .then(function(res) {
    $scope.articles = res.data;
  });
  //Déclaration de la fonction sendArticles
  $rootScope.sendArticles = function(reference) {
    $rootScope.productBasket.push($scope.article.product[reference]);
    $rootScope.priceBasket.push($scope.article.price[reference]);
    $rootScope.refBasket.push($scope.article.ref[reference]);
    $rootScope.descBasket.push($scope.article.desc[reference]);
    $rootScope.typeBasket.push($scope.article.type[reference]);
    $rootScope.imageBasket.push($scope.article.image[reference]);
  }
}]);
