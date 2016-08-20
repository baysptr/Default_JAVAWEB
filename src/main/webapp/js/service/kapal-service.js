'use strict';

angular.module('hisApp')
  .factory('KapalService', function ($http, $resource) {
    var url='api/kapal';
    return {
        group: $resource(url+'/:search', {}, {
                queryPage: {method:'GET', isArray: false}
            }),
        get: function(id){ return $http.get(url+'/get/'+id) }, 
        query: function(search, p, callback){ return this.group.queryPage({"search": search, "page.page": p, "page.size": 10}, callback) },
        save: function(obj){
            if(obj.id ===null){
                return $http.post(url, obj);
            }else{
                return $http.put(url, obj);
            }
        },
        remove: function(obj){
            if(obj.kode !=null){
                return $http.delete(url+"/"+obj.kode);
            }
        },
        findByNama: function(value){
            return $http.get(url+'/cek-nama/'+value);
        },
        allBerangkat: function(){
            return $http.get(url+'/all-berangkat');
        },
        listMerk: function(kd, tg){
            return $http.get(url+'/merk-kapal-berangkat/'+kd+'/'+tg);
        },
    }
  });
