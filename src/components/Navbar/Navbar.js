import React from 'react';
import {Link} from 'react-router-dom';
import TopNavbar from '../Navbar/TopNavbar';
import BottomNavbar from '../Navbar/BottomNavbar';
import Sidebar from '../Sidebar/Sidebar';
import Banner from '../MainContent/Banner';
import Container from '../MainContent/Container';

const Navbar = () => {
    return(
    <div className="main-content">
        <Banner />
        <header className="header">
            <TopNavbar />
            <BottomNavbar />
        </header>
        <Container />
    </div>
    )
}

export default Navbar;