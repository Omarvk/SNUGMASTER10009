"use strict";

angular.module("project3App").controller("SellerDlgController", 
function SellerDlgController($scope, modalParam) {
	var sellerObj = modalParam.seller;
	if(sellerObj === undefined) {
		$scope.seller = {
			id:         "",
			name: 		"",
			category: 	"",
			imagePath: 	""
		};
	}else {
		$scope.seller = sellerObj;
	}
	
	$scope.onOk = function onOk() {
		// TODO: VALIDATIOON!! BANK
		if($scope.seller.name.lenght === 0){
			//birta valdiation skilaboð!!!
			return;
		}
		$scope.$close($scope.seller);
	};
	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};

});