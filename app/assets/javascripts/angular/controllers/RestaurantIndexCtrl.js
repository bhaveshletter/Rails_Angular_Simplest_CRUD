restaurants.controller('RestaurantIndexCtrl', ['$scope', '$http', '$location', function(scope, http, location){
	
	scope.restaurants = []
	http.get('./restaurants.json').success(function(data){
		scope.restaurants = data
	})

	scope.delete_record = function(id){
		http.delete('./restaurants/' + id + '.json').success(function(){
			location.path('/restaurants')
		})
	}

}]);