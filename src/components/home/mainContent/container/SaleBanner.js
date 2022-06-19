import React from 'react';

const SaleBanner = () => {
    return (
        <div className="sale-banner banner br-sm mb-4 appear-animate">
            <div className="banner-content">
                <h4 className="content-left banner-subtitle text-primary ls-15 mb-8 mb-md-0 mr-0 mr-md-4">
                    <span className="text-dark text-uppercase font-weight-bold ls-normal">Up
                        <br/>To</span>50% Sale!
                </h4>
                <div className="content-right bg-dark">
                    <h3 className="banner-title font-weight-normal ls-25 mb-4 mb-md-0">
                        <span>
                            Use Coupon Code
                            <strong className="bg-white text-dark">12345</strong>
                            <b className="text-uppercase mr-10 pr-10">To Get Best Sale Offer!</b>
                            Use Coupon Code
                            <strong className="bg-white text-dark">12345</strong>
                            <b className="text-uppercase mr-10 pr-10">To Get Best Sale Offer!</b>
                            Use Coupon Code
                            <strong className="bg-white text-dark">12345</strong>
                            <b className="text-uppercase mr-10 pr-10">To Get Best Sale Offer!</b>
                        </span>
                    </h3>
                    <a href="shop-banner-sidebar.html" className="btn btn-white btn-rounded">Shop Now
                        <i className="w-icon-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SaleBanner;