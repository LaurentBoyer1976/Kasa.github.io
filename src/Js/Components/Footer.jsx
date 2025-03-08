import './Footer.css';

const Footer = () => {
    return (
<footer className="footer">
    <div className="footer__container">
        <div className="footer__container--logo">
            <img className="footerLogo" src="../../assets/Kasa_LOGO.svg" alt="logo Kasa"></img>
        </div>
        <div className="footer__container--legal">
            <p className="legalMention">© 2020 Kasa. All rights reserved</p>
        </div>
    </div>
</footer>

    );
};
export default Footer;