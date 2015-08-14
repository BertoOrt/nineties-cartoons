var app = angular.module('app', []);

app.controller('cartoons', [ '$scope', function ($scope) {
  $scope.cartoons = cartoons;
  $scope.reverse = true;
  $scope.sort = 'score';
  $scope.order = function (sort) {
    $scope.reverse = ($scope.predicate === sort) ? !$scope.reverse : $scope.reverse;
    $scope.sort = sort;
  }
}])
