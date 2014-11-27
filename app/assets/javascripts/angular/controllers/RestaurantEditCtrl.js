restaurants.controller('RestaurantEditCtrl', ['$scope', '$routeParams', '$location', 'restaurantFactory', function(scope, routeParams, location, restaurantFactory){

	restaurantFactory.getRestaurant(routeParams.id).then(function(restaurant){
		scope.name = restaurant.name
	})

	scope.submit = function(){
		if(scope.name){
			restaurantFactory.updateRestaurant(routeParams.id, {name: scope.name}).then(function(updatedRestaurant){
				location.path('/restaurants/' + updatedRestaurant.id)
			})
		}else{
			scope.errorStatus = true
		}
	}

}]);