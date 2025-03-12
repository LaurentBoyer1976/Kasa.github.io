import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <section className='error__container'>
            <h1 className='error__container--title'>404</h1>
            <p className='error__container--message'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className='error__container--link'>Retourner à la page d'accueil</Link>
        </section>
    );
}
export default Error404;