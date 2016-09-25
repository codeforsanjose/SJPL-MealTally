'use strict';  
angular.module('app.meal').service('mealService', function ($http) {
      return {       
          addMeal : function(payload){
              var url ="/meal"
              return $http.post(url, payload)
                .then(function (result) {
                    return result.data;
              });
          }         
      }
});