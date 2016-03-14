"use strict";

angular.module("project3App").directive("productTab", 
["AppResource", "$routeParams", "centrisNotify", "SellerDetailDlg",
function productTab(AppResource, $routeParams, centrisNotify, SellerDetailDlg) {
	return {
		restrict: "E",
		templateUrl: "components/products-tab/productsTab.html",
		controller: function($scope) {
			var id = $routeParams.id;
			var getProducts = function getProducts() {
				AppResource.getSellerProducts(Number(id)).success(function(products) {
					$scope.products = products;
				}).error(function() {
					centrisNotify.error("sellerdetails.Messages.LoadFailed"); // json skráinn
				});
			};
			getProducts();
			$scope.$on('addProduct', function(event, newProducts) {
				//console.log(newProducts + " tesds");
				$scope.products.push(newProducts);
			});
		}
	};
}]);


