module.exports = function($scope, $http) {
  $scope.seats = 'seats';

  // $(document).ready(function() {
  //
  //   handleStatusChanged();
  //
  // });
  //
  // function handleStatusChanged() {
  //     $('#toggleElement').on('change', function () {
  //       toggleStatus();
  //     });
  // }
  //
  // function toggleStatus() {
  //     if ($('#toggleElement').is(':checked')) {
  //         $('#rowD :input').attr('disabled', true);
  //         $('#rowE :input').attr('disabled', true);
  //         $('#rowF :input').attr('disabled', true);
  //         $('#rowG :input').attr('disabled', true);
  //     } else {
  //         $('#rowD :input').removeAttr('disabled');
  //         $('#rowE :input').removeAttr('disabled');
  //         $('#rowF :input').removeAttr('disabled');
  //         $('#rowG :input').removeAttr('disabled');
  //     }
  // }
  //
  // $(document).ready(function() {
  //
  //   handleStatusChanged1();
  //
  // });
  //
  // function handleStatusChanged1() {
  //     $('#toggleElement1').on('change', function () {
  //       toggleStatus1();
  //     });
  // }
  //
  // function toggleStatus1() {
  //     if ($('#toggleElement1').is(':checked')) {
  //         $('#rowA :input').attr('disabled', true);
  //         $('#rowB :input').attr('disabled', true);
  //         $('#rowC :input').attr('disabled', true);
  //
  //     } else {
  //         $('#rowA :input').removeAttr('disabled');
  //         $('#rowB :input').removeAttr('disabled');
  //         $('#rowC :input').removeAttr('disabled');
  //
  //     }
  // }
  //

  $("#selectClass").on('change', function() {
  if ($(this).val() == "Gold") {
     $(".slrCls").attr("disabled", "disabled");
  } else {
     $(".slrCls").removeAttr("disabled");
  }
});



  $("#selectClass").on('change', function() {
    if ($(this).val() == "Silver") {
   $(".gldCls").attr("disabled", "disabled");
 } else {
   $(".gldCls").removeAttr("disabled");
 }

  });


    var selectSeats = document.getElementById('selectSeats');
    $('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > selectSeats.value ) {
        $(this).prop('checked', false);
        alert("WANT MORE..? INCREASE NO. OF SEATS");
    }
});



        $('select[class="selectClass"]').change(function(){
            var text = $(this).find("option:selected").text();
            if(text != ""){
              text = "Buy "+text;
            }

            $('#seatCls').val(text);
          });


          var currNum = 0;
          var txtArea = document.getElementById("totalAmount");
          var form = document.getElementById("RowA");
          function add_sub(el){
              // debugger;
                          if (el.checked)
                          {
                              currNum += parseInt(el.value,10);
                          }
                          else
                          {
                              currNum -= parseInt(el.value,10);
                          }
                          txtArea.value = currNum;
          }

          form.addEventListener("click", function(ev){
              if(ev.target.getAttribute("type") == "checkbox"){
                  add_sub(ev.target);
              }
          },false);


};
