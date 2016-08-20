'use strict';

angular.module('hisApp')
        .controller('IndikatorEntryCtrl', function ($scope, IndikatorMasterService) {
        $scope.listBulan = [
            {id: '01', nama: 'JANUARI'},
            {id: '02', nama: 'FEBRUARI'},
            {id: '03', nama: 'MARET'},
            {id: '04', nama: 'APRIL'},
            {id: '05', nama: 'MEI'},
            {id: '06', nama: 'JUNI'},
            {id: '07', nama: 'JULI'},
            {id: '08', nama: 'AGUSTUS'},
            {id: '09', nama: 'SEPTEMBER'},
            {id: '10', nama: 'OKTOBER'},
            {id: '11', nama: 'NOVEMBER'},
            {id: '12', nama: 'DESEMBER'},
        ];    
        var date=new Date();
        $scope.tahun=date.getFullYear();
});