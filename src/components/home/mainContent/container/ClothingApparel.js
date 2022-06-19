import React from 'react';

const ClothingApparel = () => {
    return (
        <div>
            <div className="row gutter-lg cols-lg-2 mt-4 appear-animate">
                <div className="banner-product-wrapper">
                    <div className="title-link-wrapper after-none appear-animate mb-2">
                        <h2 className="title pr-4">Clothing &amp; Apparel</h2>
                        <a href="demo13-shop.html" className="btn btn-link btn-icon-right">
                            Browse All<i className="w-icon-long-arrow-right"></i>
                        </a>
                    </div>
                    <div className="banner banner-1 banner-fixed br-sm mb-4">
                        <figure className="banner-media br-sm">
                            <img src="assets/images/demos/demo13/banner/banner-7.jpg" alt="Category Banner"
                                style={{width:"754px", height:"220px", backgroundColor: "#494844"}} />
                        </figure>
                        <div className="banner-content y-50">
                            <h4 className="banner-subtitle text-white text-uppercase">Save Up to 25% Off</h4>
                            <h3 className="banner-title text-white ls-25 mb-2">Fashion Sale</h3>
                            <h5 className="banner-price-info text-secondary ls-25">
                                <span className="text-uppercase text-white font-weight-normal ls-normal">Starting
                                    At</span>
                                <sup className="font-weight-bolder">$</sup>199<sup
                                    className="font-weight-bolder">99</sup>
                            </h5>
                            <a href="demo13-shop.html" className="btn btn-white btn-rounded btn-outline">
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="swiper-container swiper-theme pb-1 appear-animate" data-swiper-options="{
                        'spaceBetween': 20,
                        'breakpoints': {
                            '0': {
                                'slidesPerView': 2
                            },
                            '576': {
                                'slidesPerView': 3
                            },
                            '992': {
                                'slidesPerView': 2
                            },
                            '1600': {
                                'slidesPerView': 3
                            }
                        }
                        }">
                        <div className="swiper-wrapper row cols-xl-3 cols-lg-6 cols-md-4 cols-2">
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/demos/demo13/products/4-1-1.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
                                            <img src="assets/images/demos/demo13/products/4-1-2.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
                                        </a>
                                        <div className="product-label-group">
                                            <label className="product-label label-sale">19% off</label>
                                        </div>
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
                                        <h4 className="product-name"><a href="product-default.html">Four Wings
                                                Fan</a></h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width:"100%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(1
                                                Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$312.00</ins><del
                                                className="old-price">$320.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/demos/demo13/products/4-2-1.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
                                            <img src="assets/images/demos/demo13/products/4-2-2.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
                                        </a>
                                        <div className="product-label-group">
                                            <label className="product-label label-sale">19% off</label>
                                        </div>
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
                                        <h4 className="product-name"><a href="product-default.html">Comfortable
                                                Armchair</a></h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width:"60%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(1
                                                Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$13,535.00</ins>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/demos/demo13/products/4-3-1.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
                                            <img src="assets/images/demos/demo13/products/4-3-2.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
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
                                        <h4 className="product-name"><a href="product-default.html">Headkerchief</a>
                                        </h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width: "80%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(1
                                                Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$27.00</ins><del
                                                className="old-price">$28.99</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/demos/demo13/products/4-4-1.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
                                            <img src="assets/images/demos/demo13/products/4-4-2.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
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
                                        <h4 className="product-name"><a href="product-default.html">Best Travel
                                                Bag</a></h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width: "80%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(1
                                                Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$80.00</ins><del
                                                className="old-price">$83.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-product-wrapper">
                    <div className="title-link-wrapper after-none appear-animate mb-2">
                        <h2 className="title pr-4">Sporting &amp; Equipment</h2>
                        <a href="demo13-shop.html" className="btn btn-link btn-icon-right">
                            Browse All<i className="w-icon-long-arrow-right"></i>
                        </a>
                    </div>
                    <div className="banner banner-1 banner-fixed br-sm mb-4">
                        <figure className="banner-media br-sm">
                            <img src="assets/images/demos/demo13/banner/banner-8.jpg" alt="Category Banner"
                                style={{width:"754px", height:"220px", backgroundColor: "#E5E5E7"}} />
                        </figure>
                        <div className="banner-content y-50">
                            <h4 className="banner-subtitle text-uppercase font-weight-bold">Top Weekly Seller</h4>
                            <h3 className="banner-title text-uppercase ls-25 mb-2">Sports outfits</h3>
                            <h5 className="banner-price-info text-secondary ls-25">
                                <span className="text-uppercase text-dark font-weight-normal ls-normal">From
                                    Only</span>
                                <sup className="font-weight-bolder">$</sup>99<sup
                                    className="font-weight-bolder">00</sup>
                            </h5>
                            <a href="demo13-shop.html" className="btn btn-dark btn-rounded btn-outline">
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="swiper-container swiper-theme pb-1 appear-animate" data-swiper-options="{
                        'spaceBetween': 20,
                        'breakpoints': {
                            '0': {
                                'slidesPerView': 2
                            },
                            '576': {
                                'slidesPerView': 3
                            },
                            '992': {
                                'slidesPerView': 2
                            },
                            '1600': {
                                'slidesPerView': 3
                            }
                        }
                        }">
                        <div className="swiper-wrapper row cols-xl-3 cols-lg-6 cols-md-4 cols-2">
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/demos/demo13/products/5-1-1.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
                                            <img src="assets/images/demos/demo13/products/5-1-2.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
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
                                        <h4 className="product-name"><a href="product-default.html">Four Wings
                                                Fan</a></h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width:"100%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(1
                                                Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$312.00</ins><del
                                                className="old-price">$320.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/demos/demo13/products/5-2-1.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
                                            <img src="assets/images/demos/demo13/products/5-2-2.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
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
                                        <h4 className="product-name"><a href="product-default.html">Comfortable
                                                Armchair</a></h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width:"60%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(1
                                                Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$13,535.00</ins>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/demos/demo13/products/5-3-1.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
                                            <img src="assets/images/demos/demo13/products/5-3-2.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
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
                                        <h4 className="product-name"><a href="product-default.html">Headkerchief</a>
                                        </h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width: "80%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(1
                                                Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$27.00</ins><del
                                                className="old-price">$28.99</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/demos/demo13/products/5-4-1.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
                                            <img src="assets/images/demos/demo13/products/5-4-2.jpg"
                                                alt="Product" style={{width:"300px", height:"337px"}} />
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
                                        <h4 className="product-name"><a href="product-default.html">Best Travel
                                                Bag</a></h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width: "80%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(1
                                                Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$80.00</ins><del
                                                className="old-price">$83.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-container swiper-theme brands-wrapper bg-white br-sm appear-animate"
                data-swiper-options="{
                'autoplay': false,
                'autoplayTimeout': 4000,
                'loop': false,
                'spaceBetween': 0,
                'breakpoints': {
                    '0': {
                        'slidesPerView': 2
                    },
                    '576': {
                        'slidesPerView': 3
                    },
                    '768': {
                        'slidesPerView': 4
                    },
                    '992': {
                        'slidesPerView': 6
                    },
                    '1200': {
                        'slidesPerView': 8
                    }
                }
                }">
                <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-sm-3 cols-2">
                    <figure className="swiper-slide">
                        <img src="assets/images/demos/demo13/brands/1.png" alt="Brand" style={{width:"310px", height:"180px"}} />
                    </figure>
                    <figure className="swiper-slide">
                        <img src="assets/images/demos/demo13/brands/2.png" alt="Brand" style={{width:"310px", height:"180px"}} />
                    </figure>
                    <figure className="swiper-slide">
                        <img src="assets/images/demos/demo13/brands/3.png" alt="Brand" style={{width:"310px", height:"180px"}} />
                    </figure>
                    <figure className="swiper-slide">
                        <img src="assets/images/demos/demo13/brands/4.png" alt="Brand" style={{width:"310px", height:"180px"}} />
                    </figure>
                    <figure className="swiper-slide">
                        <img src="assets/images/demos/demo13/brands/5.png" alt="Brand" style={{width:"310px", height:"180px"}} />
                    </figure>
                    <figure className="swiper-slide">
                        <img src="assets/images/demos/demo13/brands/6.png" alt="Brand" style={{width:"310px", height:"180px"}} />
                    </figure>
                    <figure className="swiper-slide">
                        <img src="assets/images/demos/demo13/brands/7.png" alt="Brand" style={{width:"310px", height:"180px"}} />
                    </figure>
                    <figure className="swiper-slide">
                        <img src="assets/images/demos/demo13/brands/8.png" alt="Brand" style={{width:"310px", height:"180px"}} />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default ClothingApparel;