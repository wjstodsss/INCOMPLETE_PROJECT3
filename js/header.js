$().ready(function () {
    $("body").append("<header class='headerBack'></header>")
    $(".headerBack").css({ width: "100%", height: "180px", backgroundColor: "blue" })
    $(".headerBack").append("<div class='headerTop'></div>")
    $(".headerTop").css({ width: "980px", height: "35px", margin: "0 auto" })
    $(".headerTop").append("<nav class='headerTopNavLeft'></nav>")
    $(".headerTop").append("<nav class='headerTopNavRight'></nav>")
    $(".headerTopNavLeft").css({ float: "left", width: "50%", height: "100%" })
    $(".headerTopNavRight").css({ float: "left", width: "50%", height: "100%" })
    $(".headerTopNavLeft").append("<ul class='headerTopNavLeftUl'></ul>")
    $(".headerTopNavRight").append("<ul class='headerTopNavRightUl'></ul>")

    $(".headerTopNavLeftUl").append('<li class="headerTopNavLeftLi"><a href="#">홈</a></li>')
    $(".headerTopNavLeftUl").append('<li class="headerTopNavLeftLi"><a href="#">투어</a></li>')
    $(".headerTopNavLeftUl").append('<li class="headerTopNavLeftLi"><a href="#">티켓</a></li>')
    $(".headerTopNavLeftUl").append('<li class="headerTopNavLeftLi"><a href="#">쇼핑</a></li>')
    $(".headerTopNavLeftUl").append('<li class="headerTopNavLeftLi"><a href="#">도서</a></li>')
    $(".headerTopNavLeftUl, .headerTopNavRightUl").css({ height: "100%" })
    $(".headerTopNavRightUl").append('<li class="headerTopNavRightLi"><a href="#">로그인</a></li>')
    $(".headerTopNavRightUl").append('<li class="headerTopNavRightLi"><a href="#">회원가입</a></li>')
    $(".headerTopNavRightUl").append('<li class="headerTopNavRightLi"><a href="#">북카트</a></li>')
    $(".headerTopNavRightUl").append('<li class="headerTopNavRightLi"><a href="#">마이페이지 ▼</a></li>')
    $(".headerTopNavRightUl").append('<li class="headerTopNavRightLi"><a href="#">북피니언</a></li>')
    $(".headerTopNavRightUl").append('<li class="headerTopNavRightLi"><a href="#">고객센터</a></li>')
    $(".headerTopNavLeftUl>li").css({ float: "left", display: "flex", textAlign: "center", padding: "2px 15px", lineHeight: "30px", border: "1px solid #ccc", marginLeft: "-1px", height: "100%" })
    $(".headerTopNavLeftUl>li>a").css({ float: "left", color: "white", fontSize: "12px", fontFamily: "Malgun Gothic, 맑은 고딕, Nanum Gothic, Dotum" })
    $(".headerTopNavRightUl>li").css({ float: "left", display: "flex", textAlign: "center", padding: "2px 15px", lineHeight: "30px", border: "1px solid #ccc", marginLeft: "-1px", height: "100%" })
    $(".headerTopNavRightUl>li>a").css({ float: "left", color: "white", fontSize: "12px", fontFamily: "Malgun Gothic, 맑은 고딕, Nanum Gothic, Dotum" })
    $(".headerTopNavLeftLi").eq(4).css({ borderBottom: "none" })


})