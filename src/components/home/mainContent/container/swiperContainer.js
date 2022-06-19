import React from 'react';

const SwiperContainer = () => {
    return (
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
    )
}

export default SwiperContainer;
