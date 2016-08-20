'use strict';

angular.module('hisApp')
  .factory('SystemService', function ($http) {
    var url='system';
    return {
        userList: function(){
            return $http.get(url+'/user-list');
        }
    }
  });
