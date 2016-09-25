'use strict';

angular.module('app.meal').controller('MealAddController', function ($scope,mealService) {
    $scope.isMealAdded=false
    $scope.test ="hello world"
    $scope.ameal = {
        "date": '',
        "siteName": '',
        "meal": {
            "type": '',
            "vendorReceived":'' ,
            "carryOver":'' ,
            "consumed": {
                "child":'' ,
                "adult": '',
                "volunteer":'' 
            },
            "damaged": '',
            "wasted": ''

        } 
    }

    $scope.addMeal = function(){
        mealService.addMeal($scope.ameal).then(function(result){
            $scope.isMealAdded = true
        })
    }
  
    var init = function(){
        $scope.test = "Hello World This is Meal"
    }()
});