'use strict';

module.exports = function($scope, $http) {
  // $scope.time = 'time';

  var refresh = function () {
        $http.get('/time/getTime').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.timeList = response;
            $scope.time = "";
        });
    };

    refresh();

    $scope.addTime = function (time) {

                            $http.post('/time/addTime', time).success(function (response) {
                                console.log(response);
                                console.log("CREATE IS SUCCESSFUL");
                                refresh();
                            });



    };

    $scope.removeTime = function (time) {
        //console.log(id);
        $http.delete('/time/deleteTime/' + time._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editTime = function (time) {
         $http.get('/time/getTime/' + time._id).success(function (response) {
            $scope.time = response[0];
        });
    };

    $scope.updateTime = function () {
        console.log("REACHED UPDATE");
        console.log($scope.time._id);
        $http.put('/time/updateTime/' + $scope.time._id, $scope.time).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
