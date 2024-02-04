$(document).ready(function () {
    $('.firstBannerZoneBack').after("<div class='firstRecommendBack'></div>")
    $('.firstRecommendBack').css({ width: "100%", height: "40px" })

    $(".firstRecommendBack").append("<div class='firstRecommend'></div>")
    $(".firstRecommend").css({ width: "980px", height: "40px", margin: "0 auto" })
    $(".firstRecommend").append("<div class='firstRecommendLeft'></div>")

    $(".firstRecommendLeft").css({ float: "left", width: "745px", height: "40px", textAlign: "center", position: "relative", zIndex: "10" })

    $(".firstRecommendLeft").append("<h2>인터파크<span>추천!</span></h2>")
    $(".firstRecommendLeft").append("<div></div>")
    //$(".firstRecommendLeft>div").css({ color: "green", width: "125px", height: "100%", position: "absolute", top: "0", zIndex: "1000" })
    $(".firstRecommendLeft>h2").css({ color: "#666", lineHeight: "40px", width: "170px", height: "100%", backgroundColor: "#fff", marginLeft: "280px" })
    $(".firstRecommendLeft>h2>span").css({ color: "red" })
    $(".firstRecommendLeft").append("<a href='#'>더보기></a>")
    $(".firstRecommendLeft>a").css({ position: "absolute", top: "0", left: "90%", fontSize: "12px", color: "#666" })

    $(".firstRecommend").append("<div class='firstRecommendRight'></div>")
    $(".firstRecommendRight").css({ float: "left", width: "235px", height: "40px", paddingLeft: "15px" })
    $(".firstRecommendRight").append("<h2>Trend & Issue</h2>")
    $(".firstRecommendRight>h2").css({ float: "left", color: "#666", fontSize: "14px" })

})