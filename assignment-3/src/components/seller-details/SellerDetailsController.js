"use strict";

angular.module("project3App").controller("SellerDetailsController",
["$scope", "$routeParams", "AppResource", "centrisNotify", "SellerDetailDlg",
function SellerDetailsController($scope, $routeParams, AppResource, centrisNotify, SellerDetailDlg) {
	var id = $routeParams.id;
	$scope.tabs = true;
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
		SellerDetailDlg.show().then(function(newProduct) {
			AppResource.addSellerProduct(newProduct.sId, newProduct.product).success(function(product) {
				centrisNotify.success("sellerdetails.Messages.SaveSucceeded","sellerdetails.Add");
				$scope.products.push(product);
				// TODO: BÆTA VIÐ SELJANDA í listann
			}).error(function() {
				centrisNotify.error("sellerdetails.Messages.SaveFailed"); // json skráinn
			});
		});
	};
 	$scope.onEditProduct = function onEditProduct(product) {
		SellerDetailDlg.show(product).then(function(newProduct) {
			AppResource.updateProduct(newProduct.product.id, newProduct.product).success(function(product) {
				centrisNotify.success("sellerdetails.Messages.UpdateSucceeded", product.id);
			}).error(function() {
				centrisNotify.error("sellerdetails.Messages.SaveFailed"); // json skráinn
			});
		});
	};


}]);




