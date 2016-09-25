"use strict";

angular.module('app.calendar').directive('mealChart', function ($log, $timeout) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/dashboard/meals/mealchart.tpl.html',
        controller:'MealChartLineCtrl',
        scope: {
            //events: "=events"
        },
        link: function (scope, element) {
        }
    }
});