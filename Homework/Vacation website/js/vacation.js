$(document).ready( function(){

  $("#css").click(function(){
      $(".grid header").css({"background-color" : "rgb(230, 220, 92)"});
  });

  $("footer").mouseover(function(){
      $("footer p").html("Cuba is a beautiful country!");
  });

  $("footer").mouseleave(function() {
    $("footer p").html("Hover over me!");
  });

  $("#set2").hide();
  $("#set3").hide();
  $("#set4").hide();
  $("#set5").hide();

  $("#button1").click(function(){
    $("#set1").show();
    $("#set2").hide();
    $("#set3").hide();
    $("#set4").hide();
    $("#set5").hide();
  });

  $("#button2").click(function(){
    $("#set1").hide();
    $("#set2").show();
    $("#set3").hide();
    $("#set4").hide();
    $("#set5").hide();
  });

  $("#button3").click(function(){
    $("#set1").hide();
    $("#set2").hide();
    $("#set3").show();
    $("#set4").hide();
    $("#set5").hide();
  });

  $("#button4").click(function(){
    $("#set1").hide();
    $("#set2").hide();
    $("#set3").hide();
    $("#set4").show();
    $("#set5").hide();
  });

  $("#button5").click(function(){
    $("#set1").hide();
    $("#set2").hide();
    $("#set3").hide();
    $("#set4").hide();
    $("#set5").show();
  });

  });
