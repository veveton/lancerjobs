angular.module("angularApp").controller("angularController", function($scope, $http) {
	function RatingController() {
	    this.rating = 4;
	    this.isReadonly = true;
	    this.rateFunction = function(rating) {
	      console.log('Rating selected: ' + rating);
	    };
	 }
});