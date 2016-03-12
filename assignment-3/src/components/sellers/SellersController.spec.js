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
		});

	}));

	it("ctrl is Defined", function() {
		expect(ctrl).toBeDefined();
	});
	
	it("Loading is Defined and Edited", function() {
		expect(scope.isLoading).toBeDefined();
		expect(scope.edited).toBeDefined();
	});

	it("loading is false and Edited", function() {
		expect(scope.isLoading).toBe(false);
		expect(scope.edited).toBe(false);
	});

	it("getSellers", inject(function(AppResource){
		var sellers = AppResource.getSellers();
		expect(sellers).not.toBeNull();
	}));
	/*
	it("Defined", inject(function(ctrl) {
		expect(ctrl).toBeDefined();
	})); */
});