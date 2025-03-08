import { Link } from "react-router-dom";
import "./NavBar.css";


const NavLink = ({ link, text }) => {
    return (
        <li className="navLink" >
            <Link className="navLink__link" to={link}>{text}</Link>
        </li>
    )
}

const LogoKasa = () => {
    return (
        <Link className="containerLogo" to="/">
                <img className="containerLogo__Kasa" src="../../assets/Kasa_LOGO.svg" alt="logo Kasa"></img>
        </Link>
    )
}

const NavBar = () => {
    return (
        <nav className="nav">
            <LogoKasa />
            <ul className="navList">
                <NavLink link="/" text="Accueil" />
                <NavLink link="/about" text="À propos" />
            </ul>

        </nav>
    )

};
export { NavBar, LogoKasa };