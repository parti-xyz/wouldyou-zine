Kakao.init('6a30dead1bff1ef43b7e537f49d2f655');

$(function(){
    $(".section").mouseover(function(){
        if($(this).attr("id") != "news-section"){
            $(this).addClass("hover");
        }
    }).mouseout(function(){
        $(this).removeClass("hover");
    })

    $(".mobile-menu").click(function(){
        $(".mobile-open-menu").slideDown();
    })

    $("#closeBtn").click(function(){
        $(".mobile-open-menu").slideUp();
    })

    $(".social-share .jssocial-share-container").jsSocials({
        showLabel: false,
        showCount: false,
        shares: [
            {share: "facebook", css: "share-facebook-icon"},
            {share: "twitter", css: "share-twitter-icon", text: $('meta[name="twitter:description"]').attr("content") }
        ]
    });
    $(".kakao-share").click(function(){
      Kakao.Story.share({
        url: 'http://zine.wouldyouparty.org/',
        text: $('meta[name=description]').attr("content")
      });
    });
})

