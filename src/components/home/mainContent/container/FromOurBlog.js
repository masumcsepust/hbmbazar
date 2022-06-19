import React from 'react';

const FromOurBlog = () => {
    return (
        <div>
            <div className="title-link-wrapper title-post mb-4 after-none appear-animate">
                <h2 className="title ls-normal pt-1 pb-1">From Our Blog</h2>
                <a href="blog-listing.html" className="btn btn-link mb-0">
                    View All Articles
                    <i className="w-icon-long-arrow-right"></i>
                </a>
            </div>
            <div className="swiper-container swiper-theme post-wrapper pb-2 appear-animate" data-swiper-options="{
                'slidesPerView': 1,
                'spaceBetween': 20,
                'breakpoints': {
                    '576': {
                        'slidesPerView': 2
                    },
                    '768': {
                        'slidesPerView': 3
                    },
                    '992': {
                        'slidesPerView': 4,
                        'dots': false
                    }
                }
            }">
                <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
                    <div className="swiper-slide post overlay-zoom text-center">
                        <figure className="post-media br-sm">
                            <a href="post-single.html">
                                <img src="assets/images/demos/demo13/blog/post-1.jpg" alt="Post" style={{width:"325px", height:"220px", backgroundColor: "#DBE0E4"}} />
                            </a>
                        </figure>
                        <div className="post-details pb-5">
                            <div className="post-meta">
                                by <a href="#" className="post-author">John Doe</a>
                                - <a href="#" className="post-date mr-0">06. 16. 2021</a>
                            </div>
                            <h4 className="post-title"><a href="post-single.html">Aliquam tincidunt mauris
                                    eurisus</a></h4>
                            <a href="post-single.html" className="btn btn-link btn-dark btn-underline">
                                Read More<i className="w-icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide post overlay-zoom text-center">
                        <figure className="post-media br-sm">
                            <a href="post-single.html">
                                <img src="assets/images/demos/demo13/blog/post-2.jpg" alt="Post" style={{width:"325px", height:"220px", backgroundColor: "#E7E5E8"}} />
                            </a>
                        </figure>
                        <div className="post-details pb-5">
                            <div className="post-meta">
                                by <a href="#" className="post-author">John Doe</a>
                                - <a href="#" className="post-date mr-0">06. 16. 2021</a>
                            </div>
                            <h4 className="post-title"><a href="post-single.html">Nullam mattis mi at metus
                                    egestas</a></h4>
                            <a href="post-single.html" className="btn btn-link btn-dark btn-underline">
                                Read More<i className="w-icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide post overlay-zoom text-center">
                        <figure className="post-media br-sm">
                            <a href="post-single.html">
                                <img src="assets/images/demos/demo13/blog/post-3.jpg" alt="Post" style={{width:"325px", height:"220px", backgroundColor: "#F0F0F2"}} />
                            </a>
                        </figure>
                        <div className="post-details pb-5">
                            <div className="post-meta">
                                by <a href="#" className="post-author">John Doe</a>
                                - <a href="#" className="post-date mr-0">06. 16. 2021</a>
                            </div>
                            <h4 className="post-title"><a href="post-single.html">Quisque elementum nibh at dolor
                                    pellentesque</a></h4>
                            <a href="post-single.html" className="btn btn-link btn-dark btn-underline">
                                Read More<i className="w-icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-slide post overlay-zoom text-center">
                        <figure className="post-media br-sm">
                            <a href="post-single.html">
                                <img src="assets/images/demos/demo13/blog/post-4.jpg" alt="Post" style={{width:"325px", height:"220px", backgroundColor: "#E3E8EB"}} />
                            </a>
                        </figure>
                        <div className="post-details pb-5">
                            <div className="post-meta">
                                by <a href="#" className="post-author">John Doe</a>
                                - <a href="#" className="post-date mr-0">06. 16. 2021</a>
                            </div>
                            <h4 className="post-title"><a href="post-single.html">Etiam laoreet sem eget eros
                                    rhoncus</a></h4>
                            <a href="post-single.html" className="btn btn-link btn-dark btn-underline">
                                Read More<i className="w-icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FromOurBlog;