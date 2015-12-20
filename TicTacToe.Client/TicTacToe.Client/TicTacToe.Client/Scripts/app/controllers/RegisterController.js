(function () {
    'use strict';

    function RegisterController(animationService, serverRequestsService, $location) {
        var vm = this;
        
        var formHtml = $('#registerFormHtml');

        vm.showLeftToRight = function () {
            animationService.animateElement(formHtml, 'slideInRight');
        }

        vm.validateConfirmPassword = function (user) {
            if (user.password !== user.confirmPassword) {
                toastr.error('Password and Confirm Password fields do not match!');
            }
        }

        vm.register = function (user, registerForm) {
            
            if (registerForm.$invalid) { 
                toastr.error('Form is not valid!');
                return;
            }

            serverRequestsService.registerUser(user);
            toastr.success('Registration Successful!');
            $location.url('/play');
        }


    }

    angular.module('TicTacToeApp.Controllers')
            .controller('RegisterController', ['animationService', 'serverRequestsService', '$location', RegisterController])
}());