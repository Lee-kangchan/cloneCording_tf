
import React from 'react';

function FooterIntro(){

    return (
        <div class="container-fluid padding footer">
            <div class="row text-center">
            <div class="col-md-4">
                <hr class="light"/>
                <h5>Timf</h5>
                <hr class="light"/>
                <p>상호명: (주)팀프레시</p>
                <p>사업자등록번호: 561-88-01138</p>
                <p>대표자: 이성일</p>
            </div>
            <div class="col-md-4">
                <hr class="light"/>
                <h5>Contact us</h5>
                <hr class="light"/>
                <p>Tel: 02-423-0525</p>
                <p>Fax: 02-3432-0525</p>
                <p>E-mail: info@timf.co.kr</p>
                <p>서울특별시 송파구 위례성대로 12길 15-1</p>
                <br/>
                <p>영업 및 제휴 문의: </p>
                <p>E-mail: sales@timf.co.kr</p>
            </div>
            <div class="col-md-4">
                <hr class="light"/>
                <h5>Others</h5>
                <hr class="light"/>
                <a href="/notice/employment/employmentList.do"><p>인재채용</p></a>
                <a href="/notice/serviceinfo/serviceInfo.do"><p>서비스 소개</p></a>
                <a href="/main/userpolicy/userPolicy.do"><p>개인정보 처리방침</p></a>
                <a href="/main/locationBasedService/locationBasedService.do"><p>위치기반 서비스 이용약관</p></a>
            </div>
            <div class="col-12 footer-copyright">
                <hr class="light-100"/>
                <h5><a href="/login/login.do">©</a> TeamFresh All right reserved</h5>
            </div>
        </div>
      </div>
    );
}

export default FooterIntro;