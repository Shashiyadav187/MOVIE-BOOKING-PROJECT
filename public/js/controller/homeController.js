'use strict';

module.exports = function($scope, $http, $location) {
  $scope.home = 'home';

 var refresh = function () {
        $http.get('/movie/getMovie').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.movieList = response;

        });
    };

    refresh();

    $scope.setMovie=function(movie){
      sessionStorage.setItem('xyz',movie);
      // $location.path('/details');
    };

};
