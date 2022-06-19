import React from 'react';

const IntroBanner = () => {
    return (
        <div className="row grid intro-banner-group pt-1 appear-animate">
                <div className="grid-item grid-item1 intro-slide-wrapper col-lg-8 height-x3">
                    <div className="swiper-container swiper-theme pg-inner pg-white animation-slider h-100 br-sm"
                        data-swiper-options="{
                        'spaceBetween': 0,
                        'slidesPerView': 1,
                        'autoplay': {
                            'delay': 8000,
                            'disableOnInteraction': false
                        }
                    }">
                        <div className="swiper-wrapper row gutter-no cols-1">
                            <div className="swiper-slide banner banner-fixed intro-slide intro-slide1 br-sm"
                                style={{backgroundImage: "url(assets/images/demos/demo13/slides/slide-1.jpg)", backgroundColor:"#D9E0E6" }}>
                                <div className="banner-content y-50">
                                    <div className="slide-animate" data-animation-options="{
                                        'name': 'fadeInUpShorter', 'duration': '1s','delay':'.3s'
                                        }">
                                        <h3 className="banner-subtitle text-dark font-weight-normal">New Women’s
                                        </h3>
                                        <h2 className="banner-title text-dark text-uppercase ls-25">Autumn Clothes
                                        </h2>
                                        <h4 className="banner-price-info text-uppercase font-weight-bold ls-25">
                                            Start at <span className="text-secondary ls-25">$350.00</span>
                                        </h4>
                                        <p className="text-dark font-weight-normal">Get Plus Discount Buying Fashion
                                        </p>
                                        <a href="demo13-shop.html"
                                            className="btn btn-outline btn-dark btn-rounded btn-icon-right">
                                            Shop Now
                                            <i className="w-icon-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End of Intro Slide 1 --> */}
                            <div className="swiper-slide banner banner-fixed intro-slide intro-slide2 br-sm"
                                style={{backgroundImage: "url(assets/images/demos/demo13/slides/slide-2.jpg)", backgroundColor: "#D8D8D8"}} >
                                <div className="banner-content y-50 text-right">
                                    <div className="slide-animate" data-animation-options="{
                                        'name': 'fadeInUpShorter', 'duration': '1s','delay':'.3s'
                                        }">
                                        <h3
                                            className="banner-subtitle text-dark text-uppercase font-weight-normal lh-1">
                                            The New</h3>
                                        <h2 className="banner-title text-dark text-uppercase ls-25">Cosmetical</h2>
                                        <p className="text-default text-uppercase font-weight-bold mb-1">Under
                                            Favorable Caretools</p>
                                        <h4
                                            className="banner-price-info text-secondary text-uppercase font-weight-bolder lh-1">
                                            <sup>$</sup>239<sup>99</sup>
                                        </h4>
                                        <a href="demo13-shop.html" className="btn btn-outline btn-dark btn-rounded">
                                            Start Buying
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End of Intro Slide 2 --> */}
                            <div className="swiper-slide banner banner-fixed intro-slide intro-slide3 br-sm"
                                style={{backgroundImage: "url(assets/images/demos/demo13/slides/slide-3.jpg)", backgroundColor: "#EAEAEA"}}>
                                <div className="banner-content y-50">
                                    <div className="slide-animate" data-animation-options="{
                                        'name': 'fadeInUpShorter', 'duration': '1s','delay':'.3s'
                                        }">
                                        <h3 className="banner-subtitle text-default font-weight-normal">Music &amp;
                                            Entertainment</h3>
                                        <h2 className="banner-title text-dark text-uppercase ls-25">Stereo Sound
                                        </h2>
                                        <h4 className="banner-price-info font-weight-bold ls-25">
                                            Save up to <span className="text-secondary ls-25">30% OFF</span>
                                        </h4>
                                        <p className="text-default font-weight-normal ml-0">Free returns extended to
                                            30 days after delivery</p>
                                        <a href="demo13-shop.html"
                                            className="btn btn-outline btn-dark btn-rounded btn-icon-right ml-0">
                                            Shop Now
                                            <i className="w-icon-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End of Intro Slide 3 --> */}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="grid-item grid-item2 banner col-lg-4 col-md-6 height-x2 overlay-zoom overlay-light">
                    <figure className="banner-media br-sm">
                        <img src="assets/images/demos/demo13/banner/banner-1.jpg" alt="Intro Banner" style={{width:"498px",  height: "325px", backgroundColor:"#D9D9D9 "}} />
                    </figure>
                    <div className="banner-content">
                        <h3 className="banner-title text-capitalize font-weight-bold">New Collection</h3>
                        <h5 className="banner-price-info text-default text-uppercase font-weight-normal ls-25">
                            Up to
                            <span className="text-secondary">35% OFF</span>
                        </h5>
                        <a href="demo13-shop.html" className="btn btn-white br-xs">
                            Shop Now
                        </a>
                    </div>
                </div>
                <div className="grid-item grid-item5 banner col-lg-4 col-md-6 height-x2 overlay-zoom overlay-light">
                    <figure className="banner-media br-sm">
                        <img src="assets/images/demos/demo13/banner/banner-4.jpg" alt="category" style={{width:"498px",  height: "325px", backgroundColor: "#272526"}} />
                    </figure>
                    <div className="banner-content x-50 y-50 text-center pl-4 pr-4">
                        <h5 className="banner-price-info text-primary text-capitalize font-weight-bold">Get 30% off
                            Your Entire Order!</h5>
                        <h3 className="banner-title text-white text-uppercase ls-25">Black Friday Sale</h3>
                        <p className="text-center font-weight-normal">
                            Use code
                            <strong className="text-white text-uppercase">Blkfri40</strong>
                            at checkout.
                        </p>
                        <a href="demo13-shop.html"
                            className="btn btn-primary btn-outline btn-rounded btn-icon-right text-white">
                            Shop Now
                            <i className="w-icon-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="grid-item grid-item3 banner col-lg-4 col-md-6 height-x1 overlay-zoom overlay-light">
                    <figure className="banner-media br-sm">
                        <img src="assets/images/demos/demo13/banner/banner-2.jpg" alt="Intro Banner" style={{width:"499px", height:"210px", backgroundColor: "#0E0F10" }} />
                    </figure>
                    <div className="banner-content y-50">
                        <h4 className="banner-subtitle text-lighter text-uppercase">Under Favorable</h4>
                        <h3 className="banner-title text-white mb-5">Smartwatches</h3>
                        <h5 className="banner-price-info text-white font-weight-bold mb-0 ls-25">
                            <span
                                className="text-uppercase font-size-normal font-weight-normal ls-normal">From</span>
                            <sup className="font-weight-bold">$</sup>199<sup className="font-weight-bold">00</sup>
                        </h5>
                    </div>
                </div>
                <div className="grid-item grid-item4 banner col-lg-4 col-md-6 height-x1 overlay-zoom overlay-light">
                    <figure className="banner-media br-sm">
                        <img src="assets/images/demos/demo13/banner/banner-3.jpg" alt="Intro Banner" style={{width:"490px",  height: "210px", backgroundColor: "#EBEBEB"}} />
                    </figure>
                    <div className="banner-content y-50">
                        <h4 className="banner-subtitle text-default text-uppercase font-weight-bold">New Collection
                        </h4>
                        <h3 className="banner-title text-capitalize">Accessories</h3>
                        <hr className="divider" />
                        <a href="demo13-shop.html" className="btn btn-dark btn-link btn-underline btn-icon-right">
                            Shop Now
                            <i className="w-icon-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="grid-space col-1"></div>
            </div>
    )
}

export default IntroBanner;