"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.isLoading = true;
	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
		$scope.isLoading = false;
	}).error(function()	{
		$scope.isLoading = false;
	});

	$scope.onAddSeller = function onAddSeller() {
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(seller) {
				//toastr.success("tókst", "bæta við!");
				centrisNotify.success("sellers.Messages.SaveSucceeded","sellers.Add");
			}).error(function() {
				centrisNotify.error("sellers.Messages.SaveFailed"); // json skráinn
			});
		});

	};
	$scope.onEditSeller = function onEditSeller() {
		SellerDlg.show().then(function(seller) {
			var id = 1;
			AppResource.updateSeller(id, seller).success(function(seller) {
				//toastr.success("tókst", "bæta við!");
				centrisNotify.success("sellers.Messages.SaveSucceeded","sellers.Add");
			}).error(function() {
				centrisNotify.error("sellers.Messages.SaveFailed"); // json skráinn
			});
		});

	};

});