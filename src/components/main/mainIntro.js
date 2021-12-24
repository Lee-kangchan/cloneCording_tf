import React from 'react';



function MainIntro(){
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

export default MainIntro;