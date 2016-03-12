"use strict";

describe("SellersController should be unit tested here", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
	var ctrl;
	var scope;
	beforeEach(module("project3App"));
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new(); 
		ctrl = $controller("SellersController", {
			$scope: scope,
			AppResorce: AppResorce
		});

	}));
	it("Add", function() {
		
	});
});