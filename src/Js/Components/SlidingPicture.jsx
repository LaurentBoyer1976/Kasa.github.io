import React, {useState} from 'react';


const SlidingPicture = ({ logement }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const gallery = [logement.cover, ...logement.pictures];
    const totalPictures = gallery.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);
    };
    return (
        <div className='slidingPicture'>
            <div className='slidingPicture__container'>
                <span className='slidingPicture__container--previous' onClick={handlePrevious}></span>
                <img src={gallery[currentIndex]} alt={logement.title} className="slidingPicture__container--img" />            
                <span className='slidingPicture__container--next' onClick={handleNext}></span>
            </div>
            { totalPictures <= 1 ? null : <span className='picture__counter'>{currentIndex+1}/{totalPictures}</span>}            
        </div>
        
    );
};

export default SlidingPicture;
