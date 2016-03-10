"use strict";


angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate", "toastr"])
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
	//$translateProvider.preferredLanguage('is');
	$translateProvider.use("is");
	//moment.locale("is");
	//$translate.use("is");
}]);





//angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader",["$q","$http",function(a,b){return function(c){if(!c||!angular.isString(c.prefix)||!angular.isString(c.suffix))throw new Error("Couldn't load static files, no prefix or suffix specified!");var d=a.defer();return b({url:[c.prefix,c.key,c.suffix].join(""),method:"GET",params:""}).success(function(a){d.resolve(a)}).error(function(){d.reject(c.key)}),d.promise}}]);