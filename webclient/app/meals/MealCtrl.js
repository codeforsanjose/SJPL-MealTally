'use strict';

angular.module('app.meal').controller('MealAddController', function ($scope) {
    $scope.test 
    $scope.ameal = {
        "date": '',
        "siteName": '',
        "meal": {
            "type": '',
            "vendorReceived": 0,
            "carryOver": 0,
            "consumed": {
                "child": 0,
                "adult": 0,
                "volunteer": 0
            },
            "damaged": 0,
            "wasted": 0

        } 
    }
  
    var init = function(){
        $scope.test = "Hello World This is Meal"
    }()
});