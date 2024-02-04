$(document).ready(function () {
    $('.thirdRecommendSlideBack').after("<div class='thirdBannerZoneBack'></div>")
    $('.thirdBannerZoneBack').css({ width: "100%", height: "80px", marginTop: "60px" })

    $(".thirdBannerZoneBack").append("<div class='thirdBannerZone'></div>")
    $(".thirdBannerZone").css({ width: "980px", height: "100%", margin: "0 auto", backgroundColor: "#fff" })

    // 요기 까지 복사해서 첫줄에 삽입할 위치 변경해주고Back이전까지 파일명 변경해주고 인덱스파일에 해당js삽입 back에 높이를 잡아주세요

    $(".thirdBannerZone").append("<a href='#'><img src='img/banner/bannerHistory.jpg' alt='로그인배너' class='thirdBannerZoneFrame'></a>")

    $(".thirdBannerZoneFrame").css({ float: "left", width: "880px", height: "100%", marginLeft: "50px" })


})