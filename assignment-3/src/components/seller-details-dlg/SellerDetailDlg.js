"use strict";

angular.module("project3App").factory("SellerDetailDlg",
function SellerDetailDlg ($uibModal) {
	return {
		show: function(product) {
			var modalInstance = $uibModal.open({
				templateUrl: "components/seller-details-dlg/seller-details-dlg.html",
				controller: "SellerDetailDlgController",
				resolve: {
					modalParam: function() {
						return {
							product: product
						};
					}
				}
			});

			return modalInstance.result;
		}
	};
});