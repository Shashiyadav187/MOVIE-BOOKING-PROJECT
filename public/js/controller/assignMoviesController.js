'use strict';

module.exports = function($scope, $http) {
  // $scope.booking = 'booking';

  var refresh = function () {
        $http.get('/assign/getAsgnMovie').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.asgnList = response;
            $scope.asgn = "";
        });
    };

    refresh();

    $scope.addAsgnMovie = function (asgn) {
                                                    var movie= document.getElementById("movieSelect") ;
                                                    var movie1=movie.options[movie.selectedIndex].text;
                                                    asgn.assignMovie=movie1;



                                                    var  theatre= document.getElementById("theatreSelect");
                                                    var theatre1 = theatre.options[theatre.selectedIndex].text;
                                                    asgn.assignThr = theatre1;

                                                    var city = document.getElementById("citySelect");
                                                    var cty1 = city.options[city.selectedIndex].text;
                                                    asgn.assignCity= cty1;



                                                    var datefrom=document.getElementById("fromDate").value;
                                                    asgn.assignDTfr=datefrom;



                                                    var dateTo=document.getElementById("toDate").value;
                                                    asgn.assignDTto=dateTo;

                                                    var val='true';
                                                    $http.put('/movie/updateMovi/' + $scope.asgn.title+'/'+val).success(function (response) {
                                                        console.log(response);
                                                      });
                                                      alert('Mapping Saved Successfully');
                                                        // window.location.reload();
                                                    $scope.asgn='';


                            $http.post('/assign/addAsgnMovie', asgn).success(function (response) {
                                console.log(response);
                                console.log("CREATE IS SUCCESSFUL");
                                refresh();
                                    });

                      };



    $scope.removeAsgnMovie = function (asgn) {
        //console.log(id);
        $http.delete('/assign/deleteAsgnMovie/' + asgn._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });

        var val='false';
        $http.put('/movie/updateMovi/'+$scope.asgn.title+'/'+val).success(function (response) {
            console.log(response);
           });

    };

    $scope.editAsgnMovie = function (asgn) {
         $http.get('/assign/getAsgnMovie/' + asgn._id).success(function (response) {
            $scope.asgn = response[0];
        });
    };

    $scope.updateAsgnMovie = function () {
        console.log("REACHED UPDATE");
        console.log($scope.asgn._id);
        $http.put('/assign/updateAsgnMovie/' + $scope.asgn._id, $scope.asgn).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
