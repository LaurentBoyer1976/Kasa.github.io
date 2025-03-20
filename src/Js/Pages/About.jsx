import React from 'react';
import contents from '../../../Datas/about.json';
import Banner from '../Components/Banner.jsx';
import aboutBannerImg from '../../assets/IMG/BannerPicture2.png'; // Mocked in Jest configuration
import CollapseBtn from '../Components/CollapseBtn.jsx';
import '../../Css/Pages/About.css';


const AboutContent= () => {
    return(
        <section className="CollapseListBtn__container">
           {contents.map((content)=>(
            <CollapseBtn
                key={content.id}
                id={content.id}
                title={content.title}
                children={content.content}
            />
           ))}
        </section>
    )
};
const About = () => {
    return (
        <div className='about'>
            <Banner type='image' logement={{ cover: aboutBannerImg}}/>
            <article className='about__content'>
                <AboutContent />
            </article>
        </div>
    );
};

export default About;