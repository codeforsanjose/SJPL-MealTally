'use strict';  
angular.module('app.meal').service('mealService', function ($http) {
      return {       
          addMeal : function(payload){
              var url ="/meal"
              return $http.post(url, payload)
                .then(function (result) {
                    return result.data;
              });
          },
          getStats: function(){
              var url ="/api/mealstats.json"
              return $http.get(url).then(function(result){
                  return result.data
              })
          },
          getRefLogs:function(){
              var url="/api/reflogs.json"
               return $http.get(url).then(function(result){
                  return result.data
              })
          },    
          getFoodLogs:function(){
              var url="/api/foodlogs.json"
               return $http.get(url).then(function(result){
                  return result.data
              })
          }           
      }
});