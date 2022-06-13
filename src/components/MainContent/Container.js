import React from "react";

const Container = () => {
    return (
    <div className="container">
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
                            style={{backgroundImage: "url(./assets/images/demos/demo13/slides/slide-1.jpg)", backgroundColor: "#D9E0E6" }}>
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
                          {/* End of Intro Slide 1  */}
                        <div className="swiper-slide banner banner-fixed intro-slide intro-slide2 br-sm"
                            style={{backgroundImage: "url(./assets/images/demos/demo13/slides/slide-2.jpg)", backgroundColor: "#D8D8D8"}}>
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
                        {/* End of Intro Slide 2 */}
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
                        {/* End of Intro Slide 3 */}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
            <div className="grid-item grid-item2 banner col-lg-4 col-md-6 height-x2 overlay-zoom overlay-light">
                <figure className="banner-media br-sm">
                    <img src="./assets/images/demos/demo13/banner/banner-1.jpg" alt="Intro Banner" width="498"
                        height="325" style={{backgroundColor: "#D9D9D9"}} />
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
                    <img src="./assets/images/demos/demo13/banner/banner-4.jpg" alt="category" width="498"
                        height="325" style={{ backgroundColor: "#272526" }} />
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
                    <img src="./assets/images/demos/demo13/banner/banner-2.jpg" alt="Intro Banner" width="499"
                        height="210" style={{backgroundColor: "#0E0F10" }} />
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
                    <img src="./assets/images/demos/demo13/banner/banner-3.jpg" alt="Intro Banner" width="490"
                        height="210" style={{backgroundColor: "#EBEBEB"}} />
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
        {/* <!-- End of Intro Banner Group  */}
        <div className="swiper-container swiper-theme icon-box-wrapper appear-animate br-sm bg-white mt-6 mb-8"
            data-swiper-options="{
            'loop': false,
            'spaceBetween': 0,
            'breakpoints': {
                '0': {
                    'slidesPerView': 1
                },
                '576': {
                    'slidesPerView': 2
                },
                '768': {
                    'slidesPerView': 3
                },
                '992': {
                    'slidesPerView': 4
                },
                '1200': {
                    'slidesPerView': 3
                },
                '1500': {
                    'slidesPerView': 4
                }
            }
            }">
            <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
                <div className="swiper-slide icon-box icon-box-side text-dark">
                    <span className="icon-box-icon icon-shipping">
                        <i className="w-icon-truck"></i>
                    </span>
                    <div className="icon-box-content">
                        <h4 className="icon-box-title">Free Shipping & Returns</h4>
                        <p className="text-default">For all orders over $99</p>
                    </div>
                </div>
                <div className="swiper-slide icon-box icon-box-side text-dark">
                    <span className="icon-box-icon icon-payment">
                        <i className="w-icon-bag"></i>
                    </span>
                    <div className="icon-box-content">
                        <h4 className="icon-box-title">Secure Payment</h4>
                        <p className="text-default">We ensure secure payment</p>
                    </div>
                </div>
                <div className="swiper-slide icon-box icon-box-side text-dark icon-box-money">
                    <span className="icon-box-icon icon-money">
                        <i className="w-icon-money"></i>
                    </span>
                    <div className="icon-box-content">
                        <h4 className="icon-box-title">Money Back Guarantee</h4>
                        <p className="text-default">Any back within 30 days</p>
                    </div>
                </div>
                <div className="swiper-slide icon-box icon-box-side text-dark icon-box-chat mt-0">
                    <span className="icon-box-icon icon-chat mr-lg-4">
                        <i className="w-icon-chat"></i>
                    </span>
                    <div className="icon-box-content">
                        <h4 className="icon-box-title">Customer Support</h4>
                        <p className="text-default">Call or email us 24/7</p>
                    </div>
                </div>
            </div>
        </div>

         {/* End of Icon Box Wrapper */}
        <div className="title-link-wrapper title-deals after-none appear-animate mb-2">
            <h2 className="title pr-4">Deals of The Week</h2>
            <div className="product-countdown-container text-white font-size-sm align-items-center mr-auto">
                <label className="mr-1">Offer Ends in: </label>
                <div className="product-countdown countdown-compact ml-1 font-weight-bold" data-until="+10d"
                    data-relative="true" data-compact="true" data-format="HMS">10days,00:00:00</div>
            </div>
            <a href="demo13-shop.html" className="btn btn-link btn-icon-right">More Products<i
                    className="w-icon-long-arrow-right"></i></a>
        </div>
        <div className="row product-grid appear-animate">
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="./assets/images/demos/demo13/products/1-1-1.jpg" alt="Product" style={{width: 300, height: 337}}
                                 />
                            <img src="./assets/images/demos/demo13/products/1-1-2.jpg" alt="Product"
                                style={{width: 300, height: 337 }} />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h4 className="product-name"><a href="product-default.html">Charge &amp; Alarm
                                Machin</a></h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{width: "100%"}}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(1 Reviews)</a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$27.00</ins><del className="old-price">$39.00</del>
                        </div>
                    </div> 
                </div> 
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="assets/images/demos/demo13/products/1-2-1.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                            <img src="assets/images/demos/demo13/products/1-2-2.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h4 className="product-name"><a href="product-default.html">Mini Wireless Earphone</a>
                        </h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{width: "100%"}}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(1 Reviews)</a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$3.00</ins><del className="old-price">$3.66</del>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap grid-item3">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="assets/images/demos/demo13/products/1-3-1.jpg" alt="Product"
                            style={{width: 600, height: 600}} />
                            <img src="assets/images/demos/demo13/products/1-3-2.jpg" alt="Product"
                                style={{width: 600, height: 675}} />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details x-50">
                        <h4 className="product-name mb-2"><a href="product-default.html">Soft Sound Marker</a>
                        </h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{width: "80%"}}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(1 Reviews)</a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price font-weight-bold ls-50">$27.00</ins><del
                                className="old-price ls-50">$35.00</del>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="assets/images/demos/demo13/products/1-4-1.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                            <img src="assets/images/demos/demo13/products/1-4-2.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h4 className="product-name"><a href="product-default.html">Headkerchief</a></h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{width: "80%"}}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(1 Reviews)</a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$27.00</ins><del className="old-price">$28.99</del>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="assets/images/demos/demo13/products/1-5-1.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                            <img src="assets/images/demos/demo13/products/1-5-2.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h4 className="product-name"><a href="product-default.html">Best Travel Bag</a></h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{width: "80%"}}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(1 Reviews)</a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$80.00</ins><del className="old-price">$83.00</del>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="assets/images/demos/demo13/products/1-6-1.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                            <img src="assets/images/demos/demo13/products/1-6-2.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h4 className="product-name"><a href="product-default.html">Magenetic Charge Box</a>
                        </h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{width: "80%"}}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(1 Reviews)</a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$75.65</ins><del className="old-price">$79.00</del>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="assets/images/demos/demo13/products/1-7-1.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                            <img src="assets/images/demos/demo13/products/1-7-2.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h4 className="product-name"><a href="product-default.html">Men's Suede Belt</a></h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{width: "80%"}}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(1 Reviews)</a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$25.12</ins><del className="old-price">$26.49</del>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="assets/images/demos/demo13/products/1-8-1.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                            <img src="assets/images/demos/demo13/products/1-8-2.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h4 className="product-name"><a href="product-default.html">High Quality Screen
                                Tablet</a></h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{width: "80%"}}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(1 Reviews)</a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$280.00</ins><del className="old-price">$298.10</del>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img src="assets/images/demos/demo13/products/1-9-1.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                            <img src="assets/images/demos/demo13/products/1-9-2.jpg" alt="Product"
                                style={{width: 300, height: 337}} />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h4 className="product-name"><a href="product-default.html">Comfortable BackPack</a>
                        </h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                                <span className="ratings" style={{width: "80%"}}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="product-default.html" className="rating-reviews">(1 Reviews)</a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$125.98</ins><del className="old-price">$199.89</del>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Container;