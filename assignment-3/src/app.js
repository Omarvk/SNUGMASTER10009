"use strict";


angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(
["$routeProvider", "$translateProvider", 
function($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	}).when("/seller-details/:id", {
		controller: "SellerDetailsController",
		templateUrl: "components/seller-details/seller-details.html"
	});
	$translateProvider.useStaticFilesLoader({
		prefix: "lang_",
		suffix: ".json"
	});
	$translateProvider.use("is");
}]);

angular.module("project3App").run(function($rootScope, $translate) {
	var changeLang = false;
	$rootScope.langIs = "EN";
	$rootScope.onLang = function onLang() {
		if(changeLang) {
			$translate.use("is");
			$rootScope.langIs = "EN";
			changeLang = false;
		}else {
			$translate.use("en");
			$rootScope.langIs = "IS";
			changeLang = true;
		}
		
	};
});