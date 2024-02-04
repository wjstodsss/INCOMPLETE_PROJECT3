$(document).ready(function () {
    $('.secondRecommendSlideBack').after("<div class='secondBannerZoneBack'></div>")
    $('.secondBannerZoneBack').css({ width: "100%", height: "145px" })

    $(".secondBannerZoneBack").append("<div class='secondBannerZone'></div>")
    $(".secondBannerZone").css({ width: "980px", height: "100%", margin: "0 auto", backgroundColor: "#fff" })

    // 요기 까지 복사해서 첫줄에 삽입할 위치 변경해주고Back이전까지 파일명 변경해주고 인덱스파일에 해당js삽입 back에 높이를 잡아주세요

    $(".secondBannerZone").append("<a href='#'><img src='img/banner/bannerLogIn.png' alt='로그인배너' class='secondBannerZoneFrame'></a>")

    $(".secondBannerZoneFrame").css({ float: "left", width: "980px", height: "100%" })


})