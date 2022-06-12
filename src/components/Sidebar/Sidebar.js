import React from 'react';

const Sidebar = () => {
    return (
            <aside className="sidebar sidebar-switch-xl sticky-sidebar-wrapper left-sidebar sidebar-fixed">
                <div className="sidebar-overlay"></div>
                <a href="#" className="sidebar-toggle"><i className="fas fa-chevron-right"></i></a>
                <a href="#" className="sidebar-close"><i className="close-icon"></i></a>
                <div className="sidebar-content left-sidebar-content scrollable">
                    <div className="dropdown category-dropdown bg-white sticky-sidebar"
                        data-sticky-options="{'minWidth': 1199, 'padding': {'top': 0}, 'paddingOffsetTop': 0}">
                        <a href="demo13.html" className="sidebar-logo bg-white d-block after-none">
                            <img src="assets/images/demos/demo13/logo-1.png" alt="logo" width="145" height="45" />
                        </a>
                        <h3 className="d-block text-dark font-weight-bolder dropdown-title pb-0 mb-0">Departments</h3>
                        <div className="dropdown-box text-default">
                            <ul className="menu vertical-menu category-menu">
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-tshirt"></i>Fashion
                                        <span className="submenu-toggle-btn"></span>
                                    </a>
                                    <ul className="megamenu">
                                        <li>
                                            <h4 className="menu-title">Women</h4>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">New Arrivals</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Best Sellers</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Trending</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Clothing</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Shoes</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Bags</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Accessories</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Jewlery & Watches</a></li>

                                            </ul>
                                        </li>
                                        <li>
                                            <h4 className="menu-title">Men</h4>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">New Arrivals</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Best Sellers</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Trending</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Clothing</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Shoes</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Bags</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Accessories</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Jewlery & Watches</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="banner-fixed menu-banner menu-banner2">
                                                <figure>
                                                    <img src="assets/images/menu/banner-2.jpg" alt="Menu Banner"
                                                        width="235" height="347" />
                                                </figure>
                                                <div className="banner-content">
                                                    <div className="banner-price-info mb-1 ls-normal">Get up to
                                                        <strong className="text-secondary text-uppercase">20%Off</strong>
                                                    </div>
                                                    <h3 className="banner-title ls-normal">Hot Sales</h3>
                                                    <a href="demo13-shop.html"
                                                        className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right">
                                                        Shop Now
                                                        <i className="w-icon-long-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-home"></i>Home & Garden
                                        <span className="submenu-toggle-btn"></span>
                                    </a>
                                    <ul className="megamenu">
                                        <li>
                                            <h4 className="menu-title">Bedroom</h4>
                                            <hr className="divider"></hr>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Beds, Frames & Bases</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Dressers</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Nightstands</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Kid's Beds & Headboards</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Armoires</a></li>
                                            </ul>
                                            <h4 className="menu-title mt-1">Living Room</h4>
                                            <hr className="divider"></hr>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Coffee Tables</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Chairs</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Tables</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Futons & Sofa Beds</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Cabinets & Chests</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4 className="menu-title">Office</h4>
                                            <hr className="divider"></hr>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Office Chairs</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Desks</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Bookcases</a></li>
                                                <li><a href="shop-fullwidth-banner.html">File Cabinets</a></li>
                                                <li><a href="shop-fullwidth-banner.html">BreakroomTables</a></li>
                                            </ul>
                                            <h4 className="menu-title mt-1">Kitchen & Dining</h4>
                                            <hr className="divider"></hr>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Dining Sets</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Kitchen Storage Cabinets</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Bashers Racks</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Dining Chairs</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Dining Room Tables</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Bar Stools</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="menu-banner banner-fixed menu-banner3">
                                                <figure>
                                                    <img src="assets/images/menu/banner-3.jpg" alt="Menu Banner"
                                                        width="235" height="461" />
                                                </figure>
                                                <div className="banner-content">
                                                    <h4 className="banner-subtitle font-weight-normal text-white mb-1">
                                                        Restroom</h4>
                                                    <h3 className="banner-title font-weight-bolder text-white ls-normal">
                                                        Furniture Sale
                                                    </h3>
                                                    <div className="banner-price-info text-white font-weight-normal ls-25">
                                                        Up to
                                                        <span className="text-secondary text-uppercase font-weight-bold">25%
                                                            Off</span>
                                                    </div>
                                                    <a href="demo13-shop.html"
                                                        className="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right">
                                                        Shop Now<i className="w-icon-long-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-electronics"></i>Electronics
                                        <span className="submenu-toggle-btn"></span>
                                    </a>
                                    <ul className="megamenu">
                                        <li>
                                            <h4 className="menu-title">Laptops &amp; Computers</h4>
                                            <hr className="divider"></hr>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Desktop Computers</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Monitors</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Laptops</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Hard Drives &amp;Storage</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Computer Accessories</a></li>
                                            </ul>
                                            <h4 className="menu-title mt-1">TV &amp; Video</h4>
                                            <hr className="divider"></hr>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">TVs</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Home Audio Speakers</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Projectors</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Media Streaming Devices</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4 className="menu-title">Digital Cameras</h4>
                                            <hr className="divider"></hr>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Digital SLR Cameras</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Sports & Action Cameras</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Camera Lenses</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Photo Printer</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Digital MemoryCards</a></li>
                                            </ul>
                                            <h4 className="menu-title mt-1">Cell Phones</h4>
                                            <hr className="divider"></hr>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Carrier Phones</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Unlocked Phones</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Phone & CellphoneCases</a></li>
                                                <li><a href="shop-fullwidth-banner.html">CellphoneChargers</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="menu-banner banner-fixed menu-banner4">
                                                <figure>
                                                    <img src="assets/images/menu/banner-4.jpg" alt="Menu Banner"
                                                        width="235" height="433" />
                                                </figure>
                                                <div className="banner-content">
                                                    <h4 className="banner-subtitle font-weight-normal">Deals Of The Week
                                                    </h4>
                                                    <h3 className="banner-title text-white">Save On Smart EarPhone</h3>
                                                    <div
                                                        className="banner-price-info text-primary font-weight-bolder text-uppercase text-secondary">
                                                        20% Off
                                                    </div>
                                                    <a href="demo13-shop.html"
                                                        className="btn btn-white btn-outline btn-sm btn-rounded">Shop
                                                        Now</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-sofa"></i>Furniture
                                        <span className="submenu-toggle-btn"></span>
                                    </a>
                                    <ul className="megamenu type2">
                                        <li className="row">
                                            <div className="col-xl-3">
                                                <h4 className="menu-title">Furniture</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Sofas & Couches</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Armchairs</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Bed Frames</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Beside Tables</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Dressing Tables</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-3">
                                                <h4 className="menu-title">Lighting</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Light Bulbs</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Lamps</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Celling Lights</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Wall Lights</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Bathroom Lighting</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-3">
                                                <h4 className="menu-title">Home Accessories</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Decorative Accessories</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Candals & Holders</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Home Fragrance</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Mirrors</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Clocks</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-3">
                                                <h4 className="menu-title">Garden & Outdoors</h4>
                                                <hr className="divider" />
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Garden Furniture</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Lawn Mowers</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Pressure Washers</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">All Garden Tools</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Outdoor Dining</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="row">
                                            <div className="col-6">
                                                <div className="banner banner-fixed menu-banner5 br-xs">
                                                    <figure>
                                                        <img src="assets/images/menu/banner-5.jpg" alt="Banner"
                                                            width="410" height="123"
                                                            style={{backgroundColor: "#D2D2D2;"}} />
                                                    </figure>
                                                    <div className="banner-content text-right y-50">
                                                        <h4
                                                            className="banner-subtitle font-weight-normal text-default text-capitalize">
                                                            New Arrivals
                                                        </h4>
                                                        <h3
                                                            className="banner-title font-weight-bolder text-capitalize ls-normal">
                                                            Amazing Sofa
                                                        </h3>
                                                        <div className="banner-price-info font-weight-normal ls-normal">
                                                            Starting at <strong>$125.00</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="banner banner-fixed menu-banner5 br-xs">
                                                    <figure>
                                                        <img src="assets/images/menu/banner-6.jpg" alt="Banner"
                                                            width="410" height="123"
                                                            style={{backgroundColor: "#9F9888;"}}/>
                                                    </figure>
                                                    <div className="banner-content y-50">
                                                        <h4
                                                            className="banner-subtitle font-weight-normal text-white text-capitalize">
                                                            Best Seller
                                                        </h4>
                                                        <h3
                                                            className="banner-title font-weight-bolder text-capitalize text-white ls-normal">
                                                            Chair &amp; Lamp
                                                        </h3>
                                                        <div
                                                            className="banner-price-info font-weight-normal ls-normal text-white">
                                                            From <strong>$165.00</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-toy"></i>toys & Babycare
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-basketball"></i>Sports
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-heartbeat"></i>Healthy & Beauty
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-camera"></i>Cameras &amp; Photo
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-headphone"></i>Speaker
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-kettle"></i>Electric Kettle
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-air-conditioning"></i>Air Conditioning
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-vacuum"></i>Vacuum
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown-special-offers">
                            <h3 className="d-block text-dark font-weight-bolder dropdown-title pl-0 mb-0">Special Offers
                            </h3>
                            <a href="demo13.html">Rollbacks</a>
                            <a href="demo13.html">New Arrivals</a>
                            <a href="demo13.html">Only at Wolmart</a>
                        </div>
                        <div className="dropdown-nav">
                            <h3 className="d-block text-dark font-weight-bolder dropdown-title pl-0 pb-3 mb-0">Customer
                                Services</h3>
                            <nav className="main-nav">
                                <ul className="menu d-block">
                                    <li>
                                        <a href="demo13-shop.html">Shop
                                            <span className="submenu-toggle-btn"></span>
                                        </a>
                                        <ul className="megamenu">
                                            <li>
                                                <h4 className="menu-title">Shop Pages</h4>
                                                <ul>
                                                    <li><a href="shop-banner-sidebar.html">Banner With Sidebar</a></li>
                                                    <li><a href="shop-boxed-banner.html">Boxed Banner</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Full Width Banner</a></li>
                                                    <li><a href="shop-horizontal-filter.html">Horizontal Filter<span
                                                                className="tip tip-hot">Hot</span></a></li>
                                                    <li><a href="shop-off-canvas.html">Off Canvas Sidebar<span
                                                                className="tip tip-new">New</span></a></li>
                                                    <li><a href="shop-infinite-scroll.html">Infinite Ajax Scroll</a>
                                                    </li>
                                                    <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                    <li><a href="shop-both-sidebar.html">Both Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4 className="menu-title">Shop Layouts</h4>
                                                <ul>
                                                    <li><a href="shop-grid-3cols.html">3 Columns Mode</a></li>
                                                    <li><a href="shop-grid-4cols.html">4 Columns Mode</a></li>
                                                    <li><a href="shop-grid-5cols.html">5 Columns Mode</a></li>
                                                    <li><a href="shop-grid-6cols.html">6 Columns Mode</a></li>
                                                    <li><a href="shop-grid-7cols.html">7 Columns Mode</a></li>
                                                    <li><a href="shop-grid-8cols.html">8 Columns Mode</a></li>
                                                    <li><a href="shop-list.html">List Mode</a></li>
                                                    <li><a href="shop-list-sidebar.html">List Mode With Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4 className="menu-title">Product Pages</h4>
                                                <ul>
                                                    <li><a href="product-variable.html">Variable Product</a></li>
                                                    <li><a href="product-featured.html">Featured &amp; Sale</a></li>
                                                    <li><a href="product-accordion.html">Data In Accordion</a></li>
                                                    <li><a href="product-section.html">Data In Sections</a></li>
                                                    <li><a href="product-swatch.html">Image Swatch</a></li>
                                                    <li><a href="product-extended.html">Extended Info</a></li>
                                                    <li><a href="product-without-sidebar.html">Without Sidebar</a></li>
                                                    <li><a href="product-video.html">360<sup>o</sup> &amp; Video
                                                            <span className="tip tip-new">New</span></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4 className="menu-title">Product Layouts</h4>
                                                <ul>
                                                    <li><a href="product-default.html">Default<span
                                                                className="tip tip-hot">Hot</span></a></li>
                                                    <li><a href="product-vertical.html">Vertical Thumbs</a></li>
                                                    <li><a href="product-grid.html">Grid Images</a></li>
                                                    <li><a href="product-masonry.html">Masonry</a></li>
                                                    <li><a href="product-gallery.html">Gallery</a></li>
                                                    <li><a href="product-sticky-info.html">Sticky Info</a></li>
                                                    <li><a href="product-sticky-thumb.html">Sticky Thumbs</a></li>
                                                    <li><a href="product-sticky-both.html">Sticky Both</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="vendor-dokan-store.html">Vendor
                                            <span className="submenu-toggle-btn"></span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="vendor-dokan-store-list.html">Store Listing</a>
                                                <ul>
                                                    <li><a href="vendor-dokan-store-list.html">Store listing 1</a></li>
                                                    <li><a href="vendor-wcfm-store-list.html">Store listing 2</a></li>
                                                    <li><a href="vendor-wcmp-store-list.html">Store listing 3</a></li>
                                                    <li><a href="vendor-wc-store-list.html">Store listing 4</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="vendor-dokan-store.html">Vendor Store</a>
                                                <ul>
                                                    <li><a href="vendor-dokan-store.html">Vendor Store 1</a></li>
                                                    <li><a href="vendor-wcfm-store-product-grid.html">Vendor Store 2</a>
                                                    </li>
                                                    <li><a href="vendor-wcmp-store-product-grid.html">Vendor Store 3</a>
                                                    </li>
                                                    <li><a href="vendor-wc-store-product-grid.html">Vendor Store 4</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about-us.html">Pages
                                            <span className="submenu-toggle-btn"></span>
                                        </a>
                                        <ul>
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="become-a-vendor.html">Become A Vendor</a></li>
                                            <li><a href="contact-us.html">Contact Us</a></li>
                                            <li><a href="faq.html">FAQs</a></li>
                                            <li><a href="error-404.html">Error 404</a></li>
                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="compare.html">Compare</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="elements.html">Elements
                                            <span className="submenu-toggle-btn"></span>
                                        </a>
                                        <ul>
                                            <li><a href="element-accordions.html">Accordions</a></li>
                                            <li><a href="element-alerts.html">Alert &amp; Notification</a></li>
                                            <li><a href="element-blog-posts.html">Blog Posts</a></li>
                                            <li><a href="element-buttons.html">Buttons</a></li>
                                            <li><a href="element-cta.html">Call to Action</a></li>
                                            <li><a href="element-icons.html">Icons</a></li>
                                            <li><a href="element-icon-boxes.html">Icon Boxes</a></li>
                                            <li><a href="element-instagrams.html">Instagrams</a></li>
                                            <li><a href="element-categories.html">Product Category</a></li>
                                            <li><a href="element-products.html">Products</a></li>
                                            <li><a href="element-tabs.html">Tabs</a></li>
                                            <li><a href="element-testimonials.html">Testimonials</a></li>
                                            <li><a href="element-titles.html">Titles</a></li>
                                            <li><a href="element-typography.html">Typography</a></li>
                                            <li><a href="element-vendors.html">Vendors</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="https://d-themes.com/buynow/wolmartwp">Buy Wolmart</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </aside>
    )
}

export default Sidebar;
