var articles = angular.module('content', []);
articles.controller('contentCtrl', function($scope, $http) {
  $http.get('assets/js/articles.json')
  .then(function(res) {
    $scope.articles = res.data;
  });
});
