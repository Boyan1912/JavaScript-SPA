(function () {
    'use strict';

    function LoginController(animationService, $location, $rootScope) {
        var vm = this;

        var wrapper = $('#loginFormWrapper');

        vm.animateOnShow = function () {
            animationService.animateElement(wrapper, 'bounceInDown');
        }

        vm.animateOnExit = function () {
            animationService.animateOnElementRemoval(wrapper, 'bounceOutUp');
            
            $location.url('/play');
        }

        vm.validateForm = function (user) {
            for (var i = 0; i < $rootScope.displayUsers.length; i++) {
                if ($rootScope.displayUsers[i].email === user.email) {
                    if ($rootScope.displayUsers[i].password !== user.password) {
                        toastr.warning('Password did not match!');
                        return;
                    } else {
                        toastr.success('Welcome back ' + $rootScope.displayUsers[i].userName);
                        if (!$rootScope.playerOne) {
                            $rootScope.playerOne = $rootScope.displayUsers[i];
                        } else if (!$rootScope.playerTwo) {
                            $rootScope.playerTwo = $rootScope.displayUsers[i];
                        }

                        vm.animateOnExit();
                        return;
                    }
                }
            }
            toastr.error('E-mail not found!');
        }

    }

    angular.module('TicTacToeApp.Controllers')
            .controller('LoginController', ['animationService', '$location', '$rootScope', LoginController])
}());