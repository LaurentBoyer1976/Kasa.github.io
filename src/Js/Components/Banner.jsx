import React from 'react';
import SlidingPicture from './SlidingPicture.jsx';
import BannerImg from './BannerImg.jsx';

const Banner = ({ children, logement, type, assets = null }) => {
    return (
        <section className="banner">
            <div className="banner__container">
                {type === "image" && logement && <BannerImg logement={logement} />}
                {type === "slideshow" && logement && <SlidingPicture logement={logement} />}
                {type === "image" && !logement && assets && (
                    <img src={assets} alt="Default banner" className="banner__container--img" loading="lazy" />
                )}
                {children && (
                    <div className="banner__container--text">
                        {children}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Banner;