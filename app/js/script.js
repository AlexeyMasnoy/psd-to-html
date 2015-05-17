$(document).ready(function(){
    $("nav ul li").hover(function(){
        $(this).children("ul").stop().fadeIn(300);
        
    }, function (){
    	$(this).children("ul").stop().fadeOut(300);
    });	          
    
});