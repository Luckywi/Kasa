import { Link } from 'react-router-dom';
import {} from '../styles/main.scss';
import home from '../assets/home.svg';

function Home() {
    return (
        <div className="home">
            <Link to="">
                <img src={home} alt="Image page d'aceuill"/>
                <h1>Chez vous, partout et ailleurs</h1>
            </Link>
        </div>
    );
}

export default Home;