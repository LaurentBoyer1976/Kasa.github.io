import React from 'react';
import { useParams, Navigate } from 'react-router';
import logements from '../../../Datas/logements.json';
import Banner from '../Components/Banner.jsx';
import SlidingPicture from '../Components/SlidingPicture.jsx';
import AccommodationHeader from '../Components/AccommodationHeader.jsx';
import AccommodationInformations from '../Components/AccommodationInformation.jsx';






const AccommodationContent = ({ logement }) => {
    return (
        <section className='accommodation__container'>
            <AccommodationHeader logement={logement}/>
            <AccommodationInformations logement={logement}/>
        </section>
    );
}


const Accommodations = () => {
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id);    
    
    if (!logement) {
        return <Navigate to="/404" />;
    }

    return (
        <article className='accommodations'>
            <Banner>
                <SlidingPicture logement={logement}/>
            </Banner> 
            <AccommodationContent logement={logement}/>
        </article>
    );
};

export default Accommodations;