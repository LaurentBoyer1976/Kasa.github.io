import React from "react";

const BannerImg = ({logement}) => {
    const {cover, id} = logement;
    return (
        <img type='image' className="banner__container--img" src={cover} key={id} alt="banner" />
    );
};

export default BannerImg;