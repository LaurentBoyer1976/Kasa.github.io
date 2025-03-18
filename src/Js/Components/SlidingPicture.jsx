import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "../../Css/Components/SlidingPicture.css";

const LeftArrow = () => {
    return (
        <FontAwesomeIcon
            icon={faChevronLeft}
            className="slidingPicture__container--previous-icon"
        />
    );
}

const RightArrow = () => {
    return (
        <FontAwesomeIcon
            icon={faChevronRight}
            className="slidingPicture__container--next-icon"
        />
    );
}

const SlidingPicture = ({ logement }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const gallery = logement.pictures;
    const totalPictures = gallery.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);
    };

    return (
        <div type='slideshow' className='slidingPicture'>
            <div className='slidingPicture__container'>
                {totalPictures > 1 && (
                    <span className='slidingPicture__container--previous' onClick={handlePrevious}><LeftArrow /></span>
                )}
                {gallery.map((picture, index) => (
                    <img
                        key={index}
                        src={picture}
                        alt={`Slide ${index}`}
                        className={`slidingPicture__container--img ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}
                {totalPictures > 1 && (
                    <span className='slidingPicture__container--next' onClick={handleNext}><RightArrow /></span>
                )}
            </div>
            {totalPictures > 1 && (
                <span className='picture__counter'>{currentIndex + 1}/{totalPictures}</span>
            )}
        </div>
    );
};

export default SlidingPicture;
