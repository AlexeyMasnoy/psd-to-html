$(document).ready(function(){
    $("nav ul li").hover(function(){
        $(this).children("ul").stop(false,true).fadeIn(300);
        
    }, function (){
    	$(this).children("ul").stop(false,true).fadeOut(300);
    	
    });
});