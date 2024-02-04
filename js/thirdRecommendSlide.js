$(document).ready(function () {
    $('.thirdRecommendBack').after("<div class='thirdRecommendSlideBack'></div>")
    $('.thirdRecommendSlideBack').css({ width: "100%", height: "400px" })

    $(".thirdRecommendSlideBack").append("<div class='thirdRecommendSlideTopParent'></div>")
    $(".thirdRecommendSlideBack").append("<div class='thirdRecommendSlide'></div>")

    $(".thirdRecommendSlide").css({ width: "980px", height: "300px", margin: "0 auto", position: "relative", marginTop: "-20px" })

    $(".thirdRecommendSlide").append("<div class='thirdRecommendSlideWrap'></div>")

    // .thirdRecommendSlideWrapTop: 슬라이드 프레임 외부 핸들러 -> 타겟명 변경
    $(".thirdRecommendSlideTopParent").append("<div class='thirdRecommendSlideTop'></div>")
    $(".thirdRecommendSlideTopParent").css({ width: "980px", height: "100px", margin: "0 auto", borderTop: "1px solid #000" })
    $(".thirdRecommendSlideTop").css({ float: "left", textAlign: "center", width: "980px", display: "flex", justifyContent: "space-between", padding: "45px" })


    // 외부 핸들러 리스트
    const THIRD_BOOK_NAV_TITLE = ["문학", "인문/교양", "경제/실용", "유아/아동", "학습/어학", "외국도서"];

    for (let i = 0; i < THIRD_BOOK_NAV_TITLE.length; i++) {
        $(".thirdRecommendSlideTop").append('<li class="thirdBookNavTitle">' + THIRD_BOOK_NAV_TITLE[i] + '</li>')
    }
    // 외부 핸들러 스타일 설정
    $(".thirdBookNavTitle").css({ fontSize: "14px", fontFamily: "fantasy", fontWeight: "bold", color: "#000", cursor: "pointer" })

    

    // 슬라이드
    $(".thirdRecommendSlideWrap").append("<div class='thirdRecommendSlideSetSet'></div>")
    $(".thirdRecommendSlideWrap").css({ float: "left", width: "930px", height: "300px", borderTop: "1px solid #ccc", position: "relative", overflow: "hidden", margin: "0 auto" })
    $(".thirdRecommendSlideWrap").append("<span class='prev4'>&lt;</span>")
    $(".thirdRecommendSlideWrap").append("<span class='next4'>&gt;</span>")
    $(".prev4").css({ zIndex: "10", height: "10%", display: "block", alignItems: "center", position: "absolute", left: "0", cursor: "pointer", top: "45%" })
    $(".next4").css({ zIndex: "10", height: "10%", display: "block", alignItems: "center", position: "absolute", right: "0", cursor: "pointer", top: "45%" })
    
    
    function thousandsSeparator(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // 링크는 각 제품별로 따로 넣야 하므로 현재 발생하는 카테고리 전환시 링크가 사라지는 버그는 후에 다시 고민 해 볼 것

    const OVER_SEA_INDEX = 5;
    function pointCalculator (price, categoryIndex) {
        if (categoryIndex === OVER_SEA_INDEX) {
            return Math.ceil(price*0.03)
        }
        return Math.ceil(price*0.05)
    }
    
    $.ajax({
        
        url: "./json/thirdSlide/literature.json",
        dataType: "json",
        success: function (data) {
           
            $(".thirdRecommendSlideSetSet").css({ width: "1960px", height: "300px",})
            
            if (data.documents.length > 0) {
                
                for (let i = 0; i < data.documents.length; i++) {
                    $(".thirdRecommendSlideSetSet").append("<a href='#'><div class='thirdRecommendSlideSet'></div></a>");
                    $(".thirdRecommendSlideSet").css({ float: "left", width: "155px", height: "315px", padding: "30px 5px 10px", textAlign:"center" })
                    $(".thirdRecommendSlideSet").eq(i).append("<img src=" + data.documents[i].thumbnail + " alt='product image' class='thirdRecommendSlideSetImg'>")
                    $(".thirdRecommendSlideSet").eq(i).append("<ul class='thirdRecommendSlideSetTitle'>" + data.documents[i].title + "</ul>")
                    $(".thirdRecommendSlideSet").eq(i).append("<li class='thirdRecommendSlideSetPoint'>" + thousandsSeparator(pointCalculator(data.documents[i].price,0)) + "P <span>적립</span></li>")
                    $(".thirdRecommendSlideSet").eq(i).append("<li class='thirdRecommendSlideSetSalePrice'>" + thousandsSeparator(data.documents[i].sale_price) + "원</li>")
                }

                $(".thirdRecommendSlideSetImg").css({ width: "120px", height: "150px", paddingRight: "5px"})
                $(".thirdRecommendSlideSetTitle").css({ height:"60px", fontSize: "10px", padding: "5px", fontWeight: "bold" })
                $(".thirdRecommendSlideSetPoint").css({fontSize: "10px", padding: "5px", fontWeight: "bold" })
                $(".thirdRecommendSlideSetPoint>span").css({color: "#fff", backgroundColor: "magenta", padding:"1px" })
                $(".thirdRecommendSlideSetSalePrice").css({ fontSize: "10px", padding: "5px" })
            }
        }
    });

    
    const THIRD_RECOMMEND_INFO_URL = ["./json/thirdSlide/literature.json", "./json/thirdSlide/humanities.json", "./json/thirdSlide/economy.json", "./json/thirdSlide/child.json", "./json/thirdSlide/language.json", "./json/thirdSlide/overSea.json"]
    $(".thirdRecommendSlideTop>li").mouseenter(function () {
        
        if ($(this).index() === 0) {
            $(this).css({ color: "red"})
            $(".thirdRecommendSlideTop>li").not(this).css({ color: "black", borderRight:"none", borderTop:"none", backgroundColor:"transparent" })
        } else {
            $(this).css({ color: "red" })
            $(".thirdRecommendSlideTop>li").not(this).css({ color: "black", borderLeft:"none", borderTop:"none", backgroundColor:"transparent" })
        }
        
        let categoryIndex = $(".thirdRecommendSlideTop>li").index(this)
       
        $.ajax({
            
            url: THIRD_RECOMMEND_INFO_URL[categoryIndex],
            dataType: "json",
            success: function (data) {
                $(".thirdRecommendSlideSetSet").empty();

                if (data.documents.length > 0) {

                    
                    for (let i = 0; i < data.documents.length; i++) {
                        $(".thirdRecommendSlideSetSet").append("<a href='#'><div class='thirdRecommendSlideSet'></div></a>");
                        $(".thirdRecommendSlideSet").css({ float: "left", width: "155px", height: "315px", padding: "30px 5px 10px", textAlign:"center" })
                        $(".thirdRecommendSlideSet").eq(i).append("<img src=" + data.documents[i].thumbnail + " alt='product image' class='thirdRecommendSlideSetImg'>")
                        $(".thirdRecommendSlideSet").eq(i).append("<ul class='thirdRecommendSlideSetTitle'>" + data.documents[i].title + "</ul>")
                        $(".thirdRecommendSlideSet").eq(i).append("<li class='thirdRecommendSlideSetPoint'>" + thousandsSeparator(pointCalculator(data.documents[i].price, categoryIndex)) + " <span>적립</span></li>")
                        $(".thirdRecommendSlideSet").eq(i).append("<li class='thirdRecommendSlideSetSalePrice'>" + thousandsSeparator(data.documents[i].sale_price) + "원</li>")
                    }
    
                    $(".thirdRecommendSlideSetImg").css({ width: "120px", height: "150px", paddingRight: "5px"})
                    $(".thirdRecommendSlideSetTitle").css({ height:"60px", fontSize: "10px", padding: "5px", fontWeight: "bold" })
                    $(".thirdRecommendSlideSetPoint").css({fontSize: "10px", padding: "5px", fontWeight: "bold" })
                    $(".thirdRecommendSlideSetPoint>span").css({color: "#fff", backgroundColor: "magenta", padding:"1px" })
                    $(".thirdRecommendSlideSetSalePrice").css({ fontSize: "10px", padding: "5px" })
                }
                
                if (data.documents.length < 7) {
                    $(".prev4").css("display", "none")
                    $(".next4").css("display", "none")
                    return
                }
                $(".prev4").css("display", "block")
                $(".next4").css("display", "block")
                return
            }
        });
    })


    /*
    $("#toggleButton").click(function() {
        $("#content1, #content2").toggle();
    });
    */
    
    const SHOW_COUNT = 6;
    function prev4() {
        for (let i = 0; i < SHOW_COUNT; i++) {
            $('.thirdRecommendSlideSet:last').prependTo('.thirdRecommendSlideSetSet');
        }
        $('.thirdRecommendSlideSetSet').css('margin-left', -930);
        $('.thirdRecommendSlideSetSet').stop().animate({ marginLeft: 0 }, 800);
    }

    function next4() {
        $('.thirdRecommendSlideSetSet').stop().animate({ marginLeft: -930 },
            function () {
                for (let i = 0; i < SHOW_COUNT; i++) {
                    $('.thirdRecommendSlideSet:first').appendTo('.thirdRecommendSlideSetSet');
                }
                $('.thirdRecommendSlideSetSet').css({ marginLeft: 0 });
            });
    }

    $('.prev4').click(function () {
        prev4();
    });
    $('.next4').click(function () {
        next4();
    });
})