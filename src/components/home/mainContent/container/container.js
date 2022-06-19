import React from 'react';
import CategoryBannerWrapper from './CategoryBannerWrapper';
import ClothingApparel from './ClothingApparel';
import ConsumerElectric from './ConsumerElectric';
import DealsOfTheWeek from './dealOfTheWeek';
import FromOurBlog from './FromOurBlog';
import HomeFurnitures from './HomeFurnitures';
import IntroBanner from './introBanner';
import NotificationWrapper from './notificationWrapper';
import RecentlyViewed from './RecentlyViewed';
import SaleBanner from './SaleBanner';
import SwiperContainer from './swiperContainer';
import TopCategoriesOfTheMonth from './topCategoriesOfTheMonth';
import TopWeeklyVendors from './TopWeeklyVendors';

const Container = () => {
    return (
        <div className="container">
            <IntroBanner />
            {/* <!-- End of Intro Banner Group --> */}
            <SwiperContainer />
            {/* <!-- End of Icon Box Wrapper --> */}
            <DealsOfTheWeek />
            {/* <!-- End of Product Grid --> */}
            <NotificationWrapper />
            {/* <!-- End of Notification Wrapper --> */}
            <TopCategoriesOfTheMonth />
            {/* <!-- End of Top Categories Wrapper --> */}
            <TopWeeklyVendors />
            {/* <!-- End of Vendor Wrapper --> */}
            <CategoryBannerWrapper />
            {/* <!-- End of Category Banner Wrapper --> */}
            <ConsumerElectric />
            {/* <!-- End of Grid Product Wrapper --> */}
            <SaleBanner />
            {/* <!-- End of Sale Banner --> */}
            <HomeFurnitures />
            {/* <!-- End of Filter Product Wrapper --> */}
            <ClothingApparel />
            {/* <!-- End of Brands Wrapper --> */}
            <FromOurBlog />
            {/* <!-- End of Blog Post --> */}
            <RecentlyViewed />
            {/* <!-- End of Recently View --> */}
        </div>
    )
}

export default Container;