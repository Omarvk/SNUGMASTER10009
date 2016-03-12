"use strict";

angular.module("project3App").directive("productTab", 
["AppResource", "$routeParams",
function productTab(AppResource, $routeParams) {
	return {
		restrict: "E",
		templateUrl: "components/products-tab/productsTab.html",
		link: function(scope, element, attrs) {
			var id = $routeParams.id;
			AppResource.getSellerProducts(Number(id)).success(function(products) {
				scope.products = products;
			}).error(function() {
				// error
			});
		}
		//scope: {}; // þitt scope  name: "@" til að ná í scope úr controller
	};
}]);


