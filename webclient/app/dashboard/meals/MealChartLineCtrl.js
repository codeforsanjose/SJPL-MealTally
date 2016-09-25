'use strict';

angular.module('app.meal').controller('MealChartLineCtrl', function ($scope) {
    $scope.test ="hello world"
    $scope.libName="DR.ROBERTO CRUZ-ALUM ROCK"


    $scope.changeView = function(libName){
       $scope.libName = libName
    }
});