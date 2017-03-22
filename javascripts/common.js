Kakao.init('6a30dead1bff1ef43b7e537f49d2f655');

$(function(){
    $(".section").mouseover(function(){
        if($(this).attr("id") != "news-section"){
            $(this).addClass("hover");
        }
    }).mouseout(function(){
        $(this).removeClass("hover");
    })

    $("#more-btn, #more-btn-small").click(function(){
        location.href="http://wouldyouparty.org/articles";
    })

    $("#reg-btn").click(function(){
        location.href="http://wouldyouparty.org/articles/new";
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
            {share: "facebook", logo: "./images/icon-facebook-green.png"},
            {share: "twitter", logo: "./images/icon-twitter-green.png", text: $('meta[name="twitter:description"]').attr("content") }
        ]
    });
    $(".kakao-share").click(function(){
      Kakao.Story.share({
        url: 'http://zine.wouldyouparty.org/',
        text: $('meta[name=description]').attr("content")
      });
    });
})

