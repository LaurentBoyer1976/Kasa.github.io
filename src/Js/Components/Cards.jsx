import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../../../Datas/logements.json';
import '../../Css/Components/Cards.css';

const Card = ({id, title, cover}) => {
    return (
        <Link to={`/accommodations/${id}`} className="cardLink" key={id}> 
            <figure className="cardLink__container">
                <img src={cover} alt={title} className="cardLink__container--Img" />
                <figcaption className="cardLink__container--caption">
                    <h2 className="cardLink__container--caption-title">{title}</h2>
                </figcaption>
            </figure>
        </Link>
    )
}

const Cards = () => {
    console.log(logements.length);
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