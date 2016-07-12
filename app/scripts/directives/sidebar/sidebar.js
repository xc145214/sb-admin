(function () {
    'use strict';


    angular
        .module('myApp')
        .directive('sidebar', ['$location', function () {
            return {
                templateUrl: 'scripts/directives/sidebar/sidebar.html',
                restrict: 'EA',
                replace: true,
                scope: {},
                controller: function ($scope) {
                    $scope.selectedMenu = 'dashboard';
                    $scope.collapseVar = 1;
                    $scope.multiCollapseVar = 3;

                    $scope.menus = [
                        {
                            name: "Dashboard",
                            state: 'dashboard.home',
                            icon: 'fa-dashboard',
                            children: null
                        },
                        {
                            name: "Charts",
                            state: 'dashboard.chart',
                            icon: 'fa-bar-chart-o',
                            children: null
                        }, {
                            name: "Tables",
                            state: 'dashboard.table',
                            icon: 'fa-table',
                            children: null
                        }, {
                            name: "Forms",
                            state: 'dashboard.Forms',
                            icon: 'fa-edit',
                            children: null
                        }, {
                            name: "UI Elements",
                            state: null,
                            icon: 'fa-wrench',
                            children: [
                                {
                                    name: "Panels and Wells",
                                    state: 'dashboard.panels-wells',
                                    icon: null,
                                    children: null
                                }, {
                                    name: "Buttons",
                                    state: 'dashboard.buttons',
                                    icon: null,
                                    children: null
                                }, {
                                    name: "Notifications",
                                    state: 'dashboard.notifications',
                                    icon: null,
                                    children: null
                                }, {
                                    name: "Typography",
                                    state: 'dashboard.typography',
                                    icon: null,
                                    children: null
                                }, {
                                    name: "Icons",
                                    state: 'dashboard.icons',
                                    icon: null,
                                    children: null
                                }, {
                                    name: "Grid",
                                    state: 'dashboard.grid',
                                    icon: null,
                                    children: null
                                }
                            ]

                        }, {
                            name: "Multi-Level Dropdown",
                            state: null,
                            icon: 'fa-sitemap',
                            children: [
                                {
                                    name: "Second Level Item",
                                    state: 'dashboard.grid',
                                    icon: null,
                                    children: null
                                }, {
                                    name: "Second Level Item",
                                    state: 'dashboard.grid',
                                    icon: null,
                                    children: null
                                }, {
                                    name: "Third Level Item",
                                    state: null,
                                    icon: null,
                                    children: [
                                        {
                                            name: "Third Level Item",
                                            state: 'dashboard.grid',
                                            icon: null,
                                            children: null
                                        }, {
                                            name: "Third Level Item",
                                            state: 'dashboard.grid',
                                            icon: null,
                                            children: null
                                        }, {
                                            name: "Third Level Item",
                                            state: 'dashboard.grid',
                                            icon: null,
                                            children: null
                                        }
                                    ]
                                }
                            ]
                        }

                    ];


                    $scope.check = function (x) {

                        if (x == $scope.collapseVar) {
                            $scope.collapseVar = 0;
                        } else {
                            $scope.collapseVar = x;
                        }
                    };

                    $scope.multiCheck = function (y) {

                        if (y == $scope.multiCollapseVar)
                            $scope.multiCollapseVar = 0;
                        else
                            $scope.multiCollapseVar = y;
                    };

                }
            }
        }]);
})();

