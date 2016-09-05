var controllers = angular.module('controllers', []);
controllers.controller('search-controller', ['$scope','$http', function($scope, $http){
    $scope.search_stars = 500;
    $scope.search_text = "";
    $scope.search_language = function() {
        if($scope.search_text && $scope.search_text != "") {
            $http.get('https://api.github.com/search/repositories?q=stars:>='+$scope.search_stars+ ' language:' + $scope.search_text +'&sort=stars&order=desc' )
                  .then(function(response) {
                $scope.search_response = response.data;
                $scope.search_count = response.data.total_count;
            })    
        }
    };
}]);