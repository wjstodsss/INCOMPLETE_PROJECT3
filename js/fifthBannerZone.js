$(document).ready(function () {
    $('.fourthBannerZoneBack').after("<div class='fifthBannerZoneBack'></div>")
    $('.fifthBannerZoneBack').css({ width: "100%", height: "60px", borderBottom: "1px solid #666", marginTop: "30px" })

    $(".fifthBannerZoneBack").append("<div class='fifthBannerZoneLeft'></div>")
    $(".fifthBannerZoneBack").append("<div class='fifthBannerZoneRight'></div>")
    $(".fifthBannerZoneLeft").css({ float: "left", width: "50%", height: "100%", textAlign: "right", backgroundColor: "#58cfc7", borderRight: "1px solid #fff" })
    $(".fifthBannerZoneRight").css({ float: "left", width: "50%", height: "100%", textAlign: "left", backgroundColor: "#58cfc7" })

    $(".fifthBannerZoneBack").append("<div class='fifthBannerZoneCenter'></div>")
    $(".fifthBannerZoneCenter").css({ width: "980", height: "100%", margin: "0 auto", position: "relative", zIndex: "5" });


    $(".fifthBannerZoneCenter").append("<div class='fifthBannerZoneCenterLeft'>매일매일 선착순 도서 상품권 받기! <span>이달의 혜택 모음</span></div>")
    $(".fifthBannerZoneCenterLeft").css({ paddingLeft: "85px", float: "left", width: "490px", height: "100%", position: "absolute", color: "white", lineHeight: "55px" });
    $(".fifthBannerZoneCenterLeft>span").css({ color: "#fff5b1" });
    $(".fifthBannerZoneCenter").append("<div class='fifthBannerZoneCenterRight'>친구에게 상품권 선물 FLEX로 포인트 적립까지! <span>상품권 선물하기</span></div>")
    $(".fifthBannerZoneCenterRight").css({ paddingLeft: "20px", float: "left", width: "490px", height: "100%", position: "absolute", color: "white", lineHeight: "55px", left: "50%" });
    $(".fifthBannerZoneCenterRight>span").css({ color: "#fff5b1" });

    $(".fifthBannerZoneLeft>a").css({ fontSize: "17px", color: "#fff", marginRight: "40px", lineHeight: "55px", whiteSpace: "nowrap" })
    $(".fifthBannerZoneRight>a").css({ fontSize: "17px", color: "#fff", marginLeft: "40px", lineHeight: "55px", whiteSpace: "nowrap" })
    $(".fifthBannerZoneLeft>a>span").css({ fontSize: "17px", color: "#fff5b1" })
    $(".fifthBannerZoneRight>a>span").css({ fontSize: "17px", color: "#fff5b1" })
})