(function(){
	var app = angular.module("store", ["store-product"]);
	
	app.controller("StoreController", function(){
		this.products = gems;
	});
	
	//app.controller("PanelController", function(){
		
	//});
	
	app.controller("GalleryController", function(){
		this.current = 0;
		
		this.setCurrent = function(value){
			this.current = value || 0;
		};
	});
	
	app.controller("ReviewController", function(){
		this.review = {};
		
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
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
			description: "some description on gem 1",
			reviews: [
				{
					stars: 5, 
					body: "I love this gem",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]
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
			description: "some description on gem 2",
			reviews: [
				{
					stars: 5, 
					body: "I love this gem",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]
		}
	];
})();