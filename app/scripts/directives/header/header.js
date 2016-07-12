/**
 * Created by xc on 2016/5/13.
 */
(function () {

    "use strict";

    /**
     *  头部指令。
     */
    angular
        .module('myApp')
        .directive('header', function () {
            return {
                templateUrl: 'scripts/directives/header/header.html',
                restrict: 'E',
                replace: true
            }
        });
})();


