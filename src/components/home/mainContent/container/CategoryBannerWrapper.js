import React from 'react';

const CategoryBannerWrapper = () => {
    return (
        <div className="category-banner-wrapper row cols-md-2 appear-animate">
            <div className="banner banner-fixed br-sm mb-4">
                <figure className="banner-media br-sm">
                    <img src="assets/images/demos/demo13/banner/banner-5.jpg" alt="Category Banner"
                        style={{width:"759px", height:"220px", backgroundColor: "#E5E5E5"}} />
                </figure>
                <div className="banner-content y-50">
                    <h4 className="banner-subtitle text-secondary font-weight-bold">Most Popular</h4>
                    <h3 className="banner-title ls-25">Women’s Lifestyle
                        <br/><span className="d-block font-weight-normal">Collection</span>
                    </h3>
                    <a href="demo13-shop.html"
                        className="btn btn-dark btn-rounded btn-link btn-underline btn-icon-right">
                        Shop Now<i className="w-icon-long-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="banner banner-fixed br-sm mb-4">
                <figure className="banner-media br-sm">
                    <img src="assets/images/demos/demo13/banner/banner-6.jpg" alt="Category Banner"
                        style={{width:"759px", height:"220px", backgroundColor: "#2C3135"}}  />
                </figure>
                <div className="banner-content y-50">
                    <h4 className="banner-subtitle text-secondary font-weight-bold">New Arrivals</h4>
                    <h3 className="banner-title text-white ls-25">Modern Bluetooth
                        <br/><span className="d-block font-weight-normal">Wireless Earphone</span>
                    </h3>
                    <a href="demo13-shop.html"
                        className="btn btn-white btn-rounded btn-link btn-underline btn-icon-right">
                        Shop Now<i className="w-icon-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CategoryBannerWrapper;