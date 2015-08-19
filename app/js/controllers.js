app.controller('cartoons', [ '$scope', function ($scope) {
  $scope.cartoons = cartoons;
  $scope.reverse = true;
  $scope.sort = 'score';
  $scope.cartoonFormShow = false;
  $scope.order = function (sort) {
    $scope.reverse = ($scope.predicate === sort) ? !$scope.reverse : $scope.reverse;
    $scope.sort = sort;
  }
  $scope.downScore = function () {
    this.cartoon.score--;
  }
  $scope.upScore = function () {
    this.cartoon.score++;
  }
  $scope.show = function (type) {
    if (this.cartoon[type]) {
      this.cartoon.form = false;
      this.cartoon.comment = false;
      this.cartoon[type] = false;
    } else {
      this.cartoon.form = false;
      this.cartoon.comment = false;
      this.cartoon[type] = true;
    }
  }
  $scope.post = function (comment) {
    this.cartoon.comments.push({text: comment, author:'You'})
  }
  $scope.submitForm = function (info) {
    console.log(info);
  }
  $scope.formShow = function () {
    if ($scope.cartoonFormShow) {
      $scope.cartoonFormShow = false
    } else {
      $scope.cartoonFormShow = true
    }
  }
  $scope.submitCartoon = function () {
    $scope.cartoons.push({name: $scope.title, image: $scope.url, score: 10, comments: [], author: "You", description: $scope.description})
  };
  $scope.clearForm = function (form) {
    $scope.title = null;
    $scope.url = null;
    $scope.description = null;
    this[form].$setPristine();
    this[form].$setUntouched();
  }
}])

app.controller('about', ['$scope', function($scope) {
  $scope.message = 'to be completed'
}]);

app.controller('math', ['$scope','$routeParams', function($scope, $routeParams) {
  var param1 = $routeParams;
  $scope.message = param1;
  $scope.factor = param1.factor;
  $scope.number = param1.number;
  $scope.otherNumber = param1.otherNumber;
  if ($scope.factor === 'add') {
    $scope.result = parseInt(param1.number) + parseInt(param1.otherNumber)
  } else if ($scope.factor === "multiply") {
    $scope.result = parseInt(param1.number) * parseInt(param1.otherNumber)
  } else {
    $scope.result = "something something, I don't want to do math"
  }
}]);
