import React from 'react';
import Tags from './Tags';
import RatingStars from './RatingStars.jsx';
import EquipmentsList from './List.jsx';
import CollapseBtn from './CollapseBtn.jsx';


const TagsAndStars = ({tags, rating}) => {
    return (
        <section className='tagsAndStars'>
            <Tags tags={tags} />
            <RatingStars rating={rating}/>
        </section>
    )
}
const InformationsToggleBtn = ({ description, equipments }) => {
    return (
        <section className='informationsToggleBtn'>
            <CollapseBtn title="Description">
                {description}
            </CollapseBtn>
            <CollapseBtn title="Équipements">
                <EquipmentsList equipments={equipments} />
            </CollapseBtn>
        </section>
    );
}

const AccommodationInformations = ({ logement }) => {
    const { description, equipments, tags=[], rating } = logement;

    return (
        <article className='informations'>
            <TagsAndStars tags={tags} rating={rating} />
            <InformationsToggleBtn description={description} equipments={equipments} />
        </article>
    );
}

export default AccommodationInformations;