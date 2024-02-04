$(document).ready(function () {
    $('.secondRecommendBack').after("<div class='secondRecommendSlideBack'></div>")
    $('.secondRecommendSlideBack').css({ width: "100%", height: "335px", marginTop: "30px" })

    $(".secondRecommendSlideBack").append("<div class='secondRecommendSlide'></div>")
    $(".secondRecommendSlide").css({ width: "980px", height: "335px", margin: "0 auto" })
    $(".secondRecommendSlide").append("<div class='secondRecommendSlideFrame'></div>")
    $(".secondRecommendSlide").append("<div class='secondRecommendSlideFrame'></div>")
    $(".secondRecommendSlide").append("<div class='secondRecommendSlideFrame'></div>")


    $(".secondRecommendSlideFrame").css({ float: "left", color: "#666", lineHeight: "40px", height: "100%" })
    $(".secondRecommendSlideFrame").eq(0).css({ width: "365px", marginRight: "15px", backgroundImage: "url('img/recommend/recommend003.jpg')" })
    $(".secondRecommendSlideFrame").eq(1).css({ width: "365px", marginRight: "15px", position: "relative" })
    $(".secondRecommendSlideFrame").eq(2).css({ width: "220px", backgroundImage: "url('img/recommend/recommend002.jpg')" })

     // 가운데 슬라이드 365 * 335
    $(".secondRecommendSlideFrame").eq(1).append("<div class='secondRecommendSlideCenterWrap'></div>")
   

    $(".secondRecommendSlideCenterWrap").append("<span class='prev3'>&lt;</span>")
    $(".secondRecommendSlideCenterWrap").append("<span class='next3'>&gt;</span>")
    $(".prev3").css({ zIndex: "10", height: "10%", display: "block", alignItems: "center", position: "absolute", left: "0", cursor: "pointer", top: "40%" })
    $(".next3").css({ zIndex: "10", height: "10%", display: "block", alignItems: "center", position: "absolute", right: "0", cursor: "pointer", top: "40%" })
    

    
    $(".secondRecommendSlideCenterWrap").css({ float: "left", width: "365px", height: "335px", position: "relative", overflow: "hidden" })
    $(".secondRecommendSlideCenterWrap").append("<div class='secondRecommendSlideCenterSetSet'></div>")
    



    $.ajax({
        url: "./json/secondSlide/secondMiddleAD.json",
        dataType: "json",
        success: function (data) {
      
            if (data.documents.length > 0) {
                $(".secondRecommendSlideCenterSetSet").css({ width: "1095px", height: "335px" })
                console.log(data)
                for (let i = 0; i < data.documents.length; i++) {
                    $(".secondRecommendSlideCenterSetSet").append("<a href='#a'><div class='secondRecommendSlideCenterSet'></div></a>");
                    $(".secondRecommendSlideCenterSet").css({ float: "left", width: "365px", height: "335px", backgroundColor: "white", padding:"30px" })
                    $(".secondRecommendSlideCenterSet").eq(i).append("<img src=" + data.documents[i].thumbnail + " alt='product image' class='secondRecommendSlideCenterSetImg'>")
                }
                
                $(".secondRecommendSlideCenterSetImg").css({  float: "left",width: "100%", height: "100%" })
            }
        }
    });
   
    const LEFT_SHOW_COUNT = 1;
    function prev3() {
        for (let i = 0; i < LEFT_SHOW_COUNT; i++) {
            $('.secondRecommendSlideCenterSet:last').prependTo('.secondRecommendSlideCenterSetSet');
           
        }
        $('.secondRecommendSlideCenterSetSet').css('margin-left', -365);
        $('.secondRecommendSlideCenterSetSet').stop().animate({ marginLeft: 0 }, 800);
    }

    function next3() {
        $('.secondRecommendSlideCenterSetSet').stop().animate({ marginLeft: -365 },
            function () {
                for (let i = 0; i < LEFT_SHOW_COUNT; i++) {
                    $('.secondRecommendSlideCenterSet:first').appendTo('.secondRecommendSlideCenterSetSet');
                    
                }
                $('.secondRecommendSlideCenterSetSet').css({ marginLeft: 0 });
            });
    }

   
   

    $('.prev3').click(function () {
        prev3();
    });
    $('.next3').click(function () {
        next3();
    });

    //let recommendSecondSlide;

    function startRecommendSecondSlideInterval() {
        recommendSecondSlide = setInterval(next3, 3000);
    }

    function stopRecommendSecondSlideInterval() {
        clearInterval(recommendSecondSlide);
    }

    startRecommendSecondSlideInterval();

})