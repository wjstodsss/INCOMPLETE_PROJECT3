$(document).ready(function () {
    $('.fourthRecommendSlideBack').after("<div class='fourthBannerZoneBack'></div>")
    $('.fourthBannerZoneBack').css({ width: "100%", height: "100px", marginTop: "60px" })

    $(".fourthBannerZoneBack").append("<div class='fourthBannerZone'></div>")
    $(".fourthBannerZone").css({ width: "980px", height: "100%", margin: "0 auto", backgroundColor: "#fff" })

    // 요기 까지 복사해서 첫줄에 삽입할 위치 변경해주고Back이전까지 파일명 변경해주고 인덱스파일에 해당js삽입 back에 높이를 잡아주세요

    $(".fourthBannerZone").append("<a href='#'><img src='img/banner/bannerAward.png' alt='로그인배너' class='fourthBannerZoneFrame'></a>")

    $(".fourthBannerZoneFrame").css({ float: "left", width: "980px", height: "100%" })


})