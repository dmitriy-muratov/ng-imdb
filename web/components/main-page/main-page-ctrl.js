app.controller('FilmsListCtrl', function($scope, films) {
  films.loadMain(function (cache) {
    $scope.films = cache;
  });
});