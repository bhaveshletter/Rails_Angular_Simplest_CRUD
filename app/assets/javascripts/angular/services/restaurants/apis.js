restaurants.factory("restaurantFactory", ['$http', '$q', function (http, q) {
    var apiFun = {}

    apiFun.getRestaurants = function () {
        var dfd = q.defer()

        http.get('./restaurants.json')
        .success(function (result) {
            dfd.resolve(result)
        })
        .error(function (data, status, headers, config) {
            dfd.reject(data)
        })

        return dfd.promise
    };

    apiFun.getRestaurant = function (id) {
        var dfd = q.defer()

        http.get('./restaurants/' + id + '.json')
        .success(function (result) {
            dfd.resolve(result)
        })
        .error(function (data, status, headers, config) {
            dfd.reject(data)
        })

        return dfd.promise
    };

    apiFun.createRestaurant = function (newRestaurant) {
        var dfd = q.defer()

        http({method: 'POST', url: './restaurants.json', data: newRestaurant})
        .success(function (result) {
            dfd.resolve(result)
        })
        .error(function (data, status, headers, config) {
            dfd.reject(data)
        })

        return dfd.promise
    };

    apiFun.updateRestaurant = function(id, toBeUpdatedRestaurant){
        var dfd = q.defer()

        http({method: 'put', url: './restaurants/' + id + '.json', data: toBeUpdatedRestaurant})
        .success(function (result) {
            dfd.resolve(result)
        })
        .error(function (data, status, headers, config) {
            dfd.reject(data)
        })

        return dfd.promise
    };

    apiFun.removeRestaurant = function(id){
        var dfd = q.defer()

        http.delete('./restaurants/' + id + '.json')
        .success(function () {
            dfd.resolve()
        })
        .error(function (data, status, headers, config) {
            dfd.reject(data)
        })

        return dfd.promise
    };

    return apiFun

}]);