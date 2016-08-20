'use strict';

angular.module('hisApp')
  .factory('IndikatorMasterService', function ($http, $resource) {
    var url='master/indikator-master';
    return {
        master: $resource(url+'/:search', {}, {
                queryPage: {method:'GET', isArray: false}
            }),
        get: function(id){ return $http.get(url+'/get/'+id) }, 
        query: function(search, p, callback){ return this.master.queryPage({"search": search, "page.page": p, "page.size": 10}, callback) },
        save: function(obj){
            console.log('Save', obj);
            if(obj.kode ===null || obj.kode ===undefined){
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
        findAll: function(){
            return $http.get(url+'/all');
        },
        count: function(){
            return $http.get(url+'/count');
        }
    }
  });
