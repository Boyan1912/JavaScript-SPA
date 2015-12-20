(function () {
    'use strict';

    function GameController($rootScope, animationService, $location) {
        var vm = this;

        vm.loggedinOne = !!$rootScope.playerOne;
        vm.playerOne = $rootScope.playerOne;

        vm.loggedinTwo = !!$rootScope.playerTwo;
        vm.playerTwo = $rootScope.playerTwo;

        var wrapper = $('#game-wrapper');

        vm.showUp = function (element) {
            animationService.animateElement(element, 'bounceIn');
        }

        vm.animateGame = function () {
            animationService.animateElement(wrapper, 'zoomIn');
        }

        vm.logoutPlayerOne = function () {
            $rootScope.playerOne = undefined;
        }
        vm.logoutPlayerTwo = function () {
            $rootScope.playerTwo = undefined;
        }

        if (vm.playerOne) {
            vm.playerOne.symbol = 'X';
            vm.playerOne.turn = true;
            vm.playerOne.played = [];
        }
        if (vm.playerTwo) {
            vm.playerTwo.symbol = '0';
            vm.playerTwo.turn = !vm.playerOne.turn;
            vm.playerTwo.played = [];
        }

        var winningCombinations = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ]

        vm.registerClick = function (event) {
            animationService.animateOnEvent(event, 'swing');
            if (vm.playerOne && vm.playerTwo) {
                vm.symbol = vm.playerOne.turn ? vm.playerOne.symbol : vm.playerTwo.symbol;
            }
            var symbolProp = 'symbol' + event.target.id;

            if (!vm[symbolProp]) {
                vm[symbolProp] = vm.symbol;    
                
                if (vm.playerOne.turn) {
                    vm.playerOne.played.push(event.target.id);
                    if (checkForWinner(vm.playerOne)) {
                        toastr.warning(vm.playerOne.userName + ' wins!');
                        vm.playerOne.currency += 10;
                        vm.playerTwo.currency -= 10;
                        $location.url('/best');
                    }
                } else {
                    vm.playerTwo.played.push(event.target.id);
                    if (checkForWinner(vm.playerTwo)) {
                        toastr.warning(vm.playerTwo.userName + ' wins!');
                        vm.playerTwo.currency += 10;
                        vm.playerOne.currency -= 10;
                        $location.url('/best');
                    }
                }

                vm.playerOne.turn = !vm.playerOne.turn;
            }
        }

        function checkForWinner(player) {
            var played = player.played;
            var count = 0;
            for (var i = 0; i < winningCombinations.length; i++) {
                for (var j = 0; j < winningCombinations[i].length; j++) {
                    if (played.length >= 3)
                    {
                        for (var k = 0; k < vm.playerOne.played.length; k++) {

                            if (played[k] == winningCombinations[i][j]) {
                                count++;
                            }
                            if (count == 3) {
                                return true;
                            }
                        }
                    }
                }
                count = 0;
            }
        }

    }

    angular.module('TicTacToeApp.Controllers')
            .controller('GameController', ['$rootScope', 'animationService', '$location', GameController])
}());