$(document).ready(function(){
    $("nav ul li").hover(function(){
        $(this).children("ul").stop().fadeIn(300);
        
    }, function (){
    	$(this).children("ul").stop().fadeOut(300);
    });	
    
    $(".pictures img").mouseover( function(){ 
        $(this).parent().parent().css('background','#2f2e2e');
        $(this).animate({opacity: "0.3"}, "1");
 
    });   

    $(".pictures img").mouseout( function(){ 
        $(this).parent().parent().css('background','none'); 
        $(this).animate({opacity: "1"}, "1");                                                       
     
    });           
    
});