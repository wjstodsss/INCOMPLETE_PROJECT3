$(document).ready(function () {
    // 총 너비: 980 높이: 355
    $('.thirdBannerZoneBack').after("<div class='fourthRecommendSlideBack'></div>")
    $('.fourthRecommendSlideBack').css({ width: "100%", height: "355px", marginTop: "70px" })

    
    $(".fourthRecommendSlideBack").append("<div class='fourthRecommendSlide'></div>")
    $(".fourthRecommendSlide").css({ width: "980px", height: "100%", margin: "0 auto" })

    $(".fourthRecommendSlide").append("<div class='fourthRecommendSlideLeftTopParent'></div>")

    // 타이틀과 슬라이드 구조: 왼쪽 타이틀 뒤에(옆에) 오른쪽 타이틀 뒤에(아래) 왼쪽 슬라이드 뒤에(옆에) 오른쪽 슬라이드
    $(".fourthRecommendSlideLeftTopParent").after("<ul class='fourthRecommendSlideRightTopParent'></ul>")
    $(".fourthRecommendSlideRightTopParent").after("<div class='fourthRecommendSlideLeftWrap'></div>")
    $(".fourthRecommendSlideLeftWrap").after("<div class='fourthRecommendSlideRightWrap'></div>")

    // 왼쪽 타이틀 395 * 40
    $(".fourthRecommendSlideLeftTopParent").append('<h2><span>주목! </span>이달의 책</h2>')
    $(".fourthRecommendSlideLeftTopParent").append("<a href='#'>더보기></a>")
    $(".fourthRecommendSlideLeftTopParent").css({ float: "left", width: "395px", height: "40px", position: "relative" })
    $(".fourthRecommendSlideLeftTopParent>h2").css({ float: "left", color: "#666", height: "100%", fontSize: "17px" })
    $(".fourthRecommendSlideLeftTopParent>a").css({ fontSize: "12px", color: "#666", lineHeight: "25px", marginLeft: "15px" })
    $(".fourthRecommendSlideLeftTopParent>h2>span").css({ color: "red" })


    // 오른쪽 타이틀 540 * 40
    $(".fourthRecommendSlideRightTopParent").append("<li>특가할인</li>")
    $(".fourthRecommendSlideRightTopParent").append("<li>정가인하</li>")
    $(".fourthRecommendSlideRightTopParent").css({ float: "left", width: "540px", height: "40px", marginLeft: "45px" })
    $(".fourthRecommendSlideRightTopParent>li").css({ float: "left", padding: "10px", borderBottom: "none", position: "relative", backgroundColor:"transparent", zIndex: "10", cursor: "pointer" })
    $(".fourthRecommendSlideRightTopParent>li").eq(0).css({ color: "red", border:"1px solid #000", backgroundColor:"#fff", borderBottom: "none" })
    
    // 왼쪽 슬라이드 프레임 외부 핸들러(순서가 중요 위에서 아래로)
    $(".fourthRecommendSlideTopParent").append("<div class='fourthRecommendSlideTop'></div>")
    $(".fourthRecommendSlideLeftTopParent").append("<span class='prev5'>&lt;</span>")
    $(".fourthRecommendSlideLeftTopParent").append("<span class='next5'>&gt;</span>")
    $(".fourthRecommendSlideTop").css({ float: "left", textAlign: "center", width: "980px", display: "flex", justifyContent: "center", padding: "5px" })
    $(".prev5").css({ float: "left", padding: "0 5px", cursor: "pointer", border: "1px solid #ccc", position: "absolute", borderRight: "1px solid #ccc", right: "23px" })
    $(".next5").css({ float: "left", padding: "0 5px", cursor: "pointer", border: "1px solid #ccc", position: "absolute", right: "0" })

    // 왼쪽 슬라이드 395 * 315
    $(".fourthRecommendSlideLeftWrap").css({ float: "left", width: "395px", height: "315px", position: "relative", overflow: "hidden" })
    $(".fourthRecommendSlideLeftWrap").append("<div class='fourthRecommendSlideLeftSetSet'></div>")
    

    
    function thousandsSeparator(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    // 링크는 각 제품별로 따로 넣야 하므로 현재 발생하는 카테고리 전환시 링크가 사라지는 버그는 후에 다시 고민 해 볼 것
    $.ajax({
        url: "./json/fourthRecommend/month.json",
        dataType: "json",
        success: function (data) {

            if (data.length > 0) {
                $(".fourthRecommendSlideLeftSetSet").css({ width: "1580px", height: "150px" })
                for (let i = 0; i < data.length; i++) {
                    $(".fourthRecommendSlideLeftSetSet").append("<a href='#a'><div class='fourthRecommendSlideLeftSet'></div></a>");
                    $(".fourthRecommendSlideLeftSet").css({ float: "left", width: "395px", height: "150px", backgroundColor: "white", padding:"15px" })
                    $(".fourthRecommendSlideLeftSet").eq(i).append("<img src=" + data[i].thumbnail + " alt='product image' class='fourthRecommendSlideLeftSetImg'>")
                    // $(".fourthRecommendSlideLeftSet").eq(i).append("<p class='fourthRecommendSlideLeftSetStarPoint'>" + "☆☆☆☆☆ 10" + "</p>")
                    $(".fourthRecommendSlideLeftSet").eq(i).append("<p class='fourthRecommendSlideLeftSetTitle'>" + data[i].title + "</p>")
                    $(".fourthRecommendSlideLeftSet").eq(i).append("<p class='fourthRecommendSlideLeftSetPrice'><span>" + thousandsSeparator(data[i].price) + "원</span> " + thousandsSeparator(data[i].sale_price) + "원</p>")
                }
                $(".fourthRecommendSlideLeftSetImg").css({  float: "left",width: "77px", height: "100%" })
                // $(".fourthRecommendSlideLeftSetStarPoint").css({float: "left", height: "20px", paddingLeft: "10px" })
                $(".fourthRecommendSlideLeftSetTitle").css({ float: "left", width:"240px", height: "20px", paddingLeft: "10px" })
                $(".fourthRecommendSlideLeftSetPrice").css({ float: "left", width: "200px", height: "20px", paddingLeft: "10px" })
                $(".fourthRecommendSlideLeftSetPrice>span").css({ textDecoration: "line-through" })
            }
        }
    });
   
    const LEFT_SHOW_COUNT = 1;
    function prev5() {
        for (let i = 0; i < LEFT_SHOW_COUNT; i++) {
            $('.fourthRecommendSlideLeftSet:last').prependTo('.fourthRecommendSlideLeftSetSet');
           
        }
        $('.fourthRecommendSlideLeftSetSet').css('margin-left', -395);
        $('.fourthRecommendSlideLeftSetSet').stop().animate({ marginLeft: 0 }, 800);
    }

    function next5() {
        $('.fourthRecommendSlideLeftSetSet').stop().animate({ marginLeft: -395 },
            function () {
                for (let i = 0; i < LEFT_SHOW_COUNT; i++) {
                    $('.fourthRecommendSlideLeftSet:first').appendTo('.fourthRecommendSlideLeftSetSet');
                   
                }
                $('.fourthRecommendSlideLeftSetSet').css({ marginLeft: 0 });
            });
    }

    $('.prev5').click(function () {
        prev5();
    });
    $('.next5').click(function () {
        next5();
    });

    let recommendFourthSlide;

    function startRecommendFourthSlideInterval() {
        recommendFourthSlide = setInterval(next5, 3000);
    }

    function stopRecommendFourthSlideInterval() {
        clearInterval(recommendFourthSlide);
    }

    startRecommendFourthSlideInterval();


    // 오른쪽 슬라이드
    $(".fourthRecommendSlideRightWrap").append("<div class='fourthRecommendSlideRightSetSet'></div>")
    $(".fourthRecommendSlideRightWrap").css({ float: "left", width: "540px", height: "315px", overflow: "hidden", marginLeft: "45px", border: "1px solid #000", position: "relative" })
    $(".fourthRecommendSlideRightWrap").append("<span class='prev6'>&lt;</span>")
    $(".fourthRecommendSlideRightWrap").append("<span class='next6'>&gt;</span>")
    $(".prev6").css({ zIndex: "10", height: "10%", display: "flex", alignItems: "center", backgroundColor: "#fff", position: "absolute", left: "0", padding: "0 10px", cursor: "pointer", top: "45%" })
    $(".next6").css({ zIndex: "10", height: "10%", display: "flex", alignItems: "center", backgroundColor: "#fff", position: "absolute", right: "0", padding: "0 10px", cursor: "pointer", top: "45%" })
    
    

    // 링크는 각 제품별로 따로 넣야 하므로 현재 발생하는 카테고리 전환시 링크가 사라지는 버그는 후에 다시 고민 해 볼 것
    $.ajax({
        
        url: "./json/fourthDiscount/special.json",
        dataType: "json",
        success: function (data) {
            $(".fourthRecommendSlideRightSetSet").css({ width: "2700px", height: "315px" })
            
            if (data.documents.length > 0) {
               
                for (let i = 0; i < data.documents.length; i++) {
                    $(".fourthRecommendSlideRightSetSet").append("<a href='#'><div class='fourthRecommendSlideRightSet'></div></a>");
                    $(".fourthRecommendSlideRightSet").css({ float: "left", width: "135px", height: "315px", padding: "30px 5px 10px", textAlign:"center" })
                    $(".fourthRecommendSlideRightSet").eq(i).append("<img src=" + data.documents[i].thumbnail + " alt='product image' class='fourthRecommendSlideRightSetImg'>")
                    $(".fourthRecommendSlideRightSet").eq(i).append("<ul class='fourthRecommendSlideRightSetTitle'>" + data.documents[i].title + "</ul>")
                    $(".fourthRecommendSlideRightSet").eq(i).append("<li class='fourthRecommendSlideRightSetPrice'>정 가 :" + thousandsSeparator(data.documents[i].price) + "원</li>")
                    $(".fourthRecommendSlideRightSet").eq(i).append("<li class='fourthRecommendSlideRightSetSalePrice'>할인가:" + thousandsSeparator(data.documents[i].sale_price) + "원</li>")
                }

                $(".fourthRecommendSlideRightSetImg").css({ width: "100px", height: "135px", paddingRight: "5px"})
                $(".fourthRecommendSlideRightSetTitle").css({ height:"45px", fontSize: "10px", padding: "5px" })
                $(".fourthRecommendSlideRightSetPrice").css({ fontSize: "10px",padding: "5px" })
                $(".fourthRecommendSlideRightSetSalePrice").css({ fontSize: "10px", padding: "5px" })
            }
        }
    });

    
   
   
    const FOURTH_DISCOUNT_INFO_URL = ["./json/fourthDiscount/special.json", "./json/fourthDiscount/discount.json"]
    $(".fourthRecommendSlideRightTopParent>li").click(function () {
        
        if ($(this).index() === 0) {
            $(this).css({ color: "red", borderLeft:"1px solid #000", borderTop:"1px solid #000", backgroundColor:"#fff" })
            $(".fourthRecommendSlideRightTopParent>li").not(this).css({ color: "black", borderRight:"none", borderTop:"none", backgroundColor:"transparent" })
        } else {
            $(this).css({ color: "red", borderRight:"1px solid #000", borderTop:"1px solid #000", backgroundColor:"#fff" })
            $(".fourthRecommendSlideRightTopParent>li").not(this).css({ color: "black", borderLeft:"none", borderTop:"none", backgroundColor:"transparent" })
        }
        
        $.ajax({
            url: FOURTH_DISCOUNT_INFO_URL[$(".fourthRecommendSlideRightTopParent>li").index(this)],
            dataType: "json",
            success: function (data) {
                $(".fourthRecommendSlideRightSetSet").empty();
                if (data.documents.length > 0) {
                    for (let i = 0; i < data.documents.length; i++) {
                        $(".fourthRecommendSlideRightSetSet").append("<a href='#'><div class='fourthRecommendSlideRightSet'></div></a>");
                    $(".fourthRecommendSlideRightSet").css({ float: "left", width: "135px", height: "315px", padding: "30px 5px 10px", textAlign:"center" })
                    $(".fourthRecommendSlideRightSet").eq(i).append("<img src=" + data.documents[i].thumbnail + " alt='product image' class='fourthRecommendSlideRightSetImg'>")
                    $(".fourthRecommendSlideRightSet").eq(i).append("<ul class='fourthRecommendSlideRightSetTitle'>" + data.documents[i].title + "</ul>")
                    $(".fourthRecommendSlideRightSet").eq(i).append("<li class='fourthRecommendSlideRightSetPrice'>정 가 :" + thousandsSeparator(data.documents[i].price) + "원</li>")
                    $(".fourthRecommendSlideRightSet").eq(i).append("<li class='fourthRecommendSlideRightSetSalePrice'>할인가:" + thousandsSeparator(data.documents[i].sale_price) + "원</li>")

                    }
                    $(".fourthRecommendSlideRightSetImg").css({ width: "100px", height: "135px", paddingRight: "5px" })
                    $(".fourthRecommendSlideRightSetTitle").css({ height:"45px", fontSize: "10px", padding: "5px" })
                    $(".fourthRecommendSlideRightSetPrice").css({ fontSize: "10px",padding: "5px" })
                    $(".fourthRecommendSlideRightSetSalePrice").css({ fontSize: "10px", padding: "5px" })
                }
            }
        });
    })


    const SHOW_COUNT = 4;
    function prev6() {
        for (let i = 0; i < SHOW_COUNT; i++) {
            $('.fourthRecommendSlideRightSet:last').prependTo('.fourthRecommendSlideRightSetSet');
        }
        $('.fourthRecommendSlideRightSetSet').css('margin-left', -540);
        $('.fourthRecommendSlideRightSetSet').stop().animate({ marginLeft: 0 }, 800);
    }

    function next6() {
        $('.fourthRecommendSlideRightSetSet').stop().animate({ marginLeft: -540 },
            function () {
                for (let i = 0; i < SHOW_COUNT; i++) {
                    $('.fourthRecommendSlideRightSet:first').appendTo('.fourthRecommendSlideRightSetSet');
                }
                $('.fourthRecommendSlideRightSetSet').css({ marginLeft: 0 });
            });
    }

    $('.prev6').click(function () {
        prev6();
    });
    $('.next6').click(function () {
        next6();
    });


})