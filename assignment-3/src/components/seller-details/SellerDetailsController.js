"use strict";

angular.module("project3App").controller("SellerDetailsController",
["$scope", "$routeParams", "AppResource", "centrisNotify",
function SellerDetailsController($scope, $routeParams, AppResource, centrisNotify) {
	var id = $routeParams.id;
	AppResource.getSellerDetails(Number(id)).success(function(seller){
		$scope.id = seller.id;
		$scope.name = seller.name;
		$scope.category = seller.category;
		$scope.img = seller.imagePath;
	}).error(function()	{
		//$scope.isLoading = false;
		centrisNotify.error("sellerdetails.Messages.LoadFailed"); // json skráinn
	});

}]);




