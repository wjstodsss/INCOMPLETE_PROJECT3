$(document).ready(function () {
    $('.headerTopBack').after("<div class='headerMiddleBack'></div>")
    $(".headerMiddleBack").css({ width: "100%", height: "100px", backgroundColor: "#fff",borderBottom: "2px solid #222" })

    $(".headerMiddleBack").append("<div class='headerMiddle'></div>")
    $(".headerMiddle").css({width: "980px", height: "100px", margin: "0 auto"})

    $(".headerMiddle").append("<div class='headerMiddleLeft'></div>")
    $(".headerMiddleLeft").css({float:"left", width: "280px", height:"100%", display: "flex", justifyContent:"center", alignItems:"center"})

    $(".headerMiddleLeft").append("<h1><a href='#'>interpark <span>도서</span></a></h1>")
    $(".headerMiddleLeft>h1>a").css({width:"195", height:"38px", color:"#000", fontSize:"28px"})
    $(".headerMiddleLeft>h1>a>span").css({color: "#ff7800"})

    $(".headerMiddle").append("<div class='headerMiddleCenter'></div>")
    $(".headerMiddleCenter").css({float:"left", width:"420px", height:"70px", color:"#000", marginTop:"30px", position: "relative"})
    $(".headerMiddleCenter").append("<input type='text' class='headerMiddleCenterTop' value='SKY로 향하는 5단계 공부법' id='searchInput'>")
    $(".headerMiddleCenterTop").css({float:"left", position: "absolute", width:"420", height:"32px", outline: "none", border: "none", borderBottom: "2px solid red"})
    $(".headerMiddleCenter").append("<img src='img/header/search_button.png' alt='찾기 버튼' id='searchImg'>")
    $("#searchImg").css({position: "absolute", width: "35px", height: "30px", left: "385px"})

    $(".headerMiddleCenter").append("<ul class='headerMiddleCenterBottom'></ul>")
    $(".headerMiddleCenterBottom").css({ position: "absolute", width: "100%", height: "28px", top: "35px"})

    const HIT_SEARCHER = ["EBS 수능특강", "매일 30분", "멸종과진화", "날 위한 선택", "SKY 로드맵"]
    for (let i = 0; i < HIT_SEARCHER.length; i++) {
        $(".headerMiddleCenterBottom").append("<li><a href='#'>" + HIT_SEARCHER[i] + "</a></li>")
        if (i < HIT_SEARCHER.length-1) {
            $(".headerMiddleCenterBottom").append("<li> | </li>")
        }
        
    }
    
    $(".headerMiddleCenterBottom>li").css({ float: "left", margin: "0 2px", color:"#00adef"})
    $(".headerMiddleCenterBottom>li>a").css({ color:"#00adef", fontSize:"12px"})
    
    $(".headerMiddle").append("<div class='headerMiddleRight'></div>")
    $(".headerMiddleRight").css({float:"left", width: "280px", height:"100%", display: "flex", justifyContent:"center", alignItems:"center"})
    $(".headerMiddleRight").append("<a href='#'><img src='img/header/headerAD.jpg' alt='모던 니팅'></a>")

})