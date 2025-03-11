import React from 'react';
import logements from '../../../Datas/logements.json';

const Card = ({id, title, cover}) => {
    //todo: ajouter le lien vers la page détails la clé est l'id du logement.
    return (
        <a href="#" className="cardLink" key={id}> 
            <figure className="card__container">
                <img src={cover} alt={title} className="card__container--Img" />
                <figcaption className="card__container--caption">
                    <h2 className="cardTitle">{title}</h2>
                </figcaption>
            </figure>
        </a>
    )
}

const Cards = () => {
    return(
        <section className="cards__container">
            {logements.map((logement) => (
                <Card 
                key={logement.id} 
                id={logement.id} 
                title={logement.title} 
                cover={logement.cover} 
                />
            ))}
        </section>
    );
};
export default Cards;