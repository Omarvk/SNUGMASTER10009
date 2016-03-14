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
	/*var fakeModal = {
		result: {
			then: function(ok, cancel) {
				this.ok = ok;
				this.cancel = cancel;
			}
		},
		close: function(data) {
			this.result.then(data, "");
		},
		dismiss: function(reason) {
			this.result.then("" ,reason);
		}
	};*/

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
		var sellers = AppResource.getSellers();
		expect(sellers).not.toBeNull();
	}));

	it("addSeller should contains user in getSellers", inject(function(AppResource){
		scope.onAddSeller();
		var seller = {
			name: "Halli",
			category: "balli",
			imagePath: ""
		};
		scope.$close = function(seller) {
			AppResource.addSeller(seller).sucess(function(seller) {
				expect(seller.name).toBe("Halli");
				var sellers = AppResource.getSellers();
				expect(sellers).toContain(seller);
			});
		};
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

	it("on Edit Click", function() {
		scope.onEditSeller();
		expect(scope.edited).toBe(true);
	});

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