$(document).ready( function(){


$("#set2").hide();
$("#set3").hide();

$("#button1").click(function(){
	$("#set1").show();
	$("#set2").hide();
	$("#set3").hide();
});

$("#button2").click(function(){
	$("#set1").hide();
	$("#set2").show();
	$("#set3").hide();
});

$("#button3").click(function(){
	$("#set1").hide();
	$("#set2").hide();
	$("#set3").show();
});


$("#set5").hide();
$("#set6").hide();

$("#button4").click(function(){
	$("#set4").show();
	$("#set5").hide();
	$("#set6").hide();
});

$("#button5").click(function(){
	$("#set4").hide();
	$("#set5").show();
	$("#set6").hide();
});

$("#button6").click(function(){
	$("#set4").hide();
	$("#set5").hide();
	$("#set6").show();
});


$("#set8").hide();
$("#set9").hide();

$("#button7").click(function(){
	$("#set7").show();
	$("#set8").hide();
	$("#set9").hide();
});

$("#button8").click(function(){
	$("#set7").hide();
	$("#set8").show();
	$("#set9").hide();
});

$("#button9").click(function(){
	$("#set7").hide();
	$("#set8").hide();
	$("#set9").show();
});

  });
