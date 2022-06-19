import React from 'react';

const NotificationWrapper = () => {
    return (
        <div className="notification-wrapper d-flex justify-content-center bg-primary br-sm mb-10 mt-7 appear-animate"
            style={{animationDuration: "1.2s"}} >
            <div className="content align-items-center">
                <p className="font-weight-normal ls-normal">Download our new app today! Dont Miss our
                    mobile-only offers and shop with Android Play.</p>
                <a href="#"
                    className="btn btn-white btn-outline btn-rounded btn-sm btn-icon-right font-weight-bold text-capitalize ml-auto">
                    Download<i className="w-icon-long-arrow-down"></i>
                </a>
            </div>
        </div>
    )
}

export default NotificationWrapper;