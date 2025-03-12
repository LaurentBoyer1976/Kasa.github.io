import React from 'react';
//import logements from '../../../Datas/logements.json';
import Banner from '../Components/Banner';
import AccommodationHeader from '../Components/AccommodationHeader.jsx';
import AccommodationInformations from '../Components/AccommodationInformation.jsx';
import SlidingPicture from '../Components/SlidingPicture.jsx';
//import { useParams } from 'react-router';




const AccommodationContent = ({logement}) => {
    return (
        <section className='accommodation__container'>
            <AccommodationHeader logement={logement}/>
            <AccommodationInformations logement={logement}/>
        </section>
    );
}


const Accommodations = () => {
    
    //todo : Ajouter la logique pour récupérer les données du logement en fonction du clic sur le card
    //const {id} = useParams();
    //const logement = logements.find((logement) => logement.id === id);    
    //const {title, cover, pictures, description, host, rating, location, equipments, tags}= logement;

    return (
        <article className='accommodations'>
            <Banner>
                <SlidingPicture /*logement={logement}*//>
            </Banner> 
            <AccommodationContent /*logement={logement}*//>
        </article>
    );
};

export default Accommodations;