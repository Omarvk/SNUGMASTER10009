"use strict";

angular.module("project3App").directive("productTab", 
["AppResource", "$routeParams",
function productTab(AppResource, $routeParams) {
	return {
		restrict: "E",
		templateUrl: "components/products-tab/productsTab.html",
		controller: function($scope) {
			var id = $routeParams.id;
			var getProducts = function getProducts() {
				AppResource.getSellerProducts(Number(id)).success(function(products) {
					$scope.products = products;
				}).error(function() {
					// error
				});
			};
			getProducts();
			$scope.$on('addProduct', function(event, newProducts) {
				//console.log(newProducts + " tesds");
				$scope.products.push(newProducts);
			});

		}
		/*link: function(scope, element, attrs) {
			scope.$on('addProduct', function(event, newProducts) {
				//console.log(newProducts + " tesds");
				scope.products.push(newProducts);
			});
			var id = $routeParams.id;

			var getProducts = function getProducts() {
				AppResource.getSellerProducts(Number(id)).success(function(products) {
					scope.products = products;
				}).error(function() {
					// error
				});
			};
			getProducts();
			/*scope.$on('editProduct', function() {
				console.log(" tessddsds");
				scope.products = [];
				getProducts();
			});
		}*/
		
	};
}]);


