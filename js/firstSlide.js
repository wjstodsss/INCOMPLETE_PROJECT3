$(document).ready(function () {
    $('.headerBottomBack').after("<div class='firstSlideBack'></div>")
    $('.firstSlideBack').css({ width: "100%", height: "365px" })

    $(".firstSlideBack").append("<div class='firstSlideBackTop'></div>")
    $(".firstSlideBack").append("<div class='firstSlideBackBottom'></div>")
    $(".firstSlideBackTop").css({ width: "100%", height: "320px", margin: "0 auto" })
    $(".firstSlideBackBottom").css({ width: "100%", height: "45px", margin: "0 auto", backgroundColor: "#f7f7f7" })
    $(".firstSlideBackBottom").append("<div class='firstSlideBottomParent'></div>")
    $('.firstSlideBackTop').append("<div class='firstSlide'></div>")
    $(".firstSlide").css({ position: "relative", width: "980px", height: "320px", margin: "0 auto" })


    $(".firstSlide").append("<div class='firstSlideWrap'></div>")
    $(".firstSlideWrap").after("<div class='firstSlideRight'></div>")
    $('.firstSlideRight').css({ float: "right", width: "220px", height: "320px", backgroundColor: "#888", border: "1px solid #ddd", fontSize: "14px", textAlign: "center" })


    $('.firstSlideRight').append("<h2>베스트 셀러</h2>")
    $('.firstSlideRight').append("<div></div>")
    $('.firstSlideRight>div').css({ width: "100%", height: "250px",backgroundSize:"cover", backgroundImage: "url('img/mainSlide/hot_book/best.jpg')" })
    $('.firstSlideRight>h2').css({ display: "block", height: "32px", color: "#fff29c", borderBottom: "1px solid #fff" })
    // 테레비 프레임 크기 설정, 포지션 앱솔루트 후 위치 설정 top:0
    $(".firstSlideWrap").css({ width: "760px", height: "320px", position: "absolute", top: "0", overflow: "hidden" })

    // .firstSlideWrapBottom: 슬라이드 프레임 외부 핸들러 -> 타겟명 변경
    $(".firstSlideBottomParent").append("<div class='firstSlideBottom'></div>")
    $(".firstSlideBottomParent").css({ width: "980px", height: "100%", margin: "0 auto", borderTop: "1px solid #000" })
    $(".firstSlideBottom").css({ float: "left", textAlign: "center", width: "740px", display: "flex", justifyContent: "space-between" })


    // 외부 핸들러 리스트
    const BOOK_NAV_TITLE = ["핫클릭 이벤트", "집이 제일 좋아", "추천 이벤트", "화제의 책"];

    for (let i = 0; i < BOOK_NAV_TITLE.length; i++) {
        $(".firstSlideBottom").append('<li class="bookNavTitle">' + BOOK_NAV_TITLE[i] + '</li>')
    }
    // 외부 핸들러 스타일 설정
    $(".bookNavTitle").css({ fontSize: "14px", fontFamily: "fantasy", fontWeight: "bold", color: "#000", cursor: "pointer", padding: "15px 50px" })

    $(".firstSlideWrap").append("<span class='prev1'>&lt;</span>")
    $(".firstSlideWrap").append("<span class='next1'>&gt;</span>")
    $(".firstSlideWrap").append("<div class='mainSlideSetSet'></div>") // 이미지 세트 세트




    $(".prev1").css({ zIndex: "10", height: "10%", display: "flex", alignItems: "center", backgroundColor: "#ddd", position: "absolute", left: "0", padding: "0 10px", cursor: "pointer", marginTop: "20%", opacity: "0.5" })
    $(".next1").css({ zIndex: "10", height: "10%", display: "flex", alignItems: "center", backgroundColor: "#ddd", position: "absolute", right: "0", padding: "0 10px", cursor: "pointer", marginTop: "20%", opacity: "0.5" })

    // 링크는 각 제품별로 따로 넣야 하므로 현재 발생하는 카테고리 전환시 링크가 사라지는 버그는 후에 다시 고민 해 볼 것
    $.ajax({
        url: "./json/hotEvent.json",
        dataType: "json",
        success: function (data) {

            if (data.length > 0) {
                $(".mainSlideSetSet").css({ width: 760 * data.length + "px", height: "320px", textAlign: "center" })

                for (let i = 0; i < data.length; i++) {
                    $(".mainSlideSetSet").append("<a href='#'><div class='mainSlideSet'></div></a>");
                    $(".mainSlideSet").css({ float: "left", width: "760px", height: "320px", backgroundColor: "white" })
                    $(".mainSlideSet").eq(i).append("<img src=" + data[i].src + " alt='product image' class='mainSlideSetImg'>")
                }

                $(".mainSlideSetImg").css({ width: "760px", height: "100%" })
            }
        }
    });





    const mainSlide_INFO_URL = ["json/hotEvent.json", "json/homeGood.json", "json/recommendEvent.json", "json/hotBook.json"]
    $(".bookNavTitle").click(function () {
        $(".mainSlideSetSet").empty();
        
        $.ajax({
            url: mainSlide_INFO_URL[$(".bookNavTitle").index(this)],
            dataType: "json",
            success: function (data) {
                console.log(data.length)
                if (data.length > 0) {
                    const RECOMMEND_MESSAGE = ["KAIST 총장의 지적 여정", "이동진이 추천 이달의 책", "하와이 대저택과 100일 쓰기", "38가지 인생 카운슬링"]
                    $(".mainSlideSetSet").css({ width: 760 * data.length + "px", height: "320px", textAlign: "center" })
                    for (let i = 0; i < data.length; i++) {
                        $(".mainSlideSetSet").append("<a href='#a'><div class='mainSlideSet'></div></a>");
                        $(".mainSlideSet").css({ float: "left", width: "760px", height: "320px", backgroundColor: "white" })
                        $(".mainSlideSet").eq(i).append("<img src=" + data[i].src + " alt='product image' class='mainSlideSetImg'>")
                    }
                    $(".mainSlideSetImg").css({ width: "760px", height: "100%" })
                }
                
                if (data.length < 4) {
                    $(".prev1").css("display", "none")
                    $(".next1").css("display", "none")
                    return
                }
                $(".prev1").css("display", "block")
                $(".next1").css("display", "block")
                return
            }
            
        });
    })



    const SHOW_COUNT = 1;
    function prev1() {
        if ($(".mainSlideSet").length < 2) return

        for (let i = 0; i < SHOW_COUNT; i++) {
            $('.mainSlideSet:last').prependTo('.mainSlideSetSet');
        }
        $('.mainSlideSetSet').css('margin-left', -760);
        $('.mainSlideSetSet').stop().animate({ marginLeft: 0 }, 800);
    }

    function next1() {
        if ($(".mainSlideSet").length < 2) return
        $('.mainSlideSetSet').stop().animate({ marginLeft: -760 },
            function () {
                for (let i = 0; i < SHOW_COUNT; i++) {
                    $('.mainSlideSet:first').appendTo('.mainSlideSetSet');
                }
                $('.mainSlideSetSet').css({ marginLeft: 0 });
            });
    }

    $('.prev1').click(function () {
        prev1();
    });
    $('.next1').click(function () {
        next1();
    });
})