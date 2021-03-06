var app = angular.module('app', ['ngAnimate', 'ngRoute', 'firebase']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'cartoons'
      })
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'about'
      })
      .when('/find', {
        templateUrl: 'partials/find.html',
        controller: 'find'
      })
      .when('/math/:factor/:number/:otherNumber', {
        templateUrl: 'partials/math.html',
        controller: 'math'
      })
      .when('/math/:factor', {
        templateUrl: 'partials/math.html',
        controller: 'math'
      })
      .otherwise({redirectTo: '/'});
      $locationProvider.html5Mode(true);
});

function palindrome(word) {
  var newWord = word.split('').reverse().join('');
  if (word === newWord) {
    return true
  } else {
    return false
  }
}
