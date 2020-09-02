
function myFunction() { 
  document.getElementById("demo").innerHTML = "JANU!";
}



 
 $(".bgorange").on("click",function() {
	$(this).toggleClass("bgorangetoggle");
})
$(".bggreen").on("click",function() {
	$(this).toggleClass("bggreentoggle");
})


$("button").click(function(){
	$("img").attr("width", "500");
	$("img").css("display","none").fadeIn(2500);
});


$( "h1" ).dblclick(function() {
  alert( "Hey stop Clicking Here!" );
});


$( "ol").css( "font-size", "25px" );

$( "ol" ).css( "background-color", "orange" );
$( "ol" ).css( "color", "white" );

$( "h5" ).css( "font-size", "45px" );
$( "h5" ).css( "background-color", "yellow" );
$( "h5" ).css( "color", "red" );
$( "h6" ).css( "color", "orangered" );

$( "h6" ).css( "background-color", "white" );
$( "h4" ).css( "color", "navy" );

$( "h4" ).css( "font-size", "25px" );
$( "h1" ).css( "background-color", "white" );
$( "h1" ).css( "color", "deeppink" );