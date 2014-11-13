restaurants.controller('RestaurantCreateCtrl', ['$scope', '$http', '$location', function(scope, http, location){
	
	scope.create_new = function(){
		if(scope.name){
			http.post('./restaurants.json', {name: scope.name}).success(function(data){
				location.path('/restaurants/' + data.id);
			})
		}
	}

}]);