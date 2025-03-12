import React from 'react';
import Tags from './Tags';
import RatingStars from './RatingStars';
import CollapseBtn from './CollapseBtn';


const TagsAndStars = () => {
    return (
        <section className='tagsAndStars'>
            <Tags />
            <RatingStars />
        </section>
    )
}






const AccommodationInformations = () => {
    return (
        <article className='informations'>
            <TagsAndStars />

        </article>
    )

}

export default AccommodationInformations;