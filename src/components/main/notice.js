import React from 'react';

import IconPlus from '../../assert/img/homepage/icon_plus.png'
import styled, {css} from 'styled-components';
import '../../App.css';
function Notice(){
    const containerStyle = styled.div(
        css`
            padding-bottom: 0
        `
    );
    const line1Style = styled.hr(
        css`
            margin: 1rem 0 1rem 0!important;
            
        `
    );
    const line2Style = styled.hr(
        css`
            margin-bottom: 0 !important
        `
    );
  return (
    <containerStyle className="container-fluid padding paddingBottom" >
      <hr className="my-4"/>
      <div className="row padding">
        <div className="col-md-12 col-lg-6 div-notice">
          <h2>공지사항</h2>
          <div className="col-md-12 section-notice">
            <div className="section-notice-subtitle">
            <h5>Notice</h5>
            <a href="/notice/notice/noticeList.do">
              <img src={IconPlus}alt="" title="더보기"/>
            </a>
            </div>
            <line1Style className="my-4" /> 
            
              <div onclick="goNoticeDetail('81','0')" className="section-notice-content">
                <a className="section-notice-content-title">[공고] 신주발행 공고(제3자 배정방식)</a>
                <a className="section-notice-content-date"><img src="/resources/assets/img/홈페이지_아이콘/icon_clock.png" alt=""/>2021-09-15</a>
              </div>
            
              <div onclick="goNoticeDetail('79','0')" className="section-notice-content">
                <a className="section-notice-content-title">[공고] 신주발행 공고(제3자 배정방식)</a>
                <a className="section-notice-content-date"><img src="/resources/assets/img/홈페이지_아이콘/icon_clock.png" alt=""/>2021-09-08</a>
              </div>
            
              <div onclick="goNoticeDetail('76','0')" className="section-notice-content">
                <a className="section-notice-content-title">[공고] 신주발행 공고 (제3자 배정방식)</a>
                <a className="section-notice-content-date"><img src="/resources/assets/img/홈페이지_아이콘/icon_clock.png" alt=""/>2021-08-31</a>
              </div>
            
          </div>
        </div>
	
        <div className="col-md-12 col-lg-6 div-notice">
          <h2>보도자료</h2>
          <div className="col-md-12 section-notice">
            <div className="section-notice-subtitle">
              <h5>TimF News</h5>
              <a href="/pressrelease/pressReleaseList.do">
                <img src={IconPlus}alt="" title="더보기"/>
              </a>
            </div>
            <line1Style className="my-4"/>
              
          </div>
        </div>
      </div>
      <line2Style className="my-4" />
    </containerStyle>
  );
}

export default Notice;