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
                if(scope.statsdata.length ==0)
                   return
                Morris.Line({
                    element : element,
                    data : scope.statsdata,
                    xkey : 'date',
                    ykeys : ['consumed', 'wasted'],
                    labels : ['Total Consumed', 'Total Wasted'],
                    parseTime : false
                });
            })
        }
    }
});