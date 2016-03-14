"use strict";

describe("SellersController should be unit tested here", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
	var ctrl;
	var scope;
	var mockSeller;
	//#FOKKREALDATA
	var addMockSeller = function(seller) {
		if(seller === undefined){
			return "error";
		}else {
			mockSeller = seller;
			return mockSeller;
		}
	};
	var editMockSeller = function(seller, updateSeller) {
		if(mockSeller.id === seller.id) {
			mockSeller = updateSeller;
			return mockSeller;
		}else{
			return "seller does not exists";
		}
	};

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

	it("getSellers should have data", inject(function(AppResource){
		var getSellers;
		AppResource.getSellers().success(function(sellers){
			getSellers = sellers;
		});
		var test = scope.sellers;
		expect(getSellers).not.toBeNull();
		expect(test).toEqual(getSellers);
	}));

	it("getSeller Error should notify", inject(function(AppResource, centrisNotify){
		spyOn(centrisNotify, "error");
		AppResource.successLoadSellers = false;
		AppResource.getSellers().success(function() {
		}).error(function() {
			centrisNotify.error("Error");
		});
		expect(centrisNotify.error).toHaveBeenCalledWith("Error");

	}));

	it("addSeller should on success should notify", inject(function(AppResource, centrisNotify){
		spyOn(centrisNotify, "success");
		var seller = {
			id: 1337,
			name: "Halli",
			category: "balli",
			imagePath: ""
		};
		AppResource.addSeller(seller).success(function(){
			centrisNotify.success("new user");
		});
		expect(centrisNotify.success).toHaveBeenCalled();
	}));

	it("addSeller should contains user in getSellers", inject(function(AppResource){
		scope.onAddSeller();
		var seller = {
			id: 1337,
			name: "Halli",
			category: "balli",
			imagePath: ""
		};
		expect(addMockSeller(seller)).toBe(seller);
	}));

	it("on Edit Click", inject(function(centrisNotify) {
		//spyOn(centrisNotify, "success");
		scope.onEditSeller();
		expect(scope.edited).toBe(true);
		//expect(centrisNotify).toHaveBeenCalled();
	}));

	it("on Edit then getSeller", inject(function(AppResource) {
		var seller = {
			id: 1337,
			name: "Halli",
			category: "balli",
			imagePath: ""
		};
		var updateSeller = {
			id: 1337,
			name: "Halliballi",
			category: "balli",
			imagePath: ""
		};
		scope.getSeller();
		expect(editMockSeller(seller, updateSeller)).toBe(updateSeller);
		expect(scope.edited).toBe(false);
	}));
});