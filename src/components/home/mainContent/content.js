import React from 'react';
import Container from './container/container';
import Footer from './footer';
import BottomNavbar from './navbar/bottomNavbar';
import TopNavbar from './navbar/topNavbar';

const Content = () => {
    return (
        <div className="main-content">
            <TopNavbar />
            <BottomNavbar />
            <Container />
            {/* <!-- Start of Footer --> */}
            <Footer />        
            {/* <!-- End of Footer --> */}
        </div>
    )
}

export default Content;