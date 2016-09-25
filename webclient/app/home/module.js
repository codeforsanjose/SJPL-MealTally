"use strict";


angular.module('app.home', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.home', {
            url: '/logs',
            data: {
                title: 'Logs'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/home/views/logs.html',
                    controller: 'HomeController as datatables'
                }
            }
            // resolve: {
            //     test: function(myTestService){
            //         return myTestService.getTest().then(function(result){
            //             return result.message
            //         })
            //     }
            // }
        })
});
