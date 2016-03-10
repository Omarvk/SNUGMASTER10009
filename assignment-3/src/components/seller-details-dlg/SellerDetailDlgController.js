"use strict";

angular.module("project3App").controller("SellerDetailDlgController", 
function SellerDetailDlgController($scope, $routeParams) {
	var id = $routeParams.id;
	$scope.productInfo = {
		id: Number(id),
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
		if($scope.productInfo.product.name.lenght === 0) {
			//birta valdiation skilaboð!!!
			return;
		}
		$scope.$close($scope.seller);
	};
	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};

});