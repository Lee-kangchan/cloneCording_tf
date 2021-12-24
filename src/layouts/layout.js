import React from 'react'
import Header from './header';
import Footer from './footer';
import Mainbody from './body/mainbody';

const Layout = ({children}) => {
    return (
        <>
            <Header/>
                <div>
                    <Mainbody/>
                </div>
            <Footer/>
        </>
    );
}

export default Layout;