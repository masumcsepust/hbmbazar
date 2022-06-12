import React from 'react';
import {Link} from 'react-router-dom';
import TopNavbar from '../Navbar/TopNavbar';
import BottomNavbar from '../Navbar/BottomNavbar';

const Navbar = () => {
    return(
        <div class="main-content">

        <header class="header">
            <TopNavbar />
            <BottomNavbar />
        </header>
        </div>
    )
}

export default Navbar;