'use strict';

module.exports = function($scope, $http) {
  // $scope.booking = 'booking';

  var refresh = function () {
        $http.get('/city/getCity').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.cityList = response;
            $scope.city = "";
        });
    };

    refresh();

    $scope.addCity = function (city) {

                            $http.post('/city/addCity', city).success(function (response) {
                                console.log(response);
                                console.log("CREATE IS SUCCESSFUL");
                                refresh();
                            });


        // console.log($scope.contact);

    };

    $scope.removeCity = function (city) {
        //console.log(id);
        $http.delete('/city/deleteCity/' + city._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editCity = function (city) {
         $http.get('/city/getCity/' + city._id).success(function (response) {
            $scope.city = response[0];
        });
    };

    $scope.updateCity = function () {
        console.log("REACHED UPDATE");
        console.log($scope.city._id);
        $http.put('/city/updateCity/' + $scope.city._id, $scope.city).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
