restaurants.controller('RestaurantIndexCtrl', ['$scope', '$http', '$location', function(scope, http, location){
	
	scope.restaurants = []

	scope.delete_record = function(id){
		http.delete('./restaurants/' + id + '.json').success(function(){
			getAll()
		})
	}

	var getAll = function(){
		http.get('./restaurants.json').success(function(data){
			scope.restaurants = data
		})
	}

	getAll()

}]);