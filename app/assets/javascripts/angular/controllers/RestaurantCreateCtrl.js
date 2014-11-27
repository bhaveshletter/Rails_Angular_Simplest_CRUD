restaurants.controller('RestaurantCreateCtrl', ['$scope', '$http', '$location', function(scope, http, location){
	
	scope.submit = function(){
		if(scope.name){
			http.post('./restaurants.json', {name: scope.name}).success(function(data){
				location.path('/restaurants/' + data.id)
			})
		}else{
			scope.errorStatus = true
		}
	}

}]);