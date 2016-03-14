"use strict";

angular.module("project3App").directive("getProduct", 
function getProduct() {
	return {
		restrict: "E",
		templateUrl: "components/product/product.html"	
	};
});

