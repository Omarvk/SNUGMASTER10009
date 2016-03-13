"use strict";

angular.module("project3App").factory("SellerDetailDlg",
function SellerDetailDlg ($uibModal) {
	return {
		show: function(product) {
			//var newProduct = angular.copy(product);
			var modalInstance = $uibModal.open({
				templateUrl: "components/seller-details-dlg/seller-details-dlg.html",
				controller: "SellerDetailDlgController",
				resolve: {
					modalParam: function() {
						return product;
					}
				}
			});

			return modalInstance.result;
		}
	};
});