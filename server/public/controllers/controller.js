var myApp = angular.module("myApp", []);
myApp.controller("AppController", [ '$scope', '$http', function ($scope, $http){
	console.log("Hello World from controller");
	$http.get("/meal").success(function(response){
		console.log("I got the data I requested");
		$scope.meal = response;
	});
}]);
