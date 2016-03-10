"use strict";

angular.module("project3App").controller("SellerDetailsController",
["$scope", "$routeParams", "AppResource", "centrisNotify", "SellerDetailDlg",
function SellerDetailsController($scope, $routeParams, AppResource, centrisNotify, SellerDetailDlg) {
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
	$scope.onAddProduct = function onAddProduct() {
		SellerDetailDlg.show().then(function(product) {
			AppResource.addSellerProduct(product).success(function() {
				centrisNotify.success("sellerdetails.Messages.SaveSucceeded","sellerdetails.Add");
				// TODO: BÆTA VIÐ SELJANDA í listann
			}).error(function() {
				centrisNotify.error("sellerdetails.Messages.SaveFailed"); // json skráinn
			});
		});
	};

}]);




