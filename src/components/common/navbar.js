import React from 'react';
import '../../App.css';
import logoImg from '../../assert/img/homepage/logo.png'
function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/"><img src={logoImg} alt=""/> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>회사소개</span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="/company/timf/timfInfo.do">회사소개</a>
                        <a class="dropdown-item" href="/company/partner/partnerInfo.do">협력사 소개</a>
                        <a class="dropdown-item" href="/company/customer/customerInfo.do">고객사 소개</a>
                        <a class="dropdown-item" href="/company/map/timfMap.do">오시는 길</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>사업소개</span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="/business/ts/TS.do">새벽배송</a>
                        <a class="dropdown-item" href="/business/lf/LF.do">화물주선</a>
                        <a class="dropdown-item" href="/business/fu/FU.do">풀필먼트</a>
                        <a class="dropdown-item" href="/business/gr/GR.do">그로서리</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>공지사항</span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="/notice/notice/noticeList.do">공지사항</a>
                        <a class="dropdown-item" href="/notice/employment/employmentList.do">인재채용</a>
                        <a class="dropdown-item" href="/notice/serviceinfo/serviceInfo.do">서비스소개</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pressrelease/pressReleaseList.do"><span>보도자료</span></a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;