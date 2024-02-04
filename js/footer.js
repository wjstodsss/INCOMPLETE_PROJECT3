$(document).ready(function () {
    $('.fifthBannerZoneBack').after("<div class='footerBack'></div>")
    $('.footerBack').css({ width: "100%", height: "230px", backgroundColor: "#eee", borderBottom: "2px solid #d74b45" })

    $(".footerBack").append("<div class='footer'></div>")
    $(".footer").css({ width: "980px", height: "100%", margin: "0 auto", paddingTop: "15px", paddingBottom: "30" })

    $(".footer").append("<div class='footerTop'></div>")
    $(".footerTop").css({ float: "left", width: "980px", height: "30px" })
    $(".footerTop").append("<ul class='footerTopList'></ul>").css({ width: "980px", height: "30px" })

    const FOOTER_TOP_LIST = ['개인정보처리방침', '청소년보호정책', '이용약관', '위치기반서비스 이용약관', '회사소개', '수익분배프로그램', '광고안내', '담당자안내', '판매자매니저']

    for (let i in FOOTER_TOP_LIST) {
        $(".footerTopList").append("<li><a href='#'>" + FOOTER_TOP_LIST[i] + "</a></li>")
        if (i < FOOTER_TOP_LIST.length - 1) {
            $(".footerTopList").append("<li> | </li>")
        }
    }

    $(".footerTopList>li").css({ float: "left", color: "#666" })
    $(".footerTopList>li>a").css({ fontSize: "12px", padding: "7px", color: "#666" })
    $(".footerTopList>li>a").eq(0).css({ fontSize: "12px", paddingLeft: "0", color: "#000" })

    $(".footerTop").after("<div class='footerMiddle'></div>")
    $(".footerMiddle").css({ float: "left", width: "980px", height: "105px" })

    $(".footerMiddle").append("<ul class='footerMiddleLeft'>(주)인터파크커머스</ul>")
    $(".footerMiddleLeft").css({ float: "left", width: "320px", height: "105px", borderRight: "1px solid #e7e7e7", fontSize: "12px" })
    const FOOTER_MIDDLE_LEFT_LIST = ['주소 | 서울특별시 서초구 강남대로 447(서초동, 남서울빌딩)', '사업자등록번호 | 422-81-03185', '호스팅서비스 제공자 | (주)인터파크커머스', '대표이사 | 김동식', '통신판매업신고 | 2023-서울서초-0823']

    for (let i in FOOTER_MIDDLE_LEFT_LIST) {
        $(".footerMiddleLeft").append("<li>" + FOOTER_MIDDLE_LEFT_LIST[i] + "</li>")
    }

    $(".footerMiddleLeft>li").css({ fontSize: "11px", color: "#b8b8b8" })

    $(".footerMiddle").append("<ul class='footerMiddleCenter'>고객센터 <span><a href='#'>문의전클릭></a><span></ul>")
    $(".footerMiddleCenter").css({ float: "left", width: "280px", height: "105px", paddingLeft: "5px", borderRight: "1px solid #e7e7e7", fontSize: "12px" })
    $(".footerMiddleCenter>span>a").css({ fontSize: "10px", color: "#fff", backgroundColor: "#666", border: "0.2px solid #000", paddingBottom: "1px" })

    const FOOTER_MIDDLE_CENTER_LIST = ['전화 1577-2555', '팩스 02-838-0750', '이메일 helpshop@interparkshop.com', '개인정보보호책임자 cposhopping@interparkshop.com', '개인정보보유기간 회원탈퇴시까지']

    for (let i in FOOTER_MIDDLE_CENTER_LIST) {
        $(".footerMiddleCenter").append("<li>" + FOOTER_MIDDLE_CENTER_LIST[i] + "</li>")
    }

    $(".footerMiddleCenter>li").css({ fontSize: "11px", color: "#b8b8b8" })


    $(".footerMiddle").append("<ul class='footerMiddleRight'>KG이니시스 구매안전서비스</ul>")
    $(".footerMiddleRight").css({ float: "left", width: "345px", height: "105px", paddingLeft: "5px", fontSize: "12px" })
    $(".footerMiddleRight").append("<li>고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 KG이니시스의 구매안전서비스를 이용하실 수 있습니다.</li>")
    $(".footerMiddleRight>li").css({ width: "320px" })
    $(".footerMiddleRight").append("<li><a href='#'>서비스 가입사실 확인*</a></li>")
    $(".footerMiddleRight>li").css({ fontSize: "11px", color: "#b8b8b8" })
    $(".footerMiddleRight>li>a").css({ fontSize: "10px", color: "#fff", backgroundColor: "#666", border: "0.2px solid #000", paddingBottom: "1px" })




    $(".footerMiddle").after("<div class='footerBottom'></div>")
    $(".footerBottom").css({ float: "left", width: "980px", height: "30px", marginTop: "15px" })
    $(".footerBottom").append("<div class='footerBottomTop'>주식회사 인터파크커머스는 인터파크 쇼핑, 인터파크 도서의 통신판매중개자로서 통신판매의 당사자가 아니므로, 개별 판매자가 등록한 오픈마켓 상품에 대해서 주식회사 인터파크커머스는 일체 책임을 지지 않습니다.</div>")
    $(".footerBottomTop").css({ fontSize: "10px", color: "#666" })
    $(".footerBottom").append("<div class='footerBottomCopy'>Copyright © Interpark Commerce Corp. All Rights Reserved.</div>")
    $(".footerBottomCopy").css({ fontSize: "11px", color: "#b8b8b8" })


})