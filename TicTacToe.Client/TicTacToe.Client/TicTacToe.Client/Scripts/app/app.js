(function () {
    'use strict';

    var CONTROLLER_VIEW_MODEL_NAME = 'vm';

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/register', {
                templateUrl: 'partials/register.html',
                controller: 'RegisterController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'LoginController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/play', {
                templateUrl: 'partials/play.html',
                controller: 'GameController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/best', {
                templateUrl: 'partials/best.html',
                controller: 'BestController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .otherwise({
                redirectTo: '/'
            })
    }

    function run($rootScope) {
        // For testing
        $rootScope.displayUsers = [
            {
                email: 'pesho@mail.bg',
                password: 'password',
                userName: 'Pesho',
                currency: 150,
                id: 0
            },
            {
                email: 'gosho@mail.bg',
                password: 'password',
                userName: 'Gosho',
                currency: 50,
                id: 1
            }
        ];
    }
    
    angular.module('TicTacToeApp.Services', ['ngResource']);
    angular.module('TicTacToeApp.Controllers', ['TicTacToeApp.Services']);

    angular.module('TicTacToeApp', ['ngRoute', 'TicTacToeApp.Controllers'])
            .config(['$routeProvider', config])
            .run(['$rootScope', run])
            .constant('baseUrl', 'http://localhost:33257/');
}());
