import React from 'react';
import "../../Css/Components/Banner.css";

const Banner = ({ children, assets }) => {
    return (
        <section className="banner">
            <div className="banner__container">
                {children ? (
                    children
                ) : (
                    <>
                        <img className="bannerImg" src={assets} alt="banner" />
                        <div className="banner__container--text">
                            {}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Banner;