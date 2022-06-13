import React from 'react';

const BottomNavbar = () => {
    return (
        <div className="header-middle sticky-content fix-top sticky-header">
            <div className="container">
                <div className="header-left">
                    <a href="demo13.html" className="header-logo bg-white">
                        <img src="../assets/images/demos/demo13/logo.png" alt="logo" width="145" height="45" />
                    </a>
                    <div className="account align-items-center d-md-show">
                        <a className="login inline-type d-flex ls-normal" href="my-account.html">
                            <i
                                className="w-icon-account d-flex align-items-center justify-content-center br-50"></i>
                            <span className="flex-column justify-content-center d-xl-show">Hello, Sign In
                                <b className="d-block font-weight-bolder ls-50">My Account</b>
                            </span>
                        </a>
                    </div>
                    <span className="divider mr-4 d-md-show"></span>
                    <div className="dropdown ml-0 mr-5">
                        <a href="#currency">USD</a>
                        <div className="dropdown-box">
                            <a href="#USD">USD</a>
                            <a href="#EUR">EUR</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a href="#language"><img src="../assets/images/flags/eng.png" alt="ENG Flag" width="14"
                                height="8" className="dropdown-image" /> ENG
                        </a>
                        <div className="dropdown-box">
                            <a href="#ENG">
                                <img src="../assets/images/flags/eng.png" alt="ENG Flag" width="14" height="8"
                                    className="dropdown-image" />
                                ENG
                            </a>
                            <a href="#FRA">
                                <img src="../assets/images/flags/fra.png" alt="FRA Flag" width="14" height="8"
                                    className="dropdown-image" />
                                FRA
                            </a>
                        </div>
                    </div>
                    <form method="get" action="#"
                        className="input-wrapper header-search hs-expanded hs-round d-none d-md-flex">
                        <div className="select-box bg-white">
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
                        <input type="text" className="form-control bg-white" name="search" id="search"
                            placeholder="Search in..." required />
                        <button className="btn btn-search" type="submit"><i className="w-icon-search"></i>
                        </button>
                    </form>
                </div>
                <div className="header-right ml-4 d-sm-show">
                    <div className="header-call d-lg-show d-lg-flex align-items-center">
                        <a href="tel:#" className="w-icon-call"></a>
                        <div className="call-info">
                            <h4 className="chat font-weight-normal font-size-md text-normal text-white mb-0">
                                <a href="mailto:#" className="text-capitalize text-dark">Live Chat</a> <span
                                    className="text-dark ls-normal">or:</span>
                            </h4>
                            <a href="tel:#" className="phone-number font-weight-bolder ls-50">0(800)123-456</a>
                        </div>
                    </div>
                    <a className="wishlist label-down link d-lg-show" href="wishlist.html">
                        <i className="w-icon-heart"></i>
                        <span className="wishlist-label">Wishlist</span>
                    </a>
                    <a className="compare label-down link d-lg-show" href="compare.html">
                        <i className="w-icon-compare"></i>
                        <span className="compare-label">Compare</span>
                    </a>
                    <div className="dropdown cart-dropdown cart-offcanvas d-flex mr-0 mr-lg-2">
                        <div className="cart-overlay"></div>
                        <a href="#" className="cart-toggle label-down link">
                            <i className="w-icon-cart">
                                <span className="cart-count">2</span>
                            </i>
                            <span className="cart-label">Cart</span>
                        </a>
                        <div className="dropdown-box">
                            <div className="cart-header">
                                <span>Shopping Cart</span>
                                <a href="#" className="btn-close">Close<i
                                        className="w-icon-long-arrow-right"></i></a>
                            </div>
                            <div className="products">
                                <div className="product product-cart">
                                    <div className="product-detail">
                                        <a href="product-default.html" className="product-name">Beige knitted elas tic runner shoes</a>
                                        <div className="price-box">
                                            <span className="product-quantity">1</span>
                                            <span className="product-price">$25.68</span>
                                        </div>
                                    </div>
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/cart/product-1.jpg" alt="product"
                                                height="84" width="94" />
                                        </a>
                                    </figure>
                                    <button className="btn btn-link btn-close">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                <div className="product product-cart">
                                    <div className="product-detail">
                                        <a href="product-default.html" className="product-name">Blue utility pina fore denim dress</a>
                                        <div className="price-box">
                                            <span className="product-quantity">1</span>
                                            <span className="product-price">$32.99</span>
                                        </div>
                                    </div>
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/cart/product-2.jpg" alt="product"
                                                width="84" height="94" />
                                        </a>
                                    </figure>
                                    <button className="btn btn-link btn-close">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="cart-total">
                                <label>Subtotal:</label>
                                <span className="price">$58.67</span>
                            </div>

                            <div className="cart-action">
                                <a href="cart.html" className="btn btn-dark btn-outline btn-rounded">View
                                    Cart</a>
                                <a href="checkout.html" className="btn btn-primary  btn-rounded">Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomNavbar;