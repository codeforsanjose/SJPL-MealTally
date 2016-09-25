'use strict';

angular.module('app.home').controller('HomeController',
 function ($scope,DTOptionsBuilder, DTColumnBuilder,DTColumnDefBuilder,mealService,$uibModal) {
    $scope.test 
    $scope.refLogList
    $scope.foodLogList
    var vm = this;

    var init = function(){
        mealService.getRefLogs().then(function(result){
            $scope.refLogList = result
        })
        mealService.getFoodLogs().then(function(result){
            $scope.foodLogList = result
        })

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
        alert("data submitted" +  $scope.isEditMode)
         mealService.saveRefLogs($scope.item).then(function(result){
            $scope.foodLogList = result
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
        mealService.saveFoodLogs($scope.item).then(function(result){
            $scope.foodLogList = result
        }) 
          
    }()
    $scope.submit = function(){
        alert("data submitted" +  $scope.isEditMode)
    }
    $scope.cancel = function(){
              $uibModalInstance.dismiss('cancel');

    }
})

