"use strict";

angular.module("project3App").controller("SellerDetailDlgController", 
function SellerDetailDlgController($scope, $routeParams, modalParam) {
	var productObj = modalParam.product;
	$scope.newProduct = {};
	if(productObj === undefined) {
		$scope.title = "sellersDlgDetail.Title";
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
	}else {
		$scope.title = "sellersDlgDetail.EditTitle";
		$scope.newProduct.product = productObj;
	}
	
	$scope.onOk = function onOk() {
		// TODO: VALIDATIOON!! BANK
		if($scope.newProduct.product.name.length === 0) {
			//birta valdiation skilaboð!!!
			return;
		}else {
			$scope.$close($scope.newProduct);
		}
		
	};
	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};

});