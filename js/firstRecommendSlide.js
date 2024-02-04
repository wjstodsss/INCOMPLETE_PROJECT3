$(document).ready(function () {
    $('.firstRecommendBack').after("<div class='firstRecommendSildeBack'></div>")
    $('.firstRecommendSildeBack').css({ width: "100%", height: "335px", marginTop: "-20px" })

    $(".firstRecommendSildeBack").append("<div class='firstRecommendSlide'></div>")
    $(".firstRecommendSlide").css({ width: "980px", height: "335px", margin: "0 auto" })
    $(".firstRecommendSlide").append("<div class='firstRecommendSlideLeft'></div>")
    // $(".firstRecommendSlideLeft").css({ float: "left", width: "745px", height: "335px", marginTop: "-20px", borderTop: "2px solid #000" })

    $(".firstRecommendSlide").append("<div class='firstRecommendSlideRight'></div>")
    $(".firstRecommendSlideRight").css({ float: "left", width: "220px", height: "335px", marginLeft: "15px", marginTop: "-20px", borderTop: "2px solid #000", backgroundImage: "url('img/recommend/recommend001.png')" })

    $(".firstRecommendSlideLeft").css({ float: "left", position: "relative", width: "745px", height: "335px", marginTop: "-20px", borderTop: "2px solid #000", borderBottom: "1px solid #ccc" })

    // 레이어 구조 전체 back - 이 back이 구분되는 경우 - 슬라이드가 올라갈 너비 100%back (firstRecommendSlideLeftBackTop) - 슬라이드와 그 외의 내용을 담을 영역(firstRecommendSlideLeft)(너비 설정 가운데 위치)레이어
    // 그 다음에 이 슬라이드가 들어가야쥬 
    // .firstRecommendSlideLeftWrap: 슬라이드 프레임 w랩 타겟 -> 타겟명 변경prev2
    $(".firstRecommendSlideLeft").append("<div class='firstRecommendSlideLeftWrap'></div>")

    // 테레비 프레임 크기 설정, 포지션 앱솔루트 후 위치 설정 top:0
    $(".firstRecommendSlideLeftWrap").css({ width: "745px", height: "335px", position: "absolute", top: "0", overflow: "hidden" })

    $(".firstRecommendSlideLeftWrap").append("<span class='prev2'>&lt;</span>")
    $(".firstRecommendSlideLeftWrap").append("<span class='next2'>&gt;</span>")
    $(".prev2").css({ zIndex: "10", height: "10%", display: "block", alignItems: "center", position: "absolute", left: "0", cursor: "pointer", top: "45%" })
    $(".next2").css({ zIndex: "10", height: "10%", display: "block", alignItems: "center", position: "absolute", right: "0", cursor: "pointer", top: "45%" })
    $(".firstRecommendSlideLeftWrap").append("<div class='firstRecommendSlideLeftSetSet'></div>")
    
    
    
    $.ajax({
        
        url: "./json/firstSlide/totalData.json",
        dataType: "json",
        success: function (data) {
           
            $(".firstRecommendSlideLeftSetSet").css({ width: "2260px", height: "335px",})
            
            if (data.length > 0) {
                
                for (let i = 0; i < data.length; i++) {
                    $(".firstRecommendSlideLeftSetSet").append("<a href='#'><div class='firstRecommendSlideLeftSet'></div></a>");
                    $(".firstRecommendSlideLeftSet").css({ float: "left", width: "545px", height: "100%", padding: "30px 5px 10px" })
                    $(".firstRecommendSlideLeftSet").eq(i).append("<img src=" + data[i].thumbnail + " alt='product image' class='firstRecommendSlideLeftSetImg'>")
                    $(".firstRecommendSlideLeftSet").eq(i).append("<p class='firstRecommendSlideLeftSetTitle'>" + data[i].title + "</p>")
                    $(".firstRecommendSlideLeftSet").eq(i).append("<p class='firstRecommendSlideLeftSetContents'>" + data[i].contents + "</p>")
                   
                }

                $(".firstRecommendSlideLeftSetImg").css({ float:"left", width: "200px", height: "100%", padding: "20px"})
                $(".firstRecommendSlideLeftSetTitle").css({ float:"left", width: "330px",height:"120px", fontSize: "20px", paddingTop: "60px", fontWeight: "bold" })
                $(".firstRecommendSlideLeftSetContents").css({float:"left",fontSize: "12px", width: "310px",height:"150px", padding: "5px", backgroundColor: "#f8f8f8", border: "none", fontSize:"11px", overflow: "hidden", resize: "none" })
                
            }
        }
    });

    const SHOW_COUNT = 1;
    function prev2() {
        for (let i = 0; i < SHOW_COUNT; i++) {
            $('.firstRecommendSlideLeftSet:last').prependTo('.firstRecommendSlideLeftSetSet');
        }
        $('.firstRecommendSlideLeftSetSet').css('margin-left', -545);
        $('.firstRecommendSlideLeftSetSet').stop().animate({ marginLeft: 0 }, 800);
    }

    function next2() {
        $('.firstRecommendSlideLeftSetSet').stop().animate({ marginLeft: "-545" },
            function () {
                for (let i = 0; i < SHOW_COUNT; i++) {
                    $('.firstRecommendSlideLeftSet:first').appendTo('.firstRecommendSlideLeftSetSet');
                }
                $('.firstRecommendSlideLeftSetSet').css({ marginLeft: 0 });
            });
    }

    $('.prev2').click(function () {
        prev2();
    });
    $('.next2').click(function () {
        next2();
    });

    function slide() {
        $('.firstRecommendSlideLeftSetSet').stop().animate({ marginLeft: -745 },
            function () {
                $('.firstRecommendSlideLeftSet:first').appendTo('.firstRecommendSlideLeftSetSet');
                $('.firstRecommendSlideLeftSetSet').css({ marginLeft: 0 });
            });
    }


    let recommendFirstSlide

    function startRecommendFirstSlideInterval() {
        recommendFirstSlide = setInterval(slide, 3000);
    }

    function stopRecommendFirstSlideInterval() {
        clearInterval(recommendFirstSlide);
    }

   // startRecommendFirstSlideInterval();


})