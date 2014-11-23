restaurants.controller('RestaurantEditCtrl', ['$scope', '$http', '$routeParams', '$location', function(scope, http, routeParams, location){
	http.get('./restaurants/' + routeParams.id + '.json').success(function(data){
		scope.name = data.name
	})

	scope.submit = function(){
		if(scope.name){
			http.put('./restaurants/' + routeParams.id + '.json', {name: scope.name}).success(function(data){
				location.path('/restaurants/' + data.id);
			})
		}else{
			scope.errorStatus = true;
		}
	}

}]);