$(document).ready(function () {
    $("body").append("<div class='headerTopBack'></div>")
    $(".headerTopBack").css({ width: "100%", height: "35px", backgroundColor: "#f4f6f9", borderBottom: "#eee" })

    $(".headerTopBack").append("<div class='headerTop'></div>")
    $(".headerTop").css({ width: "980px", height: "35px", margin: "0 auto" })

    $(".headerTop").append("<nav class='headerTopNavLeft'></nav>")
    $(".headerTop").append("<nav class='headerTopNavRight'></nav>")
    $(".headerTopNavLeft").css({ float: "left", width: "50%", height: "100%" })
    $(".headerTopNavRight").css({ float: "left", width: "50%", height: "100%" })

    $(".headerTopNavLeft").append("<ul class='headerTopNavLeftUl'></ul>")
    $(".headerTopNavRight").append("<ul class='headerTopNavRightUl'></ul>")
    $(".headerTopNavLeftUl, .headerTopNavRightUl").css({ height: "100%" })

    const HEADER_TOP_LEFT_NAV_TITLE_IN_ANCHOR = ["홈", "투어", "티켓", "쇼핑", "도서"]

    for (let i = 0; i < HEADER_TOP_LEFT_NAV_TITLE_IN_ANCHOR.length; i++) {
        $(".headerTopNavLeftUl").append('<li class="headerTopNavLeftLi"></li>')
    }

    for (let i = 0; i < HEADER_TOP_LEFT_NAV_TITLE_IN_ANCHOR.length; i++) {
        $(".headerTopNavLeftLi").eq(i).append('<a href="#">' + HEADER_TOP_LEFT_NAV_TITLE_IN_ANCHOR[i] + '</a>')
    }

    $(".headerTopNavLeftUl>li").css({ float: "left", display: "flex", justifyContent: "center", alignItems: "center", padding: "2px 15px", borderRight: "1px solid #eee", height: "100%", width: "62px" })
    $(".headerTopNavLeftUl>li>a").css({ float: "left", color: "#777", fontSize: "12px", fontFamily: "Malgun Gothic, 맑은 고딕, Nanum Gothic, Dotum" })
    $(".headerTopNavLeftLi").eq(4).css({ borderBottom: "none" })
    $(".headerTopNavLeftLi").eq(0).css({ borderLeft: "1px solid #eee" })
    $(".headerTopNavLeftUl>li").eq(4).css({ backgroundColor: "white" })
    $(".headerTopNavLeftUl>li>a").eq(4).css({ color: "black" })

    const HEADER_TOP_RIGHT_NAV_TITLE_IN_ANCHOR = ["로그인", "회원가입", "북카트", "마이페이지 ▼", "북피니언", "고객센터"]

    for (let i = 0; i < HEADER_TOP_RIGHT_NAV_TITLE_IN_ANCHOR.length; i++) {
        $(".headerTopNavRightUl").append('<li class="headerTopNavRightLi"></li>')
    }

    for (let i = 0; i < HEADER_TOP_RIGHT_NAV_TITLE_IN_ANCHOR.length; i++) {
        $(".headerTopNavRightLi").eq(i).append('<a href="#">' + HEADER_TOP_RIGHT_NAV_TITLE_IN_ANCHOR[i] + '</a>')
    }

    $(".headerTopNavRightUl>li").css({ float: "left", display: "flex", textAlign: "center", padding: "2px 7px", lineHeight: "30px", height: "100%" })
    $(".headerTopNavRightUl>li>a").css({ float: "left", color: "#777", fontSize: "12px", fontFamily: "Malgun Gothic, 맑은 고딕, Nanum Gothic, Dotum" })
    $(".headerTopNavRightUl>li").eq(0).css({ marginLeft: "110px" })


})