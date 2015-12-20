(function () {
    'use strict';

    function BestController($rootScope, animationService) {
        var vm = this;

        vm.players = $rootScope.displayUsers;

        var list = $('#bestPlayers');
        vm.animShow = function () {
            animationService.animateElement(list, 'bounceInUp');
        }
    }

    angular.module('TicTacToeApp.Controllers')
            .controller('BestController', ['$rootScope', 'animationService', BestController])
}());