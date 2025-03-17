import React from 'react';
import SlidingPicture from './SlidingPicture.jsx';
import BannerImg from './BannerImg.jsx';


const Banner = ({ children,logement, type }) => {
    return (
        <section className="banner">
            <div className="banner__container">
                {type === "image" && <BannerImg logement={logement} />}
                {type === "slideshow" && <SlidingPicture logement={logement} />}
                {type === "image" && children && (                                                                
                    <div className="banner__container--text">
                        {children}
                    </div>                 
                )}
            </div>
        </section>
    );
};

export default Banner;