import logoFooter from '../assets/logoFooter.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <Link to="/">
                <img src={logoFooter} alt="Logo KASA Footer" />
            </Link>
            <p>© 2024 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer