"use strict";

angular.module("project3App").controller("SellerDetailsController",
["$scope", "$routeParams", "AppResource", "centrisNotify", "SellerDetailDlg", "$rootScope",
function SellerDetailsController($scope, $routeParams, AppResource, centrisNotify, SellerDetailDlg, $rootScope) {
	var id = $routeParams.id;
	$scope.tabs = true;
	AppResource.getSellerDetails(Number(id)).success(function(seller){
		$scope.id = seller.id;
		$scope.name = seller.name;
		$scope.category = seller.category;
		$scope.img = seller.imagePath;
	}).error(function()	{
		centrisNotify.error("sellerdetails.Messages.LoadFailed"); // json skráinn
	});
	$scope.onAddProduct = function onAddProduct() {
		SellerDetailDlg.show().then(function(newProduct) {
			AppResource.addSellerProduct(newProduct.sId, newProduct.product).success(function(product) {
				centrisNotify.success("sellerdetails.Messages.SaveSucceeded","sellerdetails.Add");
				$rootScope.$broadcast('addProduct', product);
			}).error(function() {
				centrisNotify.error("sellerdetails.Messages.SaveFailed"); // json skráinn
			});
		});
	};
 	$scope.onEditProduct = function onEditProduct(product) {
		SellerDetailDlg.show(product).then(function(newProduct) {
			AppResource.updateProduct(newProduct.product.id, newProduct.product).success(function(product) {
				centrisNotify.success("sellerdetails.Messages.UpdateSucceeded");
			}).error(function() {
				centrisNotify.error("sellerdetails.Messages.SaveFailed"); // json skráinn
			});
		});
	};
}]);