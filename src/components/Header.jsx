import { Link } from 'react-router-dom';
import {} from '../styles/main.scss';
import logo from '../assets/logo.svg';

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo KASA"/>
            </Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header