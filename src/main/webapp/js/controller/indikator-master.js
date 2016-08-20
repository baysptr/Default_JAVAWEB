'use strict';

angular.module('hisApp')
        .controller('IndikatorMasterCtrl', function ($scope, IndikatorMasterService, GroupService, SystemService) {
            $scope.search = "";
            $scope.oldSearch = "";
            $scope.paging = {
                currentPage: 1,
                totalItems: 0
            };
            
            GroupService.findAll().success(function(data){
               $scope.groups=data; 
            });
            SystemService.userList().success(function(data){
               $scope.userList=data; 
            });
//            document.getElementById('search').focus();
            $scope.reloadData = function () {
//                $scope.paging.currentPage = $scope.search != $scope.oldSearch ? 1 : $scope.currentPage;
                $scope.dataPage = IndikatorMasterService.query($scope.search, $scope.paging.currentPage, function () {
                    $scope.paging.maxSize = ($scope.dataPage.size);
                    $scope.paging.totalItems = $scope.dataPage.totalElements;
                    $scope.paging.currentPage = parseInt($scope.dataPage.number) + 1;
                    $scope.paging.maxPage = $scope.dataPage.totalPages;
                });

            };

            $scope.reloadData();
//            $scope.$watch('paging.currentPage', $scope.reloadData, true);
            $scope.edit = function (x) {
                $scope.formTitle = "Edit Master Indikator";

                if (x.kode) {
                    IndikatorMasterService.get(x.kode).success(function (data) {
                        $scope.currentRecord = data;
                        $scope.original = angular.copy($scope.currentRecord);
                        $('#formModal').modal('show');
                        document.getElementById('nama').focus();
                    });
                }
            };

            $scope.isClean = function () {
                return angular.equals($scope.original, $scope.currentRecord);
            };

            $scope.clear = function () {
                $scope.formTitle = "Tambah Master Indikator";
                $scope.currentRecord = null;
                $scope.original = null;
                $scope.isNameExists = false;

                $scope.reloadData();
                $('#nama').focus();
            };


            $scope.remove = function (x) {
                bootbox.confirm('Anda yakin untuk mengahapus satuan[' + x.nama + '] ?', function (result) {
                    if (result) {
                        IndikatorMasterService.remove(x).success(function () {
                            $scope.clear();
                        });
                    }
                });
            };

            $scope.save = function () {
                IndikatorMasterService.findByNama($scope.currentRecord.nama).success(function (data) {
                    if (data && (data.id !== $scope.currentRecord.id)) {
                        $scope.isNameExists = true;
                        return;
                    } else {
                        IndikatorMasterService.save($scope.currentRecord).success(function () {
                            $('#formModal').modal('hide');
                            bootbox.alert('Simpan satuan item sukses ');
                            $scope.clear();
                        });
                    }
                });
            };

        });