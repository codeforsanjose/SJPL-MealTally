"use strict";

angular.module('app.graphs').directive('mealNormalBarGraph', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        scope : {
            statsdata : '=',
            leaveStayChart : '@'

        },
        link: function(scope, element){           
            scope.$watch('statsdata', function() {                
                scope.leaveStayChart = null
                if (scope.leaveStayChart == null && scope.statsdata.length>0) {
                    scope.leaveStayChart = Morris.Bar({
                        element : element,
                        data : scope.statsdata, 
                        parseTime : false,
                        xkey : 'elapsed',
                        ykeys : ['served', 'wasted', 'carryover'],
                        labels : ['Served', 'Wasted', 'Carryover']
                    });
                }
            })
        }
    }
});