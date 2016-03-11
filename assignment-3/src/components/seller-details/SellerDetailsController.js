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
	$scope.onCheckTab = function onCheckTab() {
		console.log("wadasda");
		if($scope.tabs === true) {
			$scope.tabs = false;
		}else {
			$scope.tabs = true;
		}
 	};
	/*SellerDetailDlg.show(product).then(function(product) {
		AppResource.updateSeller(Number(product.sId), product).success(function(product) {
			//toastr.success("tókst", "bæta við!");
			centrisNotify.successWithUndo("sellers.Messages.UpdateSucceeded", seller.name);
		}).error(function() {
			centrisNotify.error("sellers.Messages.SaveFailed"); // json skráinn
		});
	});*/	


}]);




