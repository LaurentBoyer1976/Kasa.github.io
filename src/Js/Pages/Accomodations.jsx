import React from 'react';
//import logements from '../../../Datas/logements.json';
import Banner from '../Components/Banner';
import AccommodationHeader from '../Components/AccommodationHeader.jsx';
import AccommodationInformations from '../Components/AccommodationInformation.jsx';
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
    //todo : Ajouter le compteur d'image sur le banner format 1/x quand le nombre d'image est supérieur à 1
    //todo : Ajouter la logique pour récupérer les données du logement en fonction du clic sur le card
    //const {id} = useParams();
    //const logement = logements.find((logement) => logement.id === id);    
    //const {title, cover, pictures, description, host, rating, location, equipments, tags}= logement;
    
    return (
        <article className='accommodations'>
            <Banner assets={'#'} />
            <AccommodationContent /*logement={logement}*//>
        </article>
    );
};

export default Accommodations;