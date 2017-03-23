$(function(){
    $(".mobile-menu").click(function(){
        $(".mobile-open-menu").slideDown();
    })
    
    $("#201703 > .cover").click(function(){
        location.href="201703.html";
    })
    
    $("#closeBtn").click(function(){
        $(".mobile-open-menu").slideUp();
    })
})