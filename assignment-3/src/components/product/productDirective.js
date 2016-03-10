"use strict";

angular.module("project3App").directive("product", 
function product() {
	return {
		restrict: "E",
		templateUrl: "components/Product/product.html"
	};
});