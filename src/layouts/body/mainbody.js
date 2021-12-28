import Connect from '../../components/main/connect'
import Content from '../../components/main/content'
import MainIntro from '../../components/main/mainIntro'
import SubIntro from '../../components/main/subIntro'
import Notice from '../../components/main/notice'
import React from 'react'

const MainBody = () =>{

	function goNoticeDetail(boardSeq, boardCategory){
		$("#boardCategory").val(boardCategory);
		$("#boardSeq").val(boardSeq);
	
		formSubmit("/notice/notice/noticeDetail.do", "sendForm");
	}
	
	function goPressDetail(boardSeq, boardCategory){
		$("#boardCategory").val(boardCategory);
		$("#boardSeq").val(boardSeq);
	
		formSubmit("/pressrelease/pressReleaseDetail.do", "sendForm");
	}

    return (
        <form id="sendForm" onSubmit="false">
            <input type="hidden" id="boardCategory" name="boardCategory"/>
            <input type="hidden" id="boardSeq" name="boardSeq"/>
            <MainIntro/>
            <SubIntro/>
            <Content/>
            <Connect/>
            <Notice/>
        </form>
    )
}

export default MainBody;