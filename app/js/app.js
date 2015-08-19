var app = angular.module('app', ['ngAnimate', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'about'
      })
      .otherwise({redirectTo: 'index.html'});
});
