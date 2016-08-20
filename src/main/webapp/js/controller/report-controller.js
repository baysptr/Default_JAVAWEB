'use strict';

angular.module('hisApp')
        .controller('ReportController', function ($scope, KapalService) {
            $scope.today = function () {
                $scope.tanggal1 = new Date();
                $scope.tanggal2 = new Date();
            };
            $scope.today();

            $scope.clear = function () {
                $scope.tanggal1 = null;
                $scope.tanggal2 = null;
            };
            
            
            // Disable weekend selection
            $scope.disabled = function (date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            };

            $scope.toggleMin = function () {
                $scope.minDate = $scope.minDate ? null : new Date();
            };
            $scope.toggleMin();

            $scope.open1 = function ($event) {
                console.log('open1');
                $event.preventDefault();
                $event.stopPropagation();

                $scope.opened1 = true;
            };
            $scope.open2 = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();

                $scope.opened2 = true;
            };

            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            $scope.format = $scope.formats[0];
            
            $scope.exportTo = function(format){
                console.log('Export to: '+format);
                var link= 'report/ongkos-kirim.'+format+'?tanggal1='+$scope.tanggal1.format('yyyy-mm-dd')+
                        '&tanggal2='+$scope.tanggal2.format('yyyy-mm-dd');
                return link;
            }
        });