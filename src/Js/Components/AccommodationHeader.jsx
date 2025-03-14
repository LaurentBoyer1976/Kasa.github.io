import React from 'react';


const AccommodationHeaderTitle = ({title, location}) => {
    return(
    <hgroup className='rent__container'>
        <h1 className='rent__container--name'>{title}</h1>
        <h2 className='rent__container--location'>{location}</h2>
    </hgroup>
    );    
}

const HostProfile =(name) => {
    const hostName = [name.name];
    const [surname, firstname] = hostName[0].split(' ');
    return(
        <figcaption className='host__description'>
            <p className='host__description--surname'>{surname}</p>
            <p className='host__description--firstname'>{firstname}</p>
        </figcaption>
    );
}

const HostPortrait = ({picture, name}) => {
    return (
    <div className='host__picture'>
        <img src={picture} alt={name} className='host__picture--img'></img>
    </div>
    );
}

const Host = ({name, picture}) => {
    return(
    <figure className='host'>
        <HostProfile name={name} />
        <HostPortrait picture={picture} name={name} />       
    </figure> 
    );
}


const AccommodationHeader = ({logement}) => {
    const {id, title, location, host} = logement;
    const {name, picture} = host;
    return (
    <header className='accommodation__header' key={id}>
        <AccommodationHeaderTitle title={title} location={location} />
        <Host name={name} picture={picture} />     
    </header>
    );
};


export default AccommodationHeader;