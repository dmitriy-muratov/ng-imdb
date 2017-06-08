'use strict';
var app = angular.module('filmsApp', ['ngDialog','ngAnimate','googlechart','ngRoute','filmsapp.factories','filmsapp.controllers','filmsapp.directives']);

app.config(function($routeProvider, $locationProvider){
  //$locationProvider.html5Mode(true);
  $routeProvider.when('/main',{
    templateUrl: '/components/main-page/main-page.html',
    controller: 'FilmsListCtrl'
  });
  $routeProvider.when('/favourites',{
    templateUrl: '/components/favourites-page/favourites-page.html',
    controller: 'FavouritesListCtrl'
  });
  $routeProvider.when('/chart',{
    templateUrl: '/components/chart-page/chart-page.html',
    controller: 'ChartListCtrl'
  });
  $routeProvider.otherwise({
    redirectTo: '/main'
  });
});

app.config(['ngDialogProvider', function (ngDialogProvider) {
  ngDialogProvider.setDefaults({
    className: 'ngdialog-theme-default'
  });
}]);