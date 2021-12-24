import React from 'react';

function Content(){
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
export default Content;