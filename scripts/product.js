(function(){
	var app = angular.module("store-product", []);
	
	app.directive("productTitle", function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});
	
	app.directive("productTitleAttr", function(){
		return {
			restrict: "A",
			templateUrl: "product-title.html"
		};
	});
	
	app.directive("productPanel", function(){
		return {
			restrict: "E",
			templateUrl: "product-panel.html",
			controller: function(){
				this.tab = 1;
		
				this.selectTab = function(value){
					this.tab = value;
				};
				
				this.isSelected = function(value){
					return this.tab === value;
				};
			},
			controllerAs: "panel"
		}
	});
})();
	