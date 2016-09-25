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
                    templateUrl: 'app/library/final-report.html',
                    controller: 'FinalReportCtrl'
                }
            }
        })
});
