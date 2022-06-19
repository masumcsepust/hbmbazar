import React from 'react';

const TopCategoriesOfTheMonth = () => {
    return (
        <div>
            <h2 className="title title-categories title-center pt-1 appear-animate">Top Categories of The Month</h2>
            <div className="categories-wrapper swiper-container shadow-swiper swiper-theme appear-animate"
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
                        'slidesPerView': 7
                    },
                    '1200': {
                        'slidesPerView': 6
                    },
                    '1400': {
                        'slidesPerView': 7
                    },
                    '1600': {
                        'slidesPerView': 8
                    }
                }
            }">
                <div className="swiper-wrapper row cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                        <a href="demo13-shop.html">
                            <figure className="category-media">
                                <img src="assets/images/demos/demo13/category/category-1.jpg" alt="Category"
                                    style={{width:"174px", height:"200px"}} />
                            </figure>
                        </a>
                        <div className="category-content">
                            <h4 className="category-name">Headphone</h4>
                            <a href="demo13-shop.html" className="btn btn-primary btn-link btn-underline">Shop
                                Now</a>
                        </div>
                    </div>
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                        <a href="demo13-shop.html">
                            <figure className="category-media">
                                <img src="assets/images/demos/demo13/category/category-2.jpg" alt="Category"
                                    style={{width:"174px", height:"200px"}} />
                            </figure>
                        </a>
                        <div className="category-content">
                            <h4 className="category-name">Furniture</h4>
                            <a href="demo13-shop.html" className="btn btn-primary btn-link btn-underline">Shop
                                Now</a>
                        </div>
                    </div>
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                        <a href="demo13-shop.html">
                            <figure className="category-media">
                                <img src="assets/images/demos/demo13/category/category-3.jpg" alt="Category"
                                    style={{width:"174px", height:"200px"}} />
                            </figure>
                        </a>
                        <div className="category-content">
                            <h4 className="category-name">Smartwatch</h4>
                            <a href="demo13-shop.html" className="btn btn-primary btn-link btn-underline">Shop
                                Now</a>
                        </div>
                    </div>
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                        <a href="demo13-shop.html">
                            <figure className="category-media">
                                <img src="assets/images/demos/demo13/category/category-4.jpg" alt="Category"
                                    style={{width:"174px", height:"200px"}} />
                            </figure>
                        </a>
                        <div className="category-content">
                            <h4 className="category-name">Men Shoes</h4>
                            <a href="demo13-shop.html" className="btn btn-primary btn-link btn-underline">Shop
                                Now</a>
                        </div>
                    </div>
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                        <a href="demo13-shop.html">
                            <figure className="category-media">
                                <img src="assets/images/demos/demo13/category/category-5.jpg" alt="Category"
                                    style={{width:"174px", height:"200px"}} />
                            </figure>
                        </a>
                        <div className="category-content">
                            <h4 className="category-name">Backpack</h4>
                            <a href="demo13-shop.html" className="btn btn-primary btn-link btn-underline">Shop
                                Now</a>
                        </div>
                    </div>
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                        <a href="demo13-shop.html">
                            <figure className="category-media">
                                <img src="assets/images/demos/demo13/category/category-6.jpg" alt="Category"
                                    style={{width:"174px", height:"200px"}} />
                            </figure>
                        </a>
                        <div className="category-content">
                            <h4 className="category-name">Electronics</h4>
                            <a href="demo13-shop.html" className="btn btn-primary btn-link btn-underline">Shop
                                Now</a>
                        </div>
                    </div>
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                        <a href="demo13-shop.html">
                            <figure className="category-media">
                                <img src="assets/images/demos/demo13/category/category-7.jpg" alt="Category"
                                    style={{width:"174px", height:"200px"}} />
                            </figure>
                        </a>
                        <div className="category-content">
                            <h4 className="category-name">Camera</h4>
                            <a href="demo13-shop.html" className="btn btn-primary btn-link btn-underline">Shop
                                Now</a>
                        </div>
                    </div>
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                        <a href="demo13-shop.html">
                            <figure className="category-media">
                                <img src="assets/images/demos/demo13/category/category-8.jpg" alt="Category"
                                    style={{width:"174px", height:"200px"}} />
                            </figure>
                        </a>
                        <div className="category-content">
                            <h4 className="category-name">Appliances</h4>
                            <a href="demo13-shop.html" className="btn btn-primary btn-link btn-underline">Shop
                                Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCategoriesOfTheMonth;