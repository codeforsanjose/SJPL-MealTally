"use strict";

angular.module('app.dashboard').directive('mealLineGraphC', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="chart no-padding"></div>',
        link: function(scope, element){            
            var served_data = [{
                "elapsed" : "Jan",
                "served" : 34,
                "wasted" :22,
            }, {
                "elapsed" : "Feb",
                "served" : 24,
                "wasted" : 19
            }, {
                "elapsed" : "Mar",
                "served" : 33,
                "wasted" : 5
            }, {
                "elapsed" : "Apr",
                "served" : 29,
                "wasted" : 2
            }, {
                "elapsed" : "May",
                "served" : 33,
                "wasted" : 5
            }];
            Morris.Line({
                element : element,
                data : served_data,
                xkey : 'elapsed',
                ykeys : ['served', 'wasted'],
                labels : ['value'],
                parseTime : false
            });
            
        }
    }
});