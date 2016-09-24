"use strict";


angular.module('app.library', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.library', {
            url: '/library',
            data: {
                title: 'Blank'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/library/library-view.html',
                    controller: 'LibraryController'
                }
            },
            resolve: {
                test: function(myTestService){
                    return myTestService.getTest().then(function(result){
                        return result.message
                    })
                }
            }
        })
});
