/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

angular.module('hisApp')
        .controller('ReportBastController', function ($scope, $modal, $log, 
            KapalService) {
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
                    KapalService.listMerk(sel.kode_kapal, sel.tgl_berangkat).success(function(data){
                        console.log(data);
                        $scope.listMerk=data;
                    });
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };
            
            $scope.tampilkan = function (format, m) {
                var link = 'report/bast.' + format + '?m=' + m.merk+'&k='+$scope.currentRecord.kapal.kode_kapal+'&t='+$scope.currentRecord.kapal.tgl_berangkat+'&sc='+$scope.showCompany;
                if (format == 'pdf') {
//                    window.open(link, '_blank', 'width=screen.width, height=screen.height');
                    window.open(link, '_blank', 'width=1024, height=768');
                } else {
                    location.href = link;
                }
            }
        });