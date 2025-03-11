import React from 'react';
//import '../../Css/Pages/Home.css';
import Banner from '../Components/Banner.jsx';
import BannerTitle from '../Components/BannerTitle.jsx';
import homeBannerImg from '../../Assets/IMG/BannerPicture.png';

const Home = () => {
    console.log(homeBannerImg);
    console.log('BannerTitle', BannerTitle);    
    return (
        <div className="home">
            <Banner assets={homeBannerImg}>
                <BannerTitle />
            </Banner>    
         
            
        </div>
    );
};

export default Home;