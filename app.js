var app = angular.module('app', []);

app.controller('cartoons', [ '$scope', function ($scope) {
  $scope.cartoons = cartoons;
  $scope.reverse = true;
  $scope.sort = 'score';
  $scope.order = function (sort) {
    $scope.reverse = ($scope.predicate === sort) ? !$scope.reverse : false;
    $scope.sort = sort;
  }
}])

angular.module('orderByExample', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.friends =
        [{name:'John', phone:'555-1212', age:10},
         {name:'Mary', phone:'555-9876', age:19},
         {name:'Mike', phone:'555-4321', age:21},
         {name:'Adam', phone:'555-5678', age:35},
         {name:'Julie', phone:'555-8765', age:29}];
    $scope.predicate = 'age';
    $scope.reverse = true;
    $scope.order = function(predicate) {
      $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
      $scope.predicate = predicate;
    };
  }]);
