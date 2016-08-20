angular.module('ngTokensField', [])
.directive('ngTokensField', [function() {
    function controller($scope) {
        var tokens = $scope.tokens;

        $scope.removeToken = function(index) {
            tokens.splice(index, 1);
        }
    }
    function link(scope, elem, attr) {
        scope.inputText = '';

        var tokens = scope.tokens,
            input = elem.find('input')[0];

        elem.on('click', function(evt) {
            input.focus();
        });
        angular.element(input).on('keydown', function(evt) {
            if(evt.which === 13 || evt.which === 188) {
                scope.$apply(function() {
                    evt.preventDefault();
                    tokens.push(scope.inputText);
                    scope.inputText = '';
                })
            }
        });
    }
    return {
        scope: {
            tokens: '='
        },
        restrict: 'AE',
        template: '<span class="token" ng-repeat="token in tokens">' +
                    '{{token}}' +
                    '<a ng-click="removeToken($index)">X</a>' +
                    '</span>' +
                    '<span>{{inputText}}</span>' +
                    '<input class="token-input" size="1" ng-model="inputText"/>',
        controller: controller,
        link: link
    }
}]);