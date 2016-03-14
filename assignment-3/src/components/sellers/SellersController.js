"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
	$scope.isLoading = true;
	$scope.edited = false;
	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
		$scope.isLoading = false;
	}).error(function()	{
		$scope.isLoading = false;
		centrisNotify.error("sellers.Messages.LoadFailed");
	});

	$scope.onAddSeller = function onAddSeller() {
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(seller) {
				centrisNotify.success("sellers.Messages.SaveSucceeded","sellers.Add");
			}).error(function() {
				centrisNotify.error("sellers.Messages.SaveFailed"); // json skráinn
			});
		});

	};
	$scope.onEditSeller = function onEditSeller() {
		centrisNotify.success("sellers.Messages.PickUser");
		$scope.edited = true;
	};

	$scope.getSeller = function getSeller(seller) {
		SellerDlg.show(seller).then(function(seller) {
			
			AppResource.updateSeller(Number(seller.id), seller).success(function(seller) {
				centrisNotify.success("sellers.Messages.UpdateSucceeded", "sellers.Edit");
			}).error(function() {
				centrisNotify.error("sellers.Messages.UpdateFailed"); // json skráinn
			});
		});	
		$scope.edited = false;
	};

});