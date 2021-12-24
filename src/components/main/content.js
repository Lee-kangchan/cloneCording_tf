import React from 'react';

import MainCard1 from '../../assert/img/homepage/main_card1.png'
import MainCard2 from '../../assert/img/homepage/main_card2.png'
import MainCard3 from '../../assert/img/homepage/main_card3.jpeg'
import MainCard4 from '../../assert/img/homepage/main_card4.jpeg'
import '../../App.css';
function Content(){

  return (
    <div className="container-fluid padding">
      <div className="row padding">
        <div className="col-md-3">
          <div className="card">
            <img className="card-img-top" src={MainCard1} alt="mainCard"/>
            <div className="card-body">
              <h4 className="card-title">새벽배송</h4>
              <p className="card-text">
                팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다. 
                배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을 완료합니다. 
              </p>
              <a href="/business/ts/TS.do" className="btn btn-outline-secondary nextStyle" >더 알아보기</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card"> 
            <img className="card-img-top" src={MainCard2} alt="mainCard2"/>
            <div className="card-body">
              <h4 className="card-title">화물주선</h4>
              <p className="card-text">
                화물주선은 화물차량이 필요한 곳에 차량을 보내드리는 서비스입니다.
                팀프레시의 데이터베이스를 활용해 차량의 원활한 수급이 가능하도록 도와드립니다.
              </p>
              <a href="/business/lf/LF.do" className="btn btn-outline-secondary">더 알아보기</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img className="card-img-top" src={MainCard3} alt="mainCard3"/>
            <div className="card-body">
              <h4 className="card-title">풀필먼트</h4>
              <p className="card-text">
                풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로 해결하기 어려운 기업을 위한 
                서비스입니다. <br/>
                각 화주사별 요구사항을 매뉴얼화해 관리합니다.
              </p>
              <a href="/business/fu/FU.do" className="btn btn-outline-secondary">더 알아보기</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img className="card-img-top" src={MainCard4} alt="mainCard4"/>
            <div className="card-body">
              <h4 className="card-title">그로서리</h4>
              <p className="card-text">
                급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는 서비스입니다.
                기존 물류망을 활용해 식자재를 일괄 공급함으로써 비용 효율화가 가능하도록 합니다.
              </p>
              <a href="/business/gr/GR.do" className="btn btn-outline-secondary">더 알아보기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;