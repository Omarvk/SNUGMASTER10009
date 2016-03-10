"use strict";

angular.module("project3App").controller("SellerDetailDlgController", 
function SellerDetailDlgController($scope, $routeParams) {
	$scope.newProduct = {
		sId: Number($routeParams.id),
		product: {
			id: "",
			name: "",
			price: "",
			quantitySold: "",
			quantityInStock: "",
			imagePath: ""
		}
	};
	
	$scope.onOk = function onOk() {
		// TODO: VALIDATIOON!! BANK
		if($scope.newProduct.product.name.lenght === 0) {
			//birta valdiation skilaboð!!!
			return;
		}
		$scope.$close($scope.newProduct);
	};
	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};

});