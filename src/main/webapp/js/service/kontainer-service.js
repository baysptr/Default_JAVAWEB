'use strict';

angular.module('hisApp')
  .factory('KontainerService', function ($http, $resource) {
    var url='api/kontainer';
    return {
        byKapalBerangkat: function(k, tg){
            return $http.get(url+'/per-kapal-berangkat/'+k+'/'+tg);
        }
        
    }
  });
