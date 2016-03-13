"use strict";

angular.module("project3App").controller("SellerDlgController", 
function SellerDlgController($scope, modalParam) {
	var sellerObj = modalParam;
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
		if($scope.seller.name.length === 0 && $scope.seller.category.length === 0){
			$scope.InputValidationName = true;
			$scope.InputValidationCategory = true;
			return;
		}
		else if($scope.seller.name.length === 0) {
			$scope.InputValidationName = true;
			$scope.InputValidationCategory = false;
			return;
		}
		else if($scope.seller.category.length === 0) {
			$scope.InputValidationName = false;
			$scope.InputValidationCategory = true;
			return;
		}
		else {
			$scope.$close($scope.seller);
		}
		
	};
	$scope.onCancel = function onCancel() {
		//$scope.$dismiss('cancel');
		$scope.$dismiss('cancel');
		//$modalInstance.dismiss('cancel');
	};

});