import React from 'react';

function Notice(){
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

export default Notice;