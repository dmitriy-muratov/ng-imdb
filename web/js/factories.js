var app = angular.module('filmsapp.factories', []);
app.factory('films', function($http){
  var appCache;
  function loadCache(callback){
    if(appCache) {
      callback(appCache);
    } else {
      $http.get('films.json').then(function(data){
        appCache = data;
        angular.forEach(appCache.data.movies, function(value, key){
          if(localStorage.getItem(value.idIMDB) == null){
            value.status = false;
            localStorage.setItem(value.idIMDB, value.status);
          }else{
            value.status = (localStorage.getItem(value.idIMDB) === 'true');
          }
        });
        callback(appCache);
      });
    }
  }
  return {
    loadCache: loadCache,
    loadMain: function(callback){
      loadCache(function(data) {
        callback(data.data.data.movies);
      });
    }
  };
});