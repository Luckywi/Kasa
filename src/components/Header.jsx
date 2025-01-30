import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import logoMobile from '../assets/logoMobile.svg';

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo KASA" className="logo-desktop"/>
                <img src={logoMobile} alt="Logo Kasa"className="logo-mobile"/>
            </Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header