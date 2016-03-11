"use strict";

angular.module("project3App").directive("productTop", 
["AppResource", "$routeParams",
function productTop(AppResource, $routeParams) {
	return {
		restrict: "E",
		templateUrl: "components/top-products-tab/productTop.html",
		link: function(scope, element, attrs) {
			var id = $routeParams.id;
			var topTen = [];
			AppResource.getSellerProducts(Number(id)).success(function(products) {
				for(var i = 0; i < products.length; i++) {
					topTen.push([products[i], products[i].quantitySold]);
				}
				//console.log(topTen.products + " asda");
				topTen.sort(function(t1, t2) {
					return t2[1] - t1[1] || t1[0] - t2[0];
				});
				topTen.length = 10;
				var getTop = [];
				for(var top in topTen) {
					getTop.push(topTen[top][0]);
				}
				scope.productsTop = getTop;
			}).error(function() {
				// error
			});
			/*scope {
				pId: "",
				name: "",
				price: "",
				quantitySold "",
				quantityInStock "";
				imagePath: "",
			}*/
		}
		//scope: {}; // þitt scope  name: "@" til að ná í scope úr controller
	};
}]);


