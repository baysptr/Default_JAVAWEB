'use strict';

/**
 * @ngdoc function
 * @name belajarYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the belajarYeomanApp
 */
angular.module('hisApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tims = [
        {nip: '270900', nama: 'Ustadho'},
        {nip: '270901', nama: 'Sugeng'},
        {nip: '270900', nama: 'Ony'},
    ];
    $scope.currentUser='ustadho';
  });
