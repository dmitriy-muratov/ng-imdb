var app = angular.module('filmsapp.controllers', []);
app.controller('MainListCtrl', function($scope, $rootScope, $timeout, $location, $http, ngDialog, films){

  $scope.open = function (varFilmId) {
    $scope.filmId = varFilmId;
    ngDialog.open({
      template: 'firstDialogId',
      scope: $scope
    });
  };
  $rootScope.$on('ngDialog.setPadding', function (event, padding)
  {
    angular.element( document.querySelector('.paddingHeader') ).css('padding-right', padding + 'px');
  });

  $scope.addText = function(status){
    return status ? "Remove from favorites" : "Add to favorites";
  };

  localStorage.setItem("bar", "test test");

  $scope.bool = true;

  $scope.showMain = function(){
    $location.path('/main');
  };
  $scope.showElect = function(){
    $location.path('/favourites');
  };
  $scope.showChart = function(){
    $location.path('/chart');
  }

});