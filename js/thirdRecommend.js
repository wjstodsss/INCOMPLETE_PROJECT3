$(document).ready(function () {
    $('.secondBannerZoneBack').after("<div class='thirdRecommendBack'></div>")
    $('.thirdRecommendBack').css({ width: "100%", height: "40px" })

    $(".thirdRecommendBack").append("<div class='thirdRecommend'></div>")
    $(".thirdRecommend").css({ width: "980px", height: "40px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: "10" })
    $(".thirdRecommend").append("<div class='thirdRecommendLeft'></div>")

    $(".thirdRecommend").append("<h2>분야별<span>추천!</span></h2>")

    $(".thirdRecommend>h2").css({ color: "#666", lineHeight: "40px", width: "170px", height: "100%", backgroundColor: "#fff", marginLeft: "405px" })
    $(".thirdRecommend>h2>span").css({ color: "red" })
})