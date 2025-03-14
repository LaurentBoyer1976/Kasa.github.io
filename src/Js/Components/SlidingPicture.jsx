import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


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
                <span className='slidingPicture__container--previous' onClick={handlePrevious}><LeftArrow /></span>
                <img src={gallery[currentIndex]} alt={logement.title} className="slidingPicture__container--img" />            
                <span className='slidingPicture__container--next' onClick={handleNext}><RightArrow /></span>
            </div>
            { totalPictures <= 1 ? null : <span className='picture__counter'>{currentIndex+1}/{totalPictures}</span>}            
        </div>
        
    );
};

export default SlidingPicture;
