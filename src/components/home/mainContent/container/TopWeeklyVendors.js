import React from 'react';

const TopWeeklyVendors = () => {
    return (
        <div>
            <h2 className="title title-vendors pt-1 mt-10 mb-5 appear-animate">Top Weekly Vendors</h2>
            <div className="vendor-wrapper swiper-container swiper-theme appear-animate" data-swiper-options="{
                'spaceBetween': 20,
                'slidesPerView': 1,
                'breakpoints': {
                    '576': {
                        'slidesPerView': 2
                    },
                    '768': {
                        'slidesPerView': 3
                    },
                    '992': {
                        'slidesPerView': 3
                    },
                    '1500': {
                        'slidesPerView': 4
                    }
                }
            }">
                <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
                    <div className="swiper-slide vendor-widget vendor-widget-1 br-sm">
                        <div className="vendor-products grid-type">
                            <div className="vendor-product lg-item">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/demos/demo13/vendor/vendor1-1.jpg"
                                            alt="Vendor Product" style={{width:"600px", height:"675px"}} />
                                    </a>
                                </figure>
                            </div>
                            <div className="vendor-product sm-item">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/demos/demo13/vendor/vendor1-2.jpg"
                                            alt="Vendor Product" style={{width:"150px", height:"150px"}} />
                                    </a>
                                </figure>
                            </div>
                            <div className="vendor-product sm-item">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/demos/demo13/vendor/vendor1-3.jpg"
                                            alt="Vendor Product" style={{width:"150px", height:"150px"}} />
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div className="vendor-details">
                            <figure className="vendor-logo br-50">
                                <a href="vendor-dokan-store.html">
                                    <img src="assets/images/demos/demo13/vendor/vendor-logo-1.png"
                                        alt="Vendor Logo" style={{width:"150px", height:"150px"}} />
                                </a>
                            </figure>
                            <div className="vendor-personal">
                                <h4 className="vendor-name">
                                    <a href="vendor-dokan-store.html">Vendor 1</a>
                                </h4>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{width:"86.6%"}}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                </div>
                                <a href="vendor-dokan-store.html" className="btn btn-dark btn-link">Browse This
                                    Vendor</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End of Vendor widget 1 --> */}
                    <div className="swiper-slide vendor-widget vendor-widget-1 br-sm">
                        <div className="vendor-products grid-type">
                            <div className="vendor-product lg-item">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/demos/demo13/vendor/vendor2-1.jpg"
                                            alt="Vendor Product" style={{width:"600px", height:"675px"}} />
                                    </a>
                                </figure>
                            </div>
                            <div className="vendor-product sm-item">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/demos/demo13/vendor/vendor2-2.jpg"
                                            alt="Vendor Product" style={{width:"150px", height:"150px"}} />
                                    </a>
                                </figure>
                            </div>
                            <div className="vendor-product sm-item">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/demos/demo13/vendor/vendor2-3.jpg"
                                            alt="Vendor Product" style={{width:"150px", height:"150px"}} />
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div className="vendor-details">
                            <figure className="vendor-logo br-50">
                                <a href="vendor-dokan-store.html">
                                    <img src="assets/images/demos/demo13/vendor/vendor-logo-2.png"
                                        alt="Vendor Logo" style={{width:"150px", height:"150px"}} />
                                </a>
                            </figure>
                            <div className="vendor-personal">
                                <h4 className="vendor-name">
                                    <a href="vendor-dokan-store.html">Vendor 2</a>
                                </h4>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{width:"86.6%"}}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                </div>
                                <a href="vendor-dokan-store.html" className="btn btn-dark btn-link">Browse This
                                    Vendor</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End of Vendor widget 1 --> */}
                    <div className="swiper-slide vendor-widget vendor-widget-1 br-sm">
                        <div className="vendor-products grid-type">
                            <div className="vendor-product lg-item">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/demos/demo13/vendor/vendor3-1.jpg"
                                            alt="Vendor Product" style={{width:"600px", height:"675px"}} />
                                    </a>
                                </figure>
                            </div>
                            <div className="vendor-product sm-item">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/demos/demo13/vendor/vendor3-2.jpg"
                                            alt="Vendor Product" style={{width:"150px", height:"150px"}} />
                                    </a>
                                </figure>
                            </div>
                            <div className="vendor-product sm-item">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/demos/demo13/vendor/vendor3-3.jpg"
                                            alt="Vendor Product" style={{width:"150px", height:"150px"}} />
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div className="vendor-details">
                            <figure className="vendor-logo br-50">
                                <a href="vendor-dokan-store.html">
                                    <img src="assets/images/demos/demo13/vendor/vendor-logo-3.png"
                                        alt="Vendor Logo" style={{width:"150px", height:"150px"}} />
                                </a>
                            </figure>
                            <div className="vendor-personal">
                                <h4 className="vendor-name">
                                    <a href="vendor-dokan-store.html">Vendor 3</a>
                                </h4>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{width:"86.6%"}}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                </div>
                                <a href="vendor-dokan-store.html" className="btn btn-dark btn-link">Browse This
                                    Vendor</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End of Vendor widget 1 --> */}
                    <div className="swiper-slide vendor-widget vendor-widget-1 br-sm">
                        <div className="vendor-products grid-type">
                            <div className="vendor-product lg-item">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/demos/demo13/vendor/vendor4-1.jpg"
                                            alt="Vendor Product" style={{width:"600px", height:"675px"}} />
                                    </a>
                                </figure>
                            </div>
                            <div className="vendor-product sm-item">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/demos/demo13/vendor/vendor4-2.jpg"
                                            alt="Vendor Product" style={{width:"150px", height:"150px"}} />
                                    </a>
                                </figure>
                            </div>
                            <div className="vendor-product sm-item">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/demos/demo13/vendor/vendor4-3.jpg"
                                            alt="Vendor Product" style={{width:"150px", height:"150px"}} />
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div className="vendor-details">
                            <figure className="vendor-logo br-50">
                                <a href="vendor-dokan-store.html">
                                    <img src="assets/images/demos/demo13/vendor/vendor-logo-4.png"
                                        alt="Vendor Logo" style={{width:"150px", height:"150px"}} />
                                </a>
                            </figure>
                            <div className="vendor-personal">
                                <h4 className="vendor-name">
                                    <a href="vendor-dokan-store.html">Vendor 4</a>
                                </h4>
                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{width:"86.6%"}}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                </div>
                                <a href="vendor-dokan-store.html" className="btn btn-dark btn-link">Browse This
                                    Vendor</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End of Vendor widget 1 --> */}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    )
}

export default TopWeeklyVendors;