import React from 'react';

const RecentlyViewed = () => {
    return (
        <div>
            <div className="title-link-wrapper title-recent pt-1 mb-4 after-none appear-animate">
                <h2 className="title ls-normal appear-animate pb-1">Recently Viewed</h2>
                <a href="shop-boxed-banner.html" className="btn btn-link mb-0">
                    More Products
                    <i className="w-icon-long-arrow-right"></i>
                </a>
            </div>
            <div className="swiper-container swiper-theme recent-view shadow-swiper appear-animate mb-4 pb-2"
                data-swiper-options="{
                    'spaceBetween': 20,
                    'slidesPerView': 2,
                    'breakpoints': {
                        '576': {
                            'slidesPerView': 3
                        },
                        '768': {
                            'slidesPerView': 5
                        },
                        '992': {
                            'slidesPerView': 6
                        },
                        '1200': {
                            'slidesPerView': 8
                        }
                    }
                }">
                <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
                    <div className="swiper-slide product-wrap">
                        <div className="product text-center product-absolute">
                            <figure className="product-media">
                                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                                    <img src="assets/images/demos/demo13/products/2-2-1.jpg" alt="Product"
                                        style={{width:"130px", height:"146px"}} />
                                </a>
                            </figure>
                            <h4 className="product-name">
                                <a href="product-default.html">Headkerchief</a>
                            </h4>
                        </div>
                    </div>
                    {/* <!-- End of Product Wrap --> */}
                    <div className="swiper-slide product-wrap">
                        <div className="product text-center product-absolute">
                            <figure className="product-media">
                                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                                    <img src="assets/images/demos/demo13/products/1-4-2.jpg" alt="Prouduct"
                                        style={{width:"130px", height:"146px"}} />
                                </a>
                            </figure>
                            <h4 className="product-name">
                                <a href="product-default.html">Leather Stripe Watch</a>
                            </h4>
                        </div>
                    </div>
                    {/* <!-- End of Product Wrap --> */}
                    <div className="swiper-slide product-wrap">
                        <div className="product text-center product-absolute">
                            <figure className="product-media">
                                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                                    <img src="assets/images/demos/demo13/products/2-1-1.jpg" alt="Prouduct"
                                        style={{width:"130px", height:"146px"}} />
                                </a>
                            </figure>
                            <h4 className="product-name">
                                <a href="product-default.html">Red Cap Sound Marker</a>
                            </h4>
                        </div>
                    </div>
                    {/* <!-- End of Product Wrap --> */}
                    <div className="swiper-slide product-wrap">
                        <div className="product text-center product-absolute">
                            <figure className="product-media">
                                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                                    <img src="assets/images/demos/demo13/products/2-3-1.jpg" alt="Prouduct"
                                        style={{width:"130px", height:"146px"}} />
                                </a>
                            </figure>
                            <h4 className="product-name">
                                <a href="product-default.html">Smartphone Electronic Charger</a>
                            </h4>
                        </div>
                    </div>
                    {/* <!-- End of Product Wrap --> */}
                    <div className="swiper-slide product-wrap">
                        <div className="product text-center product-absolute">
                            <figure className="product-media">
                                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                                    <img src="assets/images/demos/demo13/products/2-4-1.jpg" alt="Prouduct"
                                        style={{width:"130px", height:"146px"}} />
                                </a>
                            </figure>
                            <h4 className="product-name">
                                <a href="product-default.html">Blue Ski Boots</a>
                            </h4>
                        </div>
                    </div>
                    {/* <!-- End of Product Wrap --> */}
                    <div className="swiper-slide product-wrap">
                        <div className="product text-center product-absolute">
                            <figure className="product-media">
                                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                                    <img src="assets/images/demos/demo13/products/2-2-1.jpg" alt="Prouduct"
                                        style={{width:"130px", height:"146px"}} />
                                </a>
                            </figure>
                            <h4 className="product-name">
                                <a href="product-default.html">Soft Sound Marker</a>
                            </h4>
                        </div>
                    </div>
                    {/* <!-- End of Product Wrap --> */}
                    <div className="swiper-slide product-wrap">
                        <div className="product text-center product-absolute">
                            <figure className="product-media">
                                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                                    <img src="assets/images/demos/demo13/products/2-4-1.jpg" alt="Prouduct"
                                        style={{width:"130px", height:"146px"}} />
                                </a>
                            </figure>
                            <h4 className="product-name">
                                <a href="product-default.html">Multi function Watch</a>
                            </h4>
                        </div>
                    </div>
                    {/* <!-- End of Product Wrap --> */}
                    <div className="swiper-slide product-wrap">
                        <div className="product text-center product-absolute">
                            <figure className="product-media">
                                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                                    <img src="assets/images/demos/demo13/products/2-5-1.jpg" alt="Prouduct"
                                        style={{width:"130px", height:"146px"}} />
                                </a>
                            </figure>
                            <h4 className="product-name">
                                <a href="product-default.html">Running Machine</a>
                            </h4>
                        </div>
                    </div>
                    {/* <!-- End of Product Wrap --> */}
                </div>
            </div>
        </div>
    )
}

export default RecentlyViewed;