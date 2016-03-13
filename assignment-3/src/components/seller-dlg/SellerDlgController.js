"use strict";

angular.module("project3App").controller("SellerDlgController", 
function SellerDlgController($scope, modalParam) {
	var sellerObj = modalParam.seller;
	if(sellerObj === undefined) {
		$scope.title = "sellersDlg.Title";
		$scope.seller = {
			id:         "",
			name: 		"",
			category: 	"",
			imagePath: 	""
		};
	}else {
		$scope.title = "sellersDlg.EditTitle";
		$scope.seller = sellerObj;
	}
	
	$scope.onOk = function onOk() {
		// TODO: VALIDATIOON!! BANK
		if($scope.seller.name.length === 0){
			//birta valdiation skilaboð!!!
			return;
		}else {
			$scope.$close($scope.seller);
		}
		
	};
	$scope.onCancel = function onCancel() {
		$scope.$dismiss(sellerObj);
	};

});