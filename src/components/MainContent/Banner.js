import React from "react";

const Banner = () => {
    return (
        <div className="banner top-banner banner-fixed">
            <figure className="banner-media" style={{backgroundColor: "#2D363F"}}>
                <img src="assets/images/demos/demo13/banner/top-banner.jpg" alt="Banner" width="1597"
                    height="70" style={{backgroundColor: "#2D363F"}} />
            </figure>
            <div className="banner-content d-flex align-items-center x-50 y-50 ml-4">
                <h3 className="banner-title text-uppercase mb-0 d-md-show">Senior’s Member Discount Days!</h3>
                <h5 className="banner-price-info font-weight-normal">
                    Save <span className="text-secondary text-uppercase font-weight-bolder">25% OFF </span>Discount
                </h5>
                <a href="demo13-shop.html" className="btn btn-sm btn-white btn-outline btn-rounded btn-icon-right">
                    Shop Now<i className="w-icon-long-arrow-right"></i>
                </a>
                <i className="w-icon-cart text-white"></i>
            </div>
            <a href="#" className="banner-close">
                <i className="close-icon"></i>
            </a>
        </div>
    )
}

export default Banner;