import React from 'react';
//import '../../Css/Pages/Home.css';
import Banner from '../Components/Banner.jsx';
import BannerTitle from '../Components/BannerTitle.jsx';
import homeBannerImg from '../../Assets/IMG/BannerPicture.png';
import Cards from '../Components/Cards.jsx';

const Home = () => {   
    return (
        <div className="home">
            <Banner assets={homeBannerImg}>
                <BannerTitle />
            </Banner>
            <article className="home__content">
                <Cards />
            </article>    
         
            
        </div>
    );
};

export default Home;