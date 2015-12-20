(function () {
    'use strict';

    function MainController(animationService) {
        var vm = this;

        vm.animate = function ($event, animationType) {
            animationService.animateOnEvent($event, animationType);
        }
    }

    angular.module('TicTacToeApp')
            .controller('MainController', ['animationService', MainController])
}());


