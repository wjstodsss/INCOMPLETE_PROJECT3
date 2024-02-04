$(document).ready(function () {
    $('.firstRecommendSildeBack').after("<div class='secondRecommendBack'></div>")
    $('.secondRecommendBack').css({ width: "100%", height: "40px", marginTop: "30px" })

    $(".secondRecommendBack").append("<div class='secondRecommend'></div>")
    $(".secondRecommend").css({ width: "980px", height: "40px", margin: "0 auto" })
    $(".secondRecommend").append("<div class='secondRecommendTitle'></div>")

    $(".secondRecommendTitle").css({ float: "left", width: "980px", height: "40px", textAlign: "left", position: "relative", zIndex: "10" })

    $(".secondRecommendTitle").append("<h2>출판사<span>초이스!</span></h2>")
    $(".secondRecommendTitle").append("<h2>미디어<span>추천!</span></h2>")
    $(".secondRecommendTitle").append("<h2><span>이 책</span> 어때?</h2>")

    $(".secondRecommendTitle>h2").css({ float: "left", color: "#666", lineHeight: "40px", height: "100%", backgroundColor: "#fff", fontSize: "17px" })
    $(".secondRecommendTitle>h2").eq(0).css({ width: "365px", marginRight: "15px" })
    $(".secondRecommendTitle>h2").eq(1).css({ width: "365px", marginRight: "15px" })
    $(".secondRecommendTitle>h2").eq(2).css({ width: "220px" })
    $(".secondRecommendTitle>h2>span").css({ color: "red" })

})