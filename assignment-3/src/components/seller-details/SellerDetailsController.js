"use strict";

angular.module("project3App").controller("SellerDetailsController",
["$scope", "$routeParams",
function SellerDetailsController($scope, $routeParams) {
	$scope.id = $routeParams.id;

}]);