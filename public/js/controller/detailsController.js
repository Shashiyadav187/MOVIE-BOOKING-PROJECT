
module.exports = function($scope, $http, $rootScope, $location) {


  $scope.city=" ";
  $scope.date=" ";
  $scope.Theatre=" ";
  $scope.showtime=" ";


var theatre = function(){
  $http.get('/theatre/getTheatre').success(function(response){
    $scope.theatreDetails=response;

  });
};
  theatre();

var shotim= function(){
  $http.get('/assign/getAsgnMovie').success(function(response){
     $scope.showtim=response;
  });
};

  shotim();




  var bookingShow=function(){
var data=sessionStorage.getItem('xyz');
//var data=$rootScope.movieName;
$http.get('/assign/selmoviename/'+data).success(function(response){
  $scope.details=response;
});
$http.get('/movie/moviePoster/'+data).success(function(response){
 $rootScope.movi=response;

 sessionStorage.setItem('moviedata',$rootScope.movi);
 });


// console.log(sessionStorage.getItem('moviedata'));
};
bookingShow();

$scope.movDates=[];
var showDates=function() {
for(i=0;i<6;i++)
{
  var date=new Date();
  date.setDate(date.getDate()+i);
  $scope.movDates[i]=date;
  // $scope.movDates[i].toString();
}
};
showDates();


// var a =$scope.theatre;
 // var b = $scope.Date;
 // alert($scope.Date)

$scope.setShow =function(){

  sessionStorage.setItem('thr',  $scope.Theatre);
  sessionStorage.setItem('city', $scope.city);
  sessionStorage.setItem('shotim', $scope.showtime);
  sessionStorage.setItem('dt', $scope.date);

  };




};
