(function () {
    'use strict';

    var serverRequestsService = function ($resource, $http, $q, $rootScope, baseUrl) {

        var registerUser = function (user) {
            
            var displayUser = {};
            angular.copy(user, displayUser);
            displayUser.currency = 100;
            displayUser.id = $rootScope.displayUsers.length;
            $rootScope.displayUsers.push(displayUser);
            
            // TODO
            var defered = $q.defer();
            $http.post(baseUrl + 'api/account/register', user)
                .then(function (data) {
                    defered.resolve(true);
                }, function (err) {
                    defered.reject(err);
                });

            return defered.promise;
            //TODO
          //  var User = $resource(
          //     "/api/Account/:UserInfo",
          //     { "UserInfo": "@UserInfo" },
          //      { 'register': { method: "POST" } }
          //);

          //  var response = User.register(user);
          //  console.log(response.$promise);
            
            // TODO
            // CAN'T ACCESS http://localhost:33257/Help to see available services
            // CORS on Server not enabled
        }



        return {
            registerUser: registerUser
        };
    };

    angular
        .module('TicTacToeApp.Services')
        .factory('serverRequestsService', ['$resource', '$http', '$q', '$rootScope', 'baseUrl', serverRequestsService]);
}());