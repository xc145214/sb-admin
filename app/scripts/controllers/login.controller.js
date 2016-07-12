/**
 * Created by xc on 2016/5/13.
 */

(function () {
    "use strict";

    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$state', '$localStorage'];

    function LoginController($scope, $state, $localStorage) {
        var vm = $scope;


        vm.login = function () {

            $localStorage.$default(
                vm.user
            );
            $state.go('dashboard.home')
        }
    }

})();
