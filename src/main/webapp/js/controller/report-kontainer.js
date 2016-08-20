/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

angular.module('hisApp')
        .controller('ReportKontainerController', function ($scope, $modal, $log, 
            KapalService, KontainerService) {
            $scope.currentRecord={};
            $scope.currentRecord.kapal={};
            $scope.showCompany=true;
            KapalService.allBerangkat().success(function (data) {
                console.log('data', data);
                $scope.listKapal = data;
            });
            $scope.lookupKapal = function () {
                var modalInstance = $modal.open({
                    templateUrl: 'views/templates/lookup-kapal.html',
                    controller: 'LookupKapalController',
                    size: 'lg',
                    resolve: {
                        cbg: function () {
                            return '';
                        }
                    }
                });
                modalInstance.result.then(function (sel) {
                    $scope.currentRecord.kapal = sel;
                    KontainerService.byKapalBerangkat(sel.kode_kapal, sel.tgl_berangkat).success(function(data){
                        console.log(data);
                        $scope.listKontainer=data;
                    });
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };
            
            $scope.tampilkan = function (format, id) {
                var link = 'report/kontainer/rekap-merk.' + format + '?id=' + id;
                if (format == 'pdf') {
//                    window.open(link, '_blank', 'width=screen.width, height=screen.height');
                    window.open(link, '_blank', 'width=1024, height=768');
                } else {
                    location.href = link;
                }
            }
            $scope.tampilkanPl = function (format, id, ex) {
                var link = 'report/kontainer/pl.' + format + '?id=' + id+'&sc='+$scope.showCompany+
                        '&sc='+$scope.showCompany+'&ex='+ex;
                if (format == 'pdf') {
//                    window.open(link, '_blank', 'width=screen.width, height=screen.height');
                    window.open(link, '_blank', 'width=1024, height=768');
                } else {
                    location.href = link;
                }
            }
        });