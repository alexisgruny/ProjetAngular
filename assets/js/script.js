var articles = angular.module('content', []);
articles.controller('contentCtrl', function($scope, $http) {
  $http.get('assets/js/item.json')
  .then(function(response) {
    $scope.figurines = response.data;
  });
});
