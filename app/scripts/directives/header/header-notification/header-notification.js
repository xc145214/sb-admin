(function () {
    'use strict';

    angular.module('myApp')
        .directive('headerNotification', function () {
            return {
                templateUrl: 'scripts/directives/header/header-notification/header-notification.html',
                restrict: 'E',
                replace: true,
                controller: function ($scope) {
                    $scope.userName = "hong";
                }
            }
        });
})();






