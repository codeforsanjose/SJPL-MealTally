"use strict";

angular.module('app.dashboard').directive('mealLineGraphC', function(mealService){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        scope : {
            statsdata : '='
        },
        link: function(scope, element){     
            scope.$watch('statsdata', function() {
                Morris.Line({
                    element : element,
                    data : scope.statsdata,
                    xkey : 'elapsed',
                    ykeys : ['served', 'wasted'],
                    labels : ['value'],
                    parseTime : false
                });
            })
        }
    }
});