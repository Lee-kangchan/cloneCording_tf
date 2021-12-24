import React from 'react';

import BackgroundImg1 from '../../assert/img/homepage/background1.png';
import BackgroundImg2 from '../../assert/img/homepage/background2.png';
import BackgroundImg3 from '../../assert/img/homepage/background3.png';
function MainIntro(){
  return(
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#slides" data-slide-to="0" className="active"></li>
        <li data-target="#slides" data-slide-to="1" className=""></li>
        <li data-target="#slides" data-slide-to="2" className=""></li>
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={BackgroundImg1} className="background" alt="BackgroundImg1" width= "100%;"/>
          <div className="carousel-caption">
            <h1 className="display-2">대한민국 No.1</h1>
            <h3>Cold Chain Platform</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={BackgroundImg2} className="background" alt="BackGroundImg2" width= "100%;"/>
          <div className="carousel-caption">
            <h1 className="display-2">Timf</h1>
            <h3>Connect Freshness</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={BackgroundImg3} className="background" alt="BackGroundImg3" width= "100%;"/>
          <div className="carousel-caption">
            <h1 className="display-2">Commerce Trend</h1>
            <h3>신선식품 물류를 선도하는 시스템 구축</h3>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default MainIntro;