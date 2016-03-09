"use strict";

angular.module("project3App").controller("SellerDlgController", 
function SellerDlgController($scope) {

	$scope.seller = {
		id:         "",
		name: 		"",
		category: 	"",
		imagePath: 	""
	};
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