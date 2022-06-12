import React from 'react';

const BottomNavbar = () => {
    return (
        <div class="header-middle sticky-content fix-top sticky-header">
                        <div class="container">
                            <div class="header-left">
                                <a href="demo13.html" class="header-logo bg-white">
                                    <img src="assets/images/demos/demo13/logo.png" alt="logo" width="145" height="45" />
                                </a>
                                <div class="account align-items-center d-md-show">
                                    <a class="login inline-type d-flex ls-normal" href="my-account.html">
                                        <i
                                            class="w-icon-account d-flex align-items-center justify-content-center br-50"></i>
                                        <span class="flex-column justify-content-center d-xl-show">Hello, Sign In
                                            <b class="d-block font-weight-bolder ls-50">My Account</b>
                                        </span>
                                    </a>
                                </div>
                                <span class="divider mr-4 d-md-show"></span>
                                <div class="dropdown ml-0 mr-5">
                                    <a href="#currency">USD</a>
                                    <div class="dropdown-box">
                                        <a href="#USD">USD</a>
                                        <a href="#EUR">EUR</a>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <a href="#language"><img src="assets/images/flags/eng.png" alt="ENG Flag" width="14"
                                            height="8" class="dropdown-image" /> ENG
                                    </a>
                                    <div class="dropdown-box">
                                        <a href="#ENG">
                                            <img src="assets/images/flags/eng.png" alt="ENG Flag" width="14" height="8"
                                                class="dropdown-image" />
                                            ENG
                                        </a>
                                        <a href="#FRA">
                                            <img src="assets/images/flags/fra.png" alt="FRA Flag" width="14" height="8"
                                                class="dropdown-image" />
                                            FRA
                                        </a>
                                    </div>
                                </div>
                                <form method="get" action="#"
                                    class="input-wrapper header-search hs-expanded hs-round d-none d-md-flex">
                                    <div class="select-box bg-white">
                                        <select id="category" name="category">
                                            <option value="">All Categories</option>
                                            <option value="4">Fashion</option>
                                            <option value="5">Furniture</option>
                                            <option value="6">Shoes</option>
                                            <option value="7">Sports</option>
                                            <option value="8">Games</option>
                                            <option value="9">Computers</option>
                                            <option value="10">Electronics</option>
                                            <option value="11">Kitchen</option>
                                            <option value="12">Clothing</option>
                                        </select>
                                    </div>
                                    <input type="text" class="form-control bg-white" name="search" id="search"
                                        placeholder="Search in..." required />
                                    <button class="btn btn-search" type="submit"><i class="w-icon-search"></i>
                                    </button>
                                </form>
                            </div>
                            <div class="header-right ml-4 d-sm-show">
                                <div class="header-call d-lg-show d-lg-flex align-items-center">
                                    <a href="tel:#" class="w-icon-call"></a>
                                    <div class="call-info">
                                        <h4 class="chat font-weight-normal font-size-md text-normal text-white mb-0">
                                            <a href="mailto:#" class="text-capitalize text-dark">Live Chat</a> <span
                                                class="text-dark ls-normal">or:</span>
                                        </h4>
                                        <a href="tel:#" class="phone-number font-weight-bolder ls-50">0(800)123-456</a>
                                    </div>
                                </div>
                                <a class="wishlist label-down link d-lg-show" href="wishlist.html">
                                    <i class="w-icon-heart"></i>
                                    <span class="wishlist-label">Wishlist</span>
                                </a>
                                <a class="compare label-down link d-lg-show" href="compare.html">
                                    <i class="w-icon-compare"></i>
                                    <span class="compare-label">Compare</span>
                                </a>
                                <div class="dropdown cart-dropdown cart-offcanvas d-flex mr-0 mr-lg-2">
                                    <div class="cart-overlay"></div>
                                    <a href="#" class="cart-toggle label-down link">
                                        <i class="w-icon-cart">
                                            <span class="cart-count">2</span>
                                        </i>
                                        <span class="cart-label">Cart</span>
                                    </a>
                                    <div class="dropdown-box">
                                        <div class="cart-header">
                                            <span>Shopping Cart</span>
                                            <a href="#" class="btn-close">Close<i
                                                    class="w-icon-long-arrow-right"></i></a>
                                        </div>
                                        <div class="products">
                                            <div class="product product-cart">
                                                <div class="product-detail">
                                                    <a href="product-default.html" class="product-name">Beige knitted elas tic runner shoes</a>
                                                    <div class="price-box">
                                                        <span class="product-quantity">1</span>
                                                        <span class="product-price">$25.68</span>
                                                    </div>
                                                </div>
                                                <figure class="product-media">
                                                    <a href="product-default.html">
                                                        <img src="assets/images/cart/product-1.jpg" alt="product"
                                                            height="84" width="94" />
                                                    </a>
                                                </figure>
                                                <button class="btn btn-link btn-close">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                            <div class="product product-cart">
                                                <div class="product-detail">
                                                    <a href="product-default.html" class="product-name">Blue utility pina fore denim dress</a>
                                                    <div class="price-box">
                                                        <span class="product-quantity">1</span>
                                                        <span class="product-price">$32.99</span>
                                                    </div>
                                                </div>
                                                <figure class="product-media">
                                                    <a href="product-default.html">
                                                        <img src="assets/images/cart/product-2.jpg" alt="product"
                                                            width="84" height="94" />
                                                    </a>
                                                </figure>
                                                <button class="btn btn-link btn-close">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="cart-total">
                                            <label>Subtotal:</label>
                                            <span class="price">$58.67</span>
                                        </div>

                                        <div class="cart-action">
                                            <a href="cart.html" class="btn btn-dark btn-outline btn-rounded">View
                                                Cart</a>
                                            <a href="checkout.html" class="btn btn-primary  btn-rounded">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default BottomNavbar;