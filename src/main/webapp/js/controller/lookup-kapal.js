/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

angular.module('hisApp')
        .controller('LookupKapalController', function ($scope, $modalInstance, KapalService) {
            $scope.selected = {};
            $scope.listData = [];
            
            $scope.reloadData = function () {
                KapalService.allBerangkat().success(function (data) {
                    $scope.listData = data;
                });
            };
            $scope.reloadData();

            $scope.totalDisplayed = 12;

            $scope.loadMore = function () {
                $scope.totalDisplayed += 10;
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            }

            $scope.modalSelected = function () {
                $modalInstance.close($scope.selected);
            };

            $scope.tampilkan = function () {
                alert($scope.query);
            };

            $scope.pilih = function (x) {
                $scope.selected = x;
                $scope.modalSelected();
            };
            angular.element(document).ready(function() {
                $('input[autofocus]:visible:first').focus();
            });
        });