"use strict";
angular.module('app.meal', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.meal', {
            url: '/meal',
            data: {
                title: 'Meals'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/meals/meal-add.html',
                    controller: 'MealAddController'
                }
            }           
        })
});
