'use strict';

angular
        .module('tpjDf', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngTokensField',
            'ngSanitize',
            'ngTouch',
            'ui.bootstrap',
            'ui.select'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/report/ongkos-kirim', {
                        templateUrl: 'views/report/ongkos-kirim.html',
                        controller: 'ReportController'
                    })
                    .when('/report/kontainer-rekap-merk', {
                        templateUrl: 'views/report/kontainer-rekap-merk.html',
                        controller: 'ReportKontainerController'
                    })
                    .when('/report/kontainer-pl', {
                        templateUrl: 'views/report/kontainer-pl.html',
                        controller: 'ReportKontainerController'
                    })
                    .when('/report/bast', {
                        templateUrl: 'views/report/bast.html',
                        controller: 'ReportBastController'
                    })
                    .otherwise({
//        redirectTo: 'views/404.html'
                        templateUrl: 'views/404.html',
                    });
        })
        .directive('ngEnter', function () {
            return function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {
                    if (event.which === 13) {
                        scope.$apply(function () {
                            scope.$eval(attrs.ngEnter);
                        });

                        event.preventDefault();
                    }
                });
            };
        })
        .filter('propsFilter', function () {
            return function (items, props) {
                var out = [];

                if (angular.isArray(items)) {
                    items.forEach(function (item) {
                        var itemMatches = false;

                        var keys = Object.keys(props);
                        for (var i = 0; i < keys.length; i++) {
                            var prop = keys[i];
                            var text = item[prop] == null ? '' : props[prop].toLowerCase();
                            if (item[prop] != null && item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                                itemMatches = true;
                                break;
                            }
                        }

                        if (itemMatches) {
                            out.push(item);
                        }
                    });
                } else {
                    // Let the output be the input untouched
                    out = items;
                }

                return out;
            };
        })
        .directive('whenScrolled', function () {
            return function (scope, elm, attr) {
                var raw = elm[0];

                elm.bind('scroll', function () {
                    if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                        scope.$apply(attr.whenScrolled);
                    }
                });
            };
        })