import React from "react";
import PropTypes from "prop-types";

const BannerImg = ({ logement, src, alt }) => {
    if (src && alt) {
        return <img type="image" className="banner__container--img" src={src} alt={alt} />;
    }
    if (!logement || !logement.cover) {
        return null; // Retourne null si logement ou cover est manquant
    }
    const { cover, id } = logement;
    return (
        <img type="image" className="banner__container--img" src={cover} key={id} alt="banner" />
    );
};

BannerImg.propTypes = {
    logement: PropTypes.shape({
        cover: PropTypes.string,
        id: PropTypes.string,
    }),
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default BannerImg;