(function(){
	var app = angular.module("store", []);
	
	app.controller("StoreController", function(){
		this.products = gems;
	});
	
	var gems = [
		{
			name: "Dodecahedron",
			price: 2.95,
			description: "First gem found",
			canPurchase: true,//if this property is not present on the object then angular will treat it as a false value and not show it on the page
			soldOut: false
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: "Second gem found",
			canPurchase: false
		}
	];
})();