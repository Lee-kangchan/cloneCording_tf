import React from 'react';

function connect(){
    return(
      <div class="container-fluid padding">
      <div class="row text-center padding">
        <div class="col-12">
          <h2>Connect</h2>
        </div>
        <div class="col-12 social padding">
          <a href="https://www.facebook.com/teamfresh.timf"><svg class="svg-inline--fa fa-facebook fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"></path></svg><!-- <i class="fab fa-facebook"></i> --></a>
          <a href="https://www.youtube.com/watch?v=vlXzU-1Oec4"><svg class="svg-inline--fa fa-youtube fa-w-18" aria-hidden="true" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg><!-- <i class="fab fa-youtube"></i> --></a>
        </div>
      </div>
    </div>
    );
    
}
function notice(){
  return (
    <div class="container-fluid padding" style="padding-bottom: 0;">
      <hr class="my-4"/>
      <div class="row padding">
        <div class="col-md-12 col-lg-6 div-notice">
          <h2>공지사항</h2>
          <div class="col-md-12 section-notice">
            <div class="section-notice-subtitle">
            <h5>Notice</h5>
            <a href="/notice/notice/noticeList.do">
              <img src="/resources/assets/img/홈페이지_아이콘/icon_plus.png" alt="" title="더보기"/>
            </a>
            </div>
            <hr class="my-4" style="margin: 1rem 0 1rem 0!important;"/> 
            
              <div onclick="goNoticeDetail('81','0')" class="section-notice-content">
                <a class="section-notice-content-title">[공고] 신주발행 공고(제3자 배정방식)</a>
                <a class="section-notice-content-date"><img src="/resources/assets/img/홈페이지_아이콘/icon_clock.png" alt=""/>2021-09-15</a>
              </div>
            
              <div onclick="goNoticeDetail('79','0')" class="section-notice-content">
                <a class="section-notice-content-title">[공고] 신주발행 공고(제3자 배정방식)</a>
                <a class="section-notice-content-date"><img src="/resources/assets/img/홈페이지_아이콘/icon_clock.png" alt=""/>2021-09-08</a>
              </div>
            
              <div onclick="goNoticeDetail('76','0')" class="section-notice-content">
                <a class="section-notice-content-title">[공고] 신주발행 공고 (제3자 배정방식)</a>
                <a class="section-notice-content-date"><img src="/resources/assets/img/홈페이지_아이콘/icon_clock.png" alt=""/>2021-08-31</a>
              </div>
            
          </div>
        </div>
	
        <div class="col-md-12 col-lg-6 div-notice">
          <h2>보도자료</h2>
          <div class="col-md-12 section-notice">
            <div class="section-notice-subtitle">
              <h5>TimF News</h5>
              <a href="/pressrelease/pressReleaseList.do">
                <img src="/resources/assets/img/홈페이지_아이콘/icon_plus.png" alt="" title="더보기"/>
              </a>
            </div>
            <hr class="my-4" style="margin: 1rem 0 1rem 0!important;"/>
              
          </div>
        </div>
      </div>
      <hr class="my-4" style="margin-bottom: 0 !important;"/>
    </div>
  );
}

function content(){
  return (

    <div class="container-fluid padding">
      <div class="row padding">
        <div class="col-md-3">
          <div class="card">
            <img class="card-img-top" src="/resources/assets/img/홈페이지_사진/main_card1.png" alt=""/>
            <div class="card-body">
              <h4 class="card-title">새벽배송</h4>
              <p class="card-text">
                팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다. 
                배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을 완료합니다. 
              </p>
              <a href="/business/ts/TS.do" class="btn btn-outline-secondary" style="justify-items: center; align-items: center;">더 알아보기</a>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card"> 
            <img class="card-img-top" src="/resources/assets/img/홈페이지_사진/main_card2.png" alt=""/>
            <div class="card-body">
              <h4 class="card-title">화물주선</h4>
              <p class="card-text">
                화물주선은 화물차량이 필요한 곳에 차량을 보내드리는 서비스입니다.
                팀프레시의 데이터베이스를 활용해 차량의 원활한 수급이 가능하도록 도와드립니다.
              </p>
              <a href="/business/lf/LF.do" class="btn btn-outline-secondary">더 알아보기</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <img class="card-img-top" src="/resources/assets/img/홈페이지_사진/main_card3.jpg" alt=""/>
            <div class="card-body">
              <h4 class="card-title">풀필먼트</h4>
              <p class="card-text">
                풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로 해결하기 어려운 기업을 위한 
                서비스입니다. <br/>
                각 화주사별 요구사항을 매뉴얼화해 관리합니다.
              </p>
              <a href="/business/fu/FU.do" class="btn btn-outline-secondary">더 알아보기</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <img class="card-img-top" src="/resources/assets/img/홈페이지_사진/main_card4.jpg" alt=""/>
            <div class="card-body">
              <h4 class="card-title">그로서리</h4>
              <p class="card-text">
                급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는 서비스입니다.
                기존 물류망을 활용해 식자재를 일괄 공급함으로써 비용 효율화가 가능하도록 합니다.
              </p>
              <a href="/business/gr/GR.do" class="btn btn-outline-secondary">더 알아보기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function subIntro(){
  return(
    <div class="container-fluid">
      <div class="row jumbotron row-main">
        <div class="col-xs-15 col-sm-12 col-md-12 col-lg-12 col-xl-13">
          <p class="lead">
            대한민국 No.1 Cold-Chain Platform
          </p>
          <p class="lead-content">
            팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를 제공합니다.  
            입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를 위한 설비/역량을 보유하고 있습니다. 
          </p>
        </div>
      </div>
    </div>
  );
}

function mainIntro(){
  return(
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ul class="carousel-indicators">
        <li data-target="#slides" data-slide-to="0" class="active"></li>
        <li data-target="#slides" data-slide-to="1" class=""></li>
        <li data-target="#slides" data-slide-to="2" class=""></li>
      </ul>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/resources/assets/img/홈페이지_사진/background1.png" alt="" style="width: 100%;"/>
          <div class="carousel-caption">
            <h1 class="display-2">대한민국 No.1</h1>
            <h3>Cold Chain Platform</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/resources/assets/img/홈페이지_사진/background2.png" alt="" style="width: 100%;"/>
          <div class="carousel-caption">
            <h1 class="display-2">Timf</h1>
            <h3>Connect Freshness</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/resources/assets/img/홈페이지_사진/background3.png" alt="" style="width: 100%;"/>
          <div class="carousel-caption">
            <h1 class="display-2">Commerce Trend</h1>
            <h3>신선식품 물류를 선도하는 시스템 구축</h3>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}