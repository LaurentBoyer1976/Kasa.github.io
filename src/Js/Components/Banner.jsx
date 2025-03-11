
import "../../Css/Components/Banner.css";




const Banner = ({children, assets}) => {
    return(
        <section className="banner">
            <div className="banner__container">
                <img className="bannerImg" src={assets} alt="banner"></img>
                <div className="banner__container--text">
                    {children}
                </div>    
            </div>
        </section>
    )
}

export default Banner;
