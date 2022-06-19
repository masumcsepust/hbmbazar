import React from 'react';

const ConsumerElectric = () => {
    return (
        <div>
            <div className="title-link-wrapper filter-title after-none pt-4 mb-0 appear-animate">
                <h2 className="title mr-auto">Consumer Electric</h2>
                <ul className="nav-filters list-style-none d-flex align-items-center flex-wrap"
                    data-target="#products-1">
                    <li><a href="#" className="nav-filter active" data-filter=".accessories">Accessories</a></li>
                    <li><a href="#" className="nav-filter" data-filter=".audio">Audio</a></li>
                    <li><a href="#" className="nav-filter" data-filter=".cameras">Cameras</a></li>
                    <li><a href="#" className="nav-filter" data-filter=".computers">Computers</a></li>
                    <li><a href="#" className="nav-filter" data-filter=".smartphones">Smartphones</a></li>
                    <li><a href="#" className="nav-filter" data-filter=".tv-video">TV &amp; Video</a></li>
                </ul>
            </div>
            <div className="row filter-content cols-xl-4 cols-lg-4 cols-sm-3 cols-2 appear-animate" id="products-1">
                <div className="grid-item product-wrap accessories tv-video">
                    <div className="product text-center">
                        <figure className="product-media">
                            <a href="product-default.html">
                                <img src="assets/images/demos/demo13/products/2-1-1.jpg" alt="Product"
                                    style={{width:"300px", height:"337px"}} />
                                <img src="assets/images/demos/demo13/products/2-1-2.jpg" alt="Product"
                                    style={{width:"300px", height:"337px"}} />
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
                            <h4 className="product-name"><a href="product-default.html">USB Charger</a></h4>
                            <div className="ratings-container">
                                <div className="ratings-full">
                                    <span className="ratings" style={{width:"100%"}}></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a href="product-default.html" className="rating-reviews">(1 Reviews)</a>
                            </div>
                            <div className="product-price">
                                <ins className="new-price">$17.00</ins><del className="old-price">$20.00</del>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item product-wrap cameras computers">
                    <div className="product text-center">
                        <figure className="product-media">
                            <a href="product-default.html">
                                <img src="assets/images/demos/demo13/products/2-2-1.jpg" alt="Product"
                                    style={{width:"300px", height:"337px"}} />
                                <img src="assets/images/demos/demo13/products/2-2-2.jpg" alt="Product"
                                    style={{width:"300px", height:"337px"}} />
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
                            <h4 className="product-name"><a href="product-default.html">Red Cap Sound Marker</a>
                            </h4>
                            <div className="ratings-container">
                                <div className="ratings-full">
                                    <span className="ratings" style={{width:"60%"}}></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a href="product-default.html" className="rating-reviews">(1 Reviews)</a>
                            </div>
                            <div className="product-price">
                                <ins className="new-price">$13,535.00</ins>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item product-wrap audio smartphones accessories">
                    <div className="product text-center">
                        <figure className="product-media">
                            <a href="product-default.html">
                                <img src="assets/images/demos/demo13/products/2-4-1.jpg" alt="Product"
                                    style={{width:"300px", height:"337px"}} />
                                <img src="assets/images/demos/demo13/products/2-4-2.jpg" alt="Product"
                                    style={{width:"300px", height:"337px"}} />
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
                <div className="grid-item product-wrap tv-video cameras smartphones">
                    <div className="product text-center">
                        <figure className="product-media">
                            <a href="product-default.html">
                                <img src="assets/images/demos/demo13/products/2-5-1.jpg" alt="Product"
                                    style={{width:"300px", height:"337px"}} />
                                <img src="assets/images/demos/demo13/products/2-5-2.jpg" alt="Product"
                                    style={{width:"300px", height:"337px"}} />
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
                <div className="grid-item product-wrap computers audio">
                    <div className="product text-center">
                        <figure className="product-media">
                            <a href="product-default.html">
                                <img src="assets/images/demos/demo13/products/2-6-1.jpg" alt="Product"
                                    style={{width:"300px", height:"337px"}} />
                                <img src="assets/images/demos/demo13/products/2-6-2.jpg" alt="Product"
                                    style={{width:"300px", height:"337px"}} />
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
                <div className="grid-item product-wrap accessories cameras">
                    <div className="product text-center">
                        <figure className="product-media">
                            <a href="product-default.html">
                                <img src="assets/images/demos/demo13/products/1-7-1.jpg" alt="Product"
                                    style={{width:"300px", height:"337px"}} />
                                <img src="assets/images/demos/demo13/products/1-7-2.jpg" alt="Product"
                                    style={{width:"300px", height:"337px"}} />
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
                <div className="grid-space col-xl-2 col-1"></div>
            </div>
        </div>
    )
}

export default ConsumerElectric;