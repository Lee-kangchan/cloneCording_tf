import React from 'react'
import Header from './header';
import Footer from './footer';
import Mainbody from './body/mainbody';
import Connect from '../components/main/connect';
import Content from '../components/main/content';
import MainIntro from '../components/main/mainIntro';
import MainBody from './body/mainbody';

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <MainBody/>
            <Footer/>
        </>
    );
}

export default Layout;