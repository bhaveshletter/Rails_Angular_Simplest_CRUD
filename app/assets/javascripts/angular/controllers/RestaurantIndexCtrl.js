restaurants.controller('RestaurantIndexCtrl', ['$scope', '$location', 'restaurantFactory', function(scope, location, restaurantFactory){

	scope.restaurants = []

	scope.delete_record = function(id){
		restaurantFactory.removeRestaurant(id).then(function(){
			getAll()
		})
	}

	var getAll = function(){
		restaurantFactory.getRestaurants().then(function(data){
			scope.restaurants = data
		})
	}

	getAll()

}]);