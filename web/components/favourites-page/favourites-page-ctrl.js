app.controller('FavouritesListCtrl', function($scope, films){
  films.loadMain(function(cache){
    $scope.films = cache;
  });
});