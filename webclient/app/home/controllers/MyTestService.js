'use strict';  

angular.module('app.home').service('myTestService', function ($http) {
      return {
         getTest : function(){
            var baseUrl = "http://localhost:8080"
            var url = "/simple"
            var apiUrl = baseUrl + url
              return $http.get(apiUrl)
                .then(function (result) {
                    return result.data;
                });
         }
        //  ,
        //  saveTest : function(payload){
        //     var url = $global.getServerAddr("/simple")
        //     return $http.post(url, payload)
        //     .then(function (result) {
        //         return result.data;
        //     });
        //  }
      }
});