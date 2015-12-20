(function () {
    'use strict';

    var animateSlideInRight = function animateSlideInRight(animationService) {
        return {
            restrict: 'A',


            link: function (scope, element, attrs) {
                animationService.animateElement(element, 'slideInRight');
            }
        };
    }

    angular
            .module('TicTacToeApp.Controllers')
            .directive('animateSlideInRight', ['animationService', animateSlideInRight]);
}());