//Déclaration du module
var items = angular.module('content', []);
//Déclaration des tableaux pour le panier au lancement de la page
items.run(['$rootScope', function($rootScope) {
  $rootScope.basket = [];
  $rootScope.prixTotal = 0;

}]);
//Déclaration du controlleur
items.controller('contentCtrl',['$scope', '$http', function( $scope, $http) {
  //Appel du fichier .json
  $http.get('assets/js/articles.json')
  .then(function(res) {
  $scope.articles = res.data;

  });
  $scope.sendArticles = function(index) {
    $scope.basket.push($scope.articles[index]);
    $scope.prixTotal = 0;
    for(var key in $scope.basket){
    $scope.prixTotal += $scope.basket[key].price;
  }
  }
}]);
