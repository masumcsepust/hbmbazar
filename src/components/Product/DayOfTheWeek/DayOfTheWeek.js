import React from "react";

const DayOfTheWeek = () => {
    return (
        <div>
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

export default DayOfTheWeek;