import Connect from '../../components/main/connect'
import Content from '../../components/main/content'
import MainIntro from '../../components/main/mainIntro'
import SubIntro from '../../components/main/subIntro'
import Notice from '../../components/main/notice'
import React from 'react'

const MainBody = () =>{

    return (
        <>
            <MainIntro/>
            <SubIntro/>
            <Content/>
            <Connect/>
            <Notice/>
        
        </>
    )
}

export default MainBody;