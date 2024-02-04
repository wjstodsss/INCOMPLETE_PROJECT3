$(document).ready(function () {
    $('.firstSlideBack').after("<div class='firstBannerZoneBack'></div>")
    $('.firstBannerZoneBack').css({ width: "100%", height: "160px" })

    $(".firstBannerZoneBack").append("<div class='firstBannerZone'></div>")
    $(".firstBannerZone").css({ width: "980px", height: "100%", margin: "0 auto", backgroundColor: "#fff" })

    // 요기 까지 복사해서 첫줄에 삽입할 위치 변경해주고Back이전까지 파일명 변경해주고 인덱스파일에 해당js삽입 back에 높이를 잡아주세요

    $(".firstBannerZone").append("<a href='#'><div class='firstBannerZoneFrame'></div></a>")
    $(".firstBannerZone").append("<a href='#'><div class='firstBannerZoneFrame'></div></a>")
    $(".firstBannerZone").append("<a href='#'><div class='firstBannerZoneFrame'></div></a>")
    $(".firstBannerZoneFrame").css({ float: "left", width: "320px", height: "80px", marginTop: "40px" })
    $(".firstBannerZoneFrame").eq(1).css({ marginLeft: "10px", marginRight: "10px" })

    const FIRST_BANNER_ZONE_URL = ["url('img/banner/banner001.jpg')", "url('img/banner/banner002.png')", "url('img/banner/banner003.jpg')"]

    for (let i in FIRST_BANNER_ZONE_URL) {
        $(".firstBannerZoneFrame").eq(i).css({ backgroundImage: FIRST_BANNER_ZONE_URL[i] })
    }
})