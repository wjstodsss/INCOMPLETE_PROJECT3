$().ready(function () {
    $('.headerMiddleBack').after("<div class='headerBottomBack'></div>")
    $('.headerBottomBack').css({ width: "100%", height: "45px", backgroundColor: "#ef544d", borderBottom: "2px solid #d74b45" })

    $(".headerBottomBack").append("<div class='headerBottom'></div>")
    $(".headerBottom").css({ width: "980px", height: "45px", margin: "0 auto", backgroundColor: "#fff", backgroundColor: "#ef544d" })

    $(".headerBottom").append("<div class='headerBottomLeft'></div>")
    $(".headerBottomLeft").css({ float: "left", width: "150px", height: "45px", backgroundColor: "#c43730", position: "relative", textAlign: "center", cursor: "pointer" })
    $(".headerBottomLeft").append("<div class='headerBottomButton'></div>")
    $(".headerBottomButton").css({ width: "42px", height: "100%", position: "absolute", display: "flex", justifyContent: 'center' })
    $('.headerBottomButton').append("<div class='headerBottomHamButton'></div>")
    $('.headerBottomButton').append("<div class='headerBottomHamButton'></div>")
    $('.headerBottomButton').append("<div class='headerBottomHamButton'></div>")
    $(".headerBottomHamButton").css({ display: "flex", width: "25px", height: "3px", backgroundColor: "#fff", position: "absolute", color: "white" })
    $(".headerBottomHamButton").eq(0).css({ marginTop: "15px" })
    $(".headerBottomHamButton").eq(1).css({ marginTop: "21px" })
    $(".headerBottomHamButton").eq(2).css({ marginTop: "27px" })

    $(".headerBottomLeft").append("<div class='headerBottomText'></div>")
    $('.headerBottomText').text("전체 카테고리▽")
    $('.headerBottomText').css({ color: "white", fontSize: "14px", lineHeight: "45px", marginLeft: "30px" })

    $(".headerBottom").append("<div class='headerBottomCenter'></div>")
    $(".headerBottomCenter").css({ float: "left", width: "380px", height: "45px", backgroundColor: "#ef544d" })
    $(".headerBottomCenter").append("<a href='#'>베스트 셀러</a>")
    $(".headerBottomCenter").append("<a href='#'>신간</a>")
    $(".headerBottomCenter").append("<a href='#'>이벤트</a>")
    $(".headerBottomCenter>a").css({ color: "white", lineHeight: "45px", margin: "0 15px" })


    $(".headerBottomImg>Img").css({ width: "18px", height: "100%", backgroundColor: "#eee" })
    $(".headerBottom").append("<div class='headerBottomCategory'><a href='#'></a></div>")

    $(".headerBottomLeft").append("<div class='headerBottomLeftChild'></div>")
    $(".headerBottomLeftChild").css({ float: "left", width: "630px", height: "730px", backgroundColor: "#fff", position: "absolute", top: "45px", xIndex: "10", border: "2px solid #d74b45", borderTop: "0", display: "none", zIndex: "100" })

    $(".headerBottomLeftChild").append("<div class='headerBottomLeftChildLeft'></div>")
    $(".headerBottomLeftChildLeft").css({ float: "left", width: "42%", height: "685px", textAlign: "left" })
    $(".headerBottomLeftChildLeft").append("<ul><h3>국내도서</h3></ul>")
    $(".headerBottomLeftChildLeft>ul").css({ float: "left", margin: "10px", fontSize: "14px" })
    $(".headerBottomLeftChildLeft>ul>h3").css({ fontSize: "12px" })


    const HEADER_BOTTOM_CATEGORY = ["소설", "장르소설", "시ㆍ에세이", "경제경영", "자기계발", "사회과학", "역사ㆍ문학", "예술ㆍ대중문화", "인문", "자연ㆍ과학", "종교ㆍ역학", "유아", "아동", "가정과생활", "청소년", "초등학습", "중등학습", "고등학습", "국어ㆍ외국어ㆍ사전"]
    for (let i = 0; i < HEADER_BOTTOM_CATEGORY.length; i++) {
        $(".headerBottomLeftChildLeft>ul").append("<li><a href='#'>" + HEADER_BOTTOM_CATEGORY[i] + "</a></li>")
    }

    $(".headerBottomLeftChildLeft").append("<ul></ul>")

    const HEADER_BOTTOM_CATEGORY2 = ["자격서ㆍ수험서", "공무원 수험서", "컴퓨터ㆍ인터넷", "전공ㆍ대학교재", "여행", "취미레저", "건강뷰티", "잡지", "만화ㆍ라이트노벨", "유아동전집", "예약판매"]
    for (let i = 0; i < HEADER_BOTTOM_CATEGORY2.length; i++) {
        $(".headerBottomLeftChildLeft>ul").eq(1).append("<li><a href='#'>" + HEADER_BOTTOM_CATEGORY2[i] + "</a></li>")
    }

    $(".headerBottomLeftChildLeft>ul>li>a").css({ fontSize: "11px", color: "#666" })
    $(".headerBottomLeftChildLeft>ul").eq(1).css({ float: "left", margin: "25px" })

    $(".headerBottomLeftChild").append("<div class='headerBottomLeftChildCenter'></div>")
    $(".headerBottomLeftChildCenter").css({ float: "left", width: "29%", height: "685px", textAlign: "left", borderLeft: "1px solid #eee", borderRight: "1px solid #eee" })

    $(".headerBottomLeftChildCenter").append("<ul><h3>외국도서</h3></ul>")
    $(".headerBottomLeftChildCenter>ul").css({ float: "left", margin: "10px", fontSize: "14px" })
    $(".headerBottomLeftChildCenter>ul>h3").css({ fontSize: "12px" })
    const HEADER_BOTTOM_CATEGORY3 = ["어린이", "문학", "ELTㆍ사전", "컴퓨터", "경제ㆍ인문", "실용ㆍ예술", "대학ㆍ전문서적", "해외잡지", "학습교구/게임", "프랑스도서", "예약판매", "원서&번역서"]
    for (let i = 0; i < HEADER_BOTTOM_CATEGORY3.length; i++) {
        $(".headerBottomLeftChildCenter>ul").append("<li><a href='#'>" + HEADER_BOTTOM_CATEGORY3[i] + "</a></li>")
    }
    $(".headerBottomLeftChildCenter>ul>li>a").css({ fontSize: "11px", color: "#666" })

    $(".headerBottomLeftChild").append("<div class='headerBottomLeftChildRight'></div>")
    $(".headerBottomLeftChildRight").css({ float: "left", width: "29%", height: "685px" })

    $(".headerBottomLeftChildRight").append("<ul><h3>굿즈#</h3></ul>")
    $(".headerBottomLeftChildRight>ul").css({ float: "left", margin: "10px", fontSize: "14px", textAlign: "left" })
    $(".headerBottomLeftChildRight>ul>h3").css({ fontSize: "12px" })
    const HEADER_BOTTOM_CATEGORY4 = ["문구/팬시", "사무/학용", "학습", "독서용품"]
    for (let i = 0; i < HEADER_BOTTOM_CATEGORY4.length; i++) {
        $(".headerBottomLeftChildRight>ul").append("<li><a href='#'>" + HEADER_BOTTOM_CATEGORY4[i] + "</a></li>")
    }
    $(".headerBottomLeftChildRight>ul>li>a").css({ fontSize: "11px", color: "#666", textAlign: "left" })

    $(".headerBottomLeftChild").append("<div class='headerBottomLeftChildBottom'></div>")
    $(".headerBottomLeftChildBottom").css({ float: "left", width: "100%", height: "43px", backgroundColor: "#fff", borderTop: "1px solid #000", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" })
    $(".headerBottomLeftChildBottom").append("<div>X</div>")
    $(".headerBottomLeftChildBottom>div").css({ fontSize: "24px" })


    $(".headerBottomText").click(
        function () {
            $(".headerBottomLeftChild").toggle()
        }
    )

    $(".headerBottomButton").click(
        function () {
            $(".headerBottomLeftChild").toggle()
        }
    )

    $(".headerBottomLeftChildBottom").click(

        function () {
            console.log("dd")
            $(".headerBottomLeftChild").css({ display: "none" })
        }
    )
})