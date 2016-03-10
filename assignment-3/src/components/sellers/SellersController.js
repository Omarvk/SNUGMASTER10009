"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.isLoading = true;
	AppResource.getSellers().success(function(sellers) {
		for(var s in sellers) {
			if(sellers.hasOwnProperty(s)) {
				console.log(s + " " + sellers[s].name+ " " + sellers[s].id);
			}
		}
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
				//var newSeller = seller;
				//$scope.sellers.push(seller);
				// TODO: BÆTA VIÐ SELJANDA í listann
			}).error(function() {
				centrisNotify.error("sellers.Messages.SaveFailed"); // json skráinn
			});
		});
		/*var peterSellers = {
			name: "Peter Sellers",
			category: "Movies",
			imagePath: "link"
		};*/
		

	};

});