(function(){
	var app = angular.module("store", []);
	
	app.controller("StoreController", function(){
		this.products = gems;
	});
	
	app.controller("PanelController", function(){
		this.tab = 1;
		
		this.selectTab = function(value){
			this.tab = value;
		};
		
		this.isSelected = function(value){
			return this.tab === value;
		};
	});
	
	app.controller("GalleryController", function(){
		this.current = 0;
		
		this.setCurrent = function(value){
			this.current = value || 0;
		};
	});
	
	var gems = [
		{
			name: "Dodecahedron",
			price: 2.95,
			description: "First gem found",
			canPurchase: true,//if this property is not present on the object then angular will treat it as a false value and not show it on the page
			soldOut: false,
			images:[
				"content/images/gem1.jpg",
				"content/images/gem1a.jpg"
			],
			description: "some description on gem 1"
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: "Second gem found",
			canPurchase: false,
			images:[
				"content/images/gem3.jpg",
				"content/images/gem3a.jpg"
			],
			description: "some description on gem 2"
		}
	];
})();