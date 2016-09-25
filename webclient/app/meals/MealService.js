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
          getStats: function(library,mealtype){
              var url ="/weeklyMealReport?siteName="+library
              if(mealtype != 'All')
              url = url + "&meal.type="+mealtype
            //   var url = "/api/mealstats-server.json"
              return $http.get(url).then(function(result){
                  var emptyArr = []
                  if(mealtype == 'All')
                      return emptyArr
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
          },
          saveRefLogs : function(payload){
              var url ="/api/reflogs"
              return $http.post(url, payload)
                .then(function (result) {
                    return result.data;
              });
          },
          saveFoodLogs : function(payload){
              var url ="/api/foodlogs"
              return $http.post(url, payload)
                .then(function (result) {
                    return result.data;
              });
          }         
      }
});