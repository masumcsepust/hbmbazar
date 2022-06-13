import React from 'react';

const TopNavbar = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="header-left">
                    <p className="welcome-msg ls-25">Welcome to Wolmart Store message or remove it!</p>
                </div>
                <div className="header-right">
                    <a href="#">
                        <i className="w-icon-sale"></i>
                        <span className="d-md-show">Daily Deals</span>
                    </a>
                    <a href="#">
                        <i className="w-icon-map-marker mt-0"></i>
                        <span className="d-md-show">Track Order</span>
                    </a>
                    <span className="divider d-lg-show"></span>
                    <a href="blog.html" className="d-lg-show">Blog</a>
                    <a href="become-a-vendor.html" className="d-lg-show">Become a Vendor</a>
                    <a href="about-us.html" className="d-lg-show">About Us</a>
                    <a href="documentation.html">
                        <i className="w-icon-exclamation-circle"></i>
                        <span className="d-md-show">Need Help</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar;