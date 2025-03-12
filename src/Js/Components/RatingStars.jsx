import React from 'react';
//import "../../Css/Components/RatingStars.css";

const RatingStars = ({ rating }) => {
    const stars = parseInt(rating);
    const totalStars = 5;
    const pinkStarsArray = Array(stars).fill(0);
    const greyStarsArray = Array(totalStars - stars).fill(0);

    return (
        <div className='rating'>
            <div className='rating__container'>
                {pinkStarsArray.map((_, index) => (
                    <span key={`pink-${index}`} className='rating__container--PinkStars'></span>
                ))}
                {greyStarsArray.map((_, index) => (
                    <span key={`grey-${index}`} className='rating__container--GreyStars'></span>
                ))}
            </div>
        </div>
    );
};

export default RatingStars;