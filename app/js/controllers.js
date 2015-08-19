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

app.controller('HomeController', function($scope){
  $scope.message = "Welcome!"
});

app.controller('DogsController', function($scope){
    $scope.message = "Woof Woof!"
});
