import React from 'react';

const TopNavbar = () => {
    return (
        <div class="header-top">
                        <div class="container">
                            <div class="header-left">
                                <p class="welcome-msg ls-25">Welcome to Wolmart Store message or remove it!</p>
                            </div>
                            <div class="header-right">
                                <a href="#">
                                    <i class="w-icon-sale"></i>
                                    <span class="d-md-show">Daily Deals</span>
                                </a>
                                <a href="#">
                                    <i class="w-icon-map-marker mt-0"></i>
                                    <span class="d-md-show">Track Order</span>
                                </a>
                                <span class="divider d-lg-show"></span>
                                <a href="blog.html" class="d-lg-show">Blog</a>
                                <a href="become-a-vendor.html" class="d-lg-show">Become a Vendor</a>
                                <a href="about-us.html" class="d-lg-show">About Us</a>
                                <a href="documentation.html">
                                    <i class="w-icon-exclamation-circle"></i>
                                    <span class="d-md-show">Need Help</span>
                                </a>
                            </div>
                        </div>
                    </div>
    )
}

export default TopNavbar;