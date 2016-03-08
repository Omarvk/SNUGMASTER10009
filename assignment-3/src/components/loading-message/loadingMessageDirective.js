"use strict";

angular.module("project3App").directive("loadingMessage", 
function loadingMessage() {
	return {
		restrict: "E",
		templateUrl: "components/loading-message/loading.html"
	};
});