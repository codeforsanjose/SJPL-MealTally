'use strict';  
angular.module('app.meal').service('MealService', ['$http','$global',function ($http,$global) {
      return {       
          addMeal : function(payload){
              var url = $global.getServerAddr("/rest/item")
              return $http.post(url, payload)
                .then(function (result) {
                    return result.data;
              });
          }         
      }
}]);