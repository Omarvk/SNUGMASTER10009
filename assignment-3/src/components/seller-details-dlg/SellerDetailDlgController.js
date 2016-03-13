"use strict";

angular.module("project3App").controller("SellerDetailDlgController", 
function SellerDetailDlgController($scope, $routeParams, modalParam) {
	var productObj = modalParam;
	$scope.newProduct = {};
	if(productObj === undefined) {
		$scope.title = "sellersDlgDetail.Title";
		$scope.newProduct = {
			sId: Number($routeParams.id),
			product: {
				id: "",
				name: "",
				price: "",
				quantitySold: 0,
				quantityInStock: 0,
				imagePath: ""
			}
		};
	}else {
		$scope.title = "sellersDlgDetail.EditTitle";
		$scope.newProduct.product = productObj;
	}
	
	$scope.onOk = function onOk() {
		if($scope.newProduct.product.name.length === 0 && $scope.newProduct.product.price.length === 0 && !isNaN($scope.newProduct.product.price)) {
			$scope.inputValidationName = true;
			$scope.InputValidationPrice = true;
			//$scope.InputValidationPriceNaN = true;
			return;
		}
		else if($scope.newProduct.product.name.length === 0) {
			$scope.inputValidationName = true;
			$scope.InputValidationPrice = false;
			$scope.InputValidationPriceNaN = false;
			return;
		}
		else if($scope.newProduct.product.price.length === 0) {
			$scope.inputValidationName = false;
			$scope.InputValidationPrice = true;
			$scope.InputValidationPriceNaN = false;
			return;
		}
		else if(isNaN($scope.newProduct.product.price)) {
			$scope.inputValidationName = false;
			$scope.InputValidationPrice = false;
			$scope.InputValidationPriceNaN = true;
			return;
		}
		else {
			$scope.$close($scope.newProduct);
		}
		
	};
	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};

});