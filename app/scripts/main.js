$(document).ready(function(){

//to replace names with quotes from skateboarder

$(".lance").mouseover(function(){
	if($(".lancewords").html() == "LANCE  MOUNTAIN")
		$(".lancewords").html("<p class=\"newlancetext\">\“Skateboarding doesn’t make you a skateboarder: not being able to stop skateboarding makes you a skateboarder.\”</p>")
	else
		$(".lancewords").html("LANCE  MOUNTAIN")
});


$(".rodney").mouseover(function (){
     if($(".rodneywords").html() == "RODNEY MULLEN")
     	$(".rodneywords").html("<p class=\"newrodneytext\">\“I like frontside crooked grind variations, particularly the munkey flip out, or nollie hard flip. Darkslides are fun\”</p>")
     else
     	$(".rodneywords").html ("RODNEY MULLEN")
  });



$(".tommy").mouseover(function () {
 if($(".tommywords").html() == "TOMMY <br> GUERRERO")
     	$(".tommywords").html("<p class=\"newtommytext\">\“ For us, it just didn’t matter what you were skating—pools, ditches, hills, curbs—you were just rolling around.\”</p>")
     else
     	$(".tommywords").html ("TOMMY <br> GUERRERO")
  });


$(".steve").mouseover(function () {
 if($(".stevewords").html() == "STEVE CABALLERO")
     	$(".stevewords").html("<p class=\"newstevetext\">\“ The thing I've learned about skating is that it's easier to become the best than stay the best.\”</p>")
     else
     	$(".stevewords").html ("STEVE CABALLERO")
  });

//to view info over each board

$(".layer137").click(function() {
  $( ".layer137text" ).toggleClass("showtext");
});

$(".layer136").click(function() {
  $( ".layer136text" ).toggleClass("showtext");
});

$(".layer135").click(function() {
  $( ".layer135text" ).toggleClass("showtext");
});

$(".layer134").click(function() {
  $( ".layer134text" ).toggleClass("showtext");
});

$(".layer133").click(function() {
  $( ".layer133text" ).toggleClass("showtext");
});

$(".layer132").click(function() {
  $( ".layer132text" ).toggleClass("showtext");
});

$(".layer131").click(function() {
  $( ".layer131text" ).toggleClass("showtext");
});

$(".layer130").click(function() {
  $( ".layer130text" ).toggleClass("showtext");
});

$(".layer138").click(function() {
  $( ".layer138text" ).toggleClass("showtext");
});

$(".layer139").click(function() {
  $( ".layer139text" ).toggleClass("showtext");
});

//hover to view arrow near div
$(".rownews").hover(function(){
     $("img.skateboard").toggleClass("showtext");
   });

$(".rowstyle").hover(function(){
	$("img.skateboardfour").toggleClass("showtext")
})

$(".skateboardstyle").hover(function(){
     $("img.skateboardtwo").toggleClass("showtext");
   });

$(".contactformstyle").hover(function(){
     $("img.skateboardthree").toggleClass("showtext");
   });


//hover over Subscribe text, notifiying viewer to subscriber to social media icon
$(".subscribe").hover(function(){
	$(".socialicons").toggleClass("boxshadow backgroundcolor");
});



});















