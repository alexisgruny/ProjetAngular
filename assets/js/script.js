var articles = angular.module('content', []);
articles.controller('contentCtrl', function($scope, $http) {
  $http.get('assets/js/item.json')
  .then(function(res) {
    $scope.item = res.data;
  });
});
