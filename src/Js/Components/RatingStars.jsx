import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "../../Css/Components/RatingStars.css";

const PinkStars = () => {
    return (
        <FontAwesomeIcon 
            icon={faStar} 
            className="rating__container--Stars-Pink"
            aria-hidden='false'
            data-testid="pink-star" // Ajout de l'attribut data-testid
        />
    );
}

const GreyStars = () => {
    return (
        <FontAwesomeIcon 
            icon={faStar} 
            className="rating__container--Stars-Grey"
             aria-hidden='false'
            data-testid="grey-star" // Ajout de l'attribut data-testid
        />
    );
}

const RatingStars = ({ rating }) => {
    const stars = parseInt(rating);
    const totalStars = 5;
    const pinkStarsArray = Array(stars).fill(0);
    const greyStarsArray = Array(totalStars - stars).fill(0);

    return (
        <div className='rating'>
            <div className='rating__container'>
                {pinkStarsArray.map((_, index) => (
                    <span key={`pink-${index}`} className='rating__container--Stars'><PinkStars /></span>
                ))}
                {greyStarsArray.map((_, index) => (
                    <span key={`grey-${index}`} className='rating__container--Stars'><GreyStars /></span>
                ))}
            </div>
        </div>
    );
};

export default RatingStars;