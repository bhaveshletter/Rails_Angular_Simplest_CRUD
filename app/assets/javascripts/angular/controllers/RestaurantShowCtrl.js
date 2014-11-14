restaurants.controller('RestaurantShowCtrl', ['$scope', '$http', '$routeParams', function(scope, http, routeParams){
	scope.restaurant = []
	http.get('./restaurants/' + routeParams.id + '.json').success(function(data){
		scope.restaurant = data
	})

}]);