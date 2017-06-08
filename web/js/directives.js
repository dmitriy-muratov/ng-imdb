var app = angular.module('filmsapp.directives', []);
app.directive('addFavorite', function(){
  return {
    restrict: "A",
    link: function(scope, element, attributes){
      element.on('click', function(){
        var idFavorite = attributes.addFavorite;
        localStorage.setItem(scope.films[idFavorite].idIMDB, scope.films[idFavorite].status);
      });
    }
  }
});


