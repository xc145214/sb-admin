/**
 * Created by xc on 2016/5/13.
 */
(function () {
    "use strict";

    /**
     * app 路由配置
     */
    angular
        .module('myApp')
        .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider'];

    function routerConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        /**
         * oc.lazyload配置
         */
        $ocLazyLoadProvider.config({
            debug: true,//debug模式，默认false
            events: true,
            modules: [
                {
                    name: 'w5c-validator',
                    files: [
                        'bower_components/w5c-validator/style.css'
                    ]
                }, {
                    name: 'app',
                    files: [
                        'scripts/directives/header/header.js',
                        'scripts/directives/header/header-notification/header-notification.js',
                        'scripts/directives/sidebar/sidebar.js',
                        'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }, {
                    name: "app.login",
                    files: [
                        'scripts/controllers/login.controller.js'
                    ]
                }, {
                    name: 'chart',
                    files: [
                        'scripts/controllers/chart.controller.js'
                    ]
                }, {
                    name: 'form',
                    files: [
                        'scripts/controllers/form.controller.js'
                    ]
                }]
        });


        /**
         * 默认页面
         */
        $urlRouterProvider.otherwise("/login");

        /**
         * 配置路由
         */
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard/main.html',
                resolve: {
                    loadModule: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(['w5c-validator', 'app']);
                    }
                }
            })
            .state('dashboard.home', {
                url: '/home',
                templateUrl: 'views/dashboard/home.html',
                resolve: {
                    loadModule: function ($ocLazyLoad) {
                        return $ocLazyLoad.load('app');
                    }
                }
            })
            .state('dashboard.chart', {
                ulr: '/chart',
                templateUrl: 'views/chart.html',
                resolve: {
                    loadModule: function ($ocLazyLoad) {
                        return $ocLazyLoad.load('chart');
                    }
                }
            })
            .state('dashboard.form', {
                ulr: '/form',
                templateUrl: 'views/form.html',
                resolve: {
                    loadModule: function ($ocLazyLoad) {
                        return $ocLazyLoad.load('form');
                    }
                }
            })
            .state('dashboard.table', {
                ulr: '/table',
                templateUrl: 'views/table.html'
            })
            .state('dashboard.panels-wells', {
                ulr: '/panels-wells',
                templateUrl: 'views/ui-elements/panels-wells.html'
            })
            .state('dashboard.buttons', {
                templateUrl: 'views/ui-elements/buttons.html',
                url: '/buttons'
            })
            .state('dashboard.notifications', {
                templateUrl: 'views/ui-elements/notifications.html',
                url: '/notifications'
            })
            .state('dashboard.typography', {
                templateUrl: 'views/ui-elements/typography.html',
                url: '/typography'
            })
            .state('dashboard.icons', {
                templateUrl: 'views/ui-elements/icons.html',
                url: '/icons'
            })
            .state('dashboard.grid', {
                templateUrl: 'views/ui-elements/grid.html',
                url: '/grid'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/pages/login.html',
                controller: 'LoginController',
                resolve: {
                    loadModule: function ($ocLazyLoad) {
                        return $ocLazyLoad.load('app.login');
                    }
                }
            });
    }
})();

