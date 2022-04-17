
$(document).ready(function () {
//page load actions
      $("::-webkit-scrollbar").css({ 
    display:"none"});
      $('html, body').scrollTop(55);
      $('html, body').animate({
        scrollTop: $('#lvl2').offset().top
    }, 5000, "swing");
   $(".salon").draggable();
        

    

//appending the iframes
$('.ifc1').append($('#aligniframe'));
$('.t1').append($('.ifc1'));

$('.ifc2').append($('#sistersiframe'));
$('.t2').append($('.ifc2'));

$('.ifc3').append($('#adcredoiframe'));
$('.t3').append($('.ifc3'));

$('.ifc4').append($('#lvlziframe'));
$('.t4').append($('.ifc4'));

$('.ifc5').append($('#sheiframe'));
$('.t5').append($('.ifc5'));

$('.ifc6').append($('#shrotaiframe'));
$('.t6').append($('.ifc6'));

$('.ifc7').append($('#kabbalisticiframe'));
$('.t7').append($('.ifc7'));

$('.ifc8').append($('#premiumiframe'));
$('.t8').append($('.ifc8'));

$('.ifc9').append($('#closeiframe'));
$('.t9').append($('.ifc9'));


$('.iframew').append($('.fullscreened'));
$(".fullscreened").mouseover(function(){
$(".iframew").animate({
        height: "100vh"
    }, 1000);
});
//$(".iframew").hide();
//$('.t').append($('.codepentest'));

$(".fullscreen").click(function(){
//$(".iframew").animate({
  //      height: "100vh"
    //}, 2000);
$(".iframew").show();
var iflink=$(this).parent().parent().parent().parent().children(".minimized").children(".minimizediframe").attr('src');
//alert(iflink);
$(".fullscreened").attr("src", iflink);
});

$(".codepentest").hide();

$(".shield").mouseover(function(){
$("iframe").css("pointer-events", "none");
});

$(".shield").mouseout(function(){
$("iframe").css("pointer-events", "auto");
});


      
      
      //scroller
   //    $(".scroller").draggable({axis: "x", containment: "parent"});
       
 //      $(".scroller").mousedown(function(){
	//var scrollerposition=$('.scroller').position().left;
	//if (scrollerposition > 0) { 
	//$('html, body').scrollTop(0);
	//alert(scrollerposition);
	//}
  //     });

      var y =  event.clientY;
     $("body").mouseover(function(){
      y =  event.clientY;
      
     });
     $("body").mouseover(function(){
    if (y < 100) {
		var currenttop = parseInt($('#salon').css('top'));
    $("#salon").css({top:currenttop+1});
    }
   });
      
      $(".plus").click(function(){
      var  scrollcurrent=$("html, body").scrollTop();
    $('html, body').animate({
        scrollTop: $('#lvl2').height()+scrollcurrent
    }, 2000, "swing");
    $("#salon").css({top:0, left:0});
});

      $(".minus").click(function(){
      var  scrollcurrent=$("html, body").scrollTop();
    $('html, body').animate({
        scrollTop: scrollcurrent-$('#lvl2').height()
    }, 2000, "swing");
    $("#salon").css({top:0, left:0});
});

$(".centerpoint").click(function(){
    $('html, body').animate({
        scrollTop: $('#lvl2').offset().top
    }, 2000, "swing");
    $("#salon").css({top:0, left:0});
});

$(".leftpoint").click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 2000, "swing");
});

$(".rightpoint").click(function(){
    $('html, body').animate({
        scrollTop: $('#lvl3').offset().top
    }, 2000, "swing");
        $("#salon").css({top:0, left:0});

});


 $(".t").mouseover(function(){
  $(this).children("img").hide();
  $(this).children(".iframecontainer").show();
    //$("#testframe").height(heightv);
    //$("#testframe").width(widthv);


 });
 
 
    $(".t").mouseout(function(){
  $(this).children("img").show();
  $(this).children(".iframecontainer").hide();
});
 

      var savescroll;
 $( ".catalogbutton" ).click(function() { 


  if ($(".catalogcontainer").hasClass("ccexpanded")) {
  $('.catalogcontainer').animate({
    height: "12vh"
}, 2000);   
$(".catalogcontainer").removeClass("ccexpanded");

        savescroll=$("html, body").scrollTop();

    $(".background").css({overflow: scroll});
$('html, body').animate({
    scrollTop: savescroll
}, 10);    





  } else {
  //alert("poop");
   $('.catalogcontainer').animate({
    height: "100vh"
}, 2000);   
$(".catalogcontainer").addClass("ccexpanded");

      savescroll=$("html, body").scrollTop();
    $(".background").css({overflow: hidden});
    $('html, body').animate({
    scrollTop: savescroll
}, 10);  
 }



});



$(".catalogcontainer").mouseover(function(){
 $(".catalogcontainer").css( "zIndex", 200 );
});

$(".catalogcontainer").mouseout(function(){
 $(".catalogcontainer").css( "zIndex", 100 );
});

      $( ".ceheader" ).click(function() { 
        $(".cebody").animate({
     height: 0
  }, 300);
      var clicks = $(this).data('clicks');
  if (clicks) {
    $(this).siblings(".cebody").animate({
     height: 0
  }, 300);

  } else {
  
var textheight = $(this).siblings(".cebody").children(".wtext").children(".zoomtext").height();
//var textheightbig = textheight*2;

  $(this).siblings(".cebody").animate({
     height: textheight+500
    
  }, 300);
 }
  $(this).data("clicks", !clicks);
});

      $( ".p" ).click(function() {

var zoomlvl=$("html, body").scrollTop();
var defaultzoom=$('#lvl2').offset().top;
var zoomcorrection=zoomlvl/defaultzoom;
if ($("html, body").scrollTop() <= $('#lvl2').offset().top) { 

  var defaultposition = $(".p5").position();
  var position = $(this).position();
  var topdifference = defaultposition.top - position.top;
  var leftdifference = defaultposition.left - position.left;
  var centertopdifference = 0+topdifference;
  var centerleftdifference = 0+leftdifference;

$('html, body').animate({
    scrollTop: $('#lvl3').offset().top
}, 2000, "swing");
$(".salon").css({top:topdifference/zoomcorrection, left:leftdifference/zoomcorrection});
defaultposition = $(this).position();
}
else if ($("html, body").scrollTop() > $('#lvl2').offset().top) { 
  var defaultposition = $(".p5").position();
  var position = $(this).position();
  var topdifference = defaultposition.top - position.top;
  var leftdifference = defaultposition.left - position.left;
  var centertopdifference = 0+topdifference;
  var centerleftdifference = 0+leftdifference;

$('html, body').animate({
    scrollTop: $('#lvl3').offset().top
}, 2000, "swing");
$(".salon").css({top:topdifference/(zoomcorrection*1.5), left:leftdifference/(zoomcorrection*1.5)});
defaultposition = $(this).position();
}



});


$(window).scroll(function() {

if ($("html, body").scrollTop() > $('#lvl2').offset().top+200) { 
$(".caption").hide();
$(".captionzoom").show();
$(".zoomtopnav").show();
//$(".imglink").show();


}

else if ($("html, body").scrollTop() < $('#lvl2').offset().top-300) { 
$(".caption").hide();
$(".captionzoom").hide();
$(".imglink").hide();
$(".zoomtopnav").hide();


}

else{
$(".caption").show();
$(".captionzoom").hide();
$(".imglink").hide();
$(".zoomtopnav").hide();
$(".zoomtopnav").hide();

}

if ($("html, body").scrollTop() < 50) { 
$(".salon").hide();
$(".about").show();

}

else{
$(".salon").show();
$(".about").hide();



}

});



$( ".cebodytext" ).hover(
  function() {
    $( this ).css({overflow:"visible"});
  }, function() {
    $( this ).css({overflow:"hidden"});
  }
);




});
