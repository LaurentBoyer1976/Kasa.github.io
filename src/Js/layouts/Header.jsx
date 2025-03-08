import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="header">
            <nav className="nav">
                <Link to="/">
                    <img className="headerLogo" src="*" alt="logo Kasa"></img>
                </Link>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">À propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;