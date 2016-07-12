(function () {
    'use strict';

    angular.module('myApp')
        .directive('sidebarSearch', function () {
            return {
                templateUrl: 'scripts/directives/sidebar/sidebar-search/sidebar-search.html',
                restrict: 'E',
                replace: true,
                scope: {},
                controller: function ($scope) {
                    $scope.selectedMenu = 'home';
                }
            }
        });

})();

