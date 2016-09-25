'use strict';

angular.module('app.home').controller('HomeController',
 function ($scope,DTOptionsBuilder, DTColumnBuilder,DTColumnDefBuilder,mealService,$uibModal) {
    $scope.test 
    $scope.refLogList
    $scope.foodLogList
    var vm = this;
    
    $scope.getLogs = function(){
        var amoment = moment().startOf('week');        
        var weekStart = amoment.format('YYYY-MM-DD')

        mealService.getRefLogs(weekStart).then(function(result){
            var resultStats = []
            angular.forEach(result, function(item) {                
                var stat = {
                    date : moment(item.date).format('YYYY-MM-DD'),
                    time : item.time,
                    temp : item.temp
                }
                resultStats.push(stat)
            });
            $scope.refLogList = resultStats

        })
        mealService.getFoodLogs(weekStart).then(function(result){
            var resultStats = []
            angular.forEach(result, function(item) {                
                var stat = {
                    date : moment(item.date).format('YYYY-MM-DD'),
                    time : item.time,
                    temp : item.temp,
                    foodName : item.foodName,
                    comments : item.comments
                }
                resultStats.push(stat)
            });
            $scope.foodLogList = resultStats
        })
    }
    var init = function(){
        $scope.getLogs()
         vm.dtOptions1 = DTOptionsBuilder.newOptions()
          .withOption('aLengthMenu', [[-1], ['All']]) // Length of how many to show per pagination.
          .withOption('oLanguage',{"sSearch": "Search:"})
          .withPaginationType('full_numbers');  
        //   .withOption('bFilter', false);
        vm.dtColumns1 = [
            // dtColumns1.newColumnDef(0).notVisible()
        ];
         
        vm.dtOptions2 = DTOptionsBuilder.newOptions()
          .withOption('aLengthMenu', [[-1], ['All']]) // Length of how many to show per pagination.
          .withOption('oLanguage',{"sSearch": "Search:"})
          .withPaginationType('full_numbers')
          .withOption('bFilter', false);
        
        $scope.test = "this is atest"
    }()

    $scope.showRefDialog = function(index){
        var data = $scope.refLogList[index]
        var modalInstance = $uibModal.open({
            templateUrl: 'app/home/refmodal.html',
            controller:'RefDialogModal',
            size: 'md',
            resolve:{
                 item : function () {
                    return data;
                    } 
            }
        })

        modalInstance.result.then(function () {
            $scope.getLogs()
        });  

    }
    $scope.showFoodDialog = function(index){
        var data = $scope.foodLogList[index]
        var modalInstance = $uibModal.open({
            templateUrl: 'app/home/foodmodal.html',
            controller:'FoodDialogModal',
            size: 'md',
            resolve:{
                 item : function () {
                    return data;
                    } 
            }
        })
         modalInstance.result.then(function () {
            $scope.getLogs()
        });

    }
});
angular.module('app.home').controller('RefDialogModal',function($scope,item,$uibModalInstance,mealService)
{
    $scope.tst ="hello"
    $scope.item = item
    $scope.isEditMode = false
    $scope.init = function(){
        if(item)
           $scope.isEditMode = true
        else
            $scope.isEditMode = false   
          
    }()
    $scope.submit = function(){
         mealService.saveRefLogs($scope.item).then(function(result){
            $scope.foodLogList = result
            alert("Succesfully submitted")
            $uibModalInstance.close()

        }) 
    }
    $scope.cancel = function(){
              $uibModalInstance.dismiss('cancel');

    }
})
angular.module('app.home').controller('FoodDialogModal',function($scope,item,$uibModalInstance,mealService)
{
    $scope.tst ="hello"
    $scope.item = item
    $scope.isEditMode = false
    $scope.init = function(){
        if(item)
           $scope.isEditMode = true
        else
            $scope.isEditMode = false   
    }()
    $scope.submit = function(){
        mealService.saveFoodLogs($scope.item).then(function(result){
            $scope.foodLogList = result
            alert("Foodlog Succesfully submitted")
                    $uibModalInstance.close()

        }) 
    }
    $scope.cancel = function(){
              $uibModalInstance.dismiss('cancel');

    }
})

