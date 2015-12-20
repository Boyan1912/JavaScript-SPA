(function () {
    'use strict';

    function HomeController(animationService) {
        var vm = this;

        var jumbotron = $('#homescreen');

        vm.showAnimated = function () {
            animationService.animateElement(jumbotron, 'bounceInDown');
        }

        vm.enterSite = function () {
            animationService.animateOnRemoval(jumbotron, 'zoomOutDown');
        }

    }
        angular.module('TicTacToeApp.Controllers')
            .controller('HomeController', ['animationService', HomeController])
}());