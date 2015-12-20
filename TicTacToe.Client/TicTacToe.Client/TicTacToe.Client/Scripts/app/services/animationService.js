(function () {
    'use strict';
    var animationBaseClass = 'animated';

    var animationService = function () {

        var animateOnEvent = function ($event, animationType) {

            animationType = animationType || 'shake';
            var fullAnimationClass = animationBaseClass + ' ' + animationType;

            $($event.target).addClass(fullAnimationClass)
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                $(this).removeClass(fullAnimationClass);
                            });
        };

        var animateElement = function (element, animationType) {

            animationType = animationType || 'shake';
            var fullAnimationClass = animationBaseClass + ' ' + animationType;

            $(element).addClass(fullAnimationClass)
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                $(this).removeClass(fullAnimationClass);
                            });
        };

        var animateOnElementRemoval = function ($event, animationType) {

            animationType = animationType || 'rotateOut';
            var fullAnimationClass = animationBaseClass + ' ' + animationType;

            var element = $event.target;
            
            $(element).addClass(fullAnimationClass)
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                $(this).css('display', 'none');
                            });
        }

        var animateOnRemoval = function (element, animationType) {

            animationType = animationType || 'rotateOut';
            var fullAnimationClass = animationBaseClass + ' ' + animationType;
            
            $(element).addClass(fullAnimationClass)
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                $(this).css('display', 'none');
                            });
        }

       
        return {
            animateOnEvent: animateOnEvent,
            animateElement: animateElement,
            animateOnElementRemoval: animateOnElementRemoval,
            animateOnRemoval: animateOnRemoval
        };
    };

    angular
        .module('TicTacToeApp.Services')
        .factory('animationService', [animationService]);
}());