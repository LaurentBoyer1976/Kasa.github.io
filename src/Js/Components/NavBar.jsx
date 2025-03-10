import { Link } from "react-router-dom";
import logo from "../../assets/Kasa_LOGO.svg";
//import "./NavBar.css";


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
                <img className="containerLogo__Kasa" src={logo} alt="logo Kasa"></img>
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
export default NavBar;