(function(angular) {
    'use strict';

    var app = angular.module('puzzleApp', ['slidingPuzzle']);

    /**
     * Advanced sliding puzzle controller
     */
    app.controller('slidingAdvancedCtrl', function($scope) {
        $scope.puzzle = 
            { src: './img/Mario.png', title: 'Mario', rows: 3, cols: 3 };
    });

})(window.angular);