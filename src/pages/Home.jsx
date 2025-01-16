import { Link } from 'react-router-dom';
import {} from '../styles/main.scss';
import home from '../assets/home.svg';
import logements from '../data/logements.json'


function Home() {
    return (
        <div className="home">
            {/* Section bannière */}
            <div className="home-banner">
                <img src={home} alt="Image page d'accueil"/>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            {/* Section des cartes de logements */}
            <div className='main-container'>
                {logements.map((logement) => {
                    return (
                        <Link key={logement.id} to={`/logement/${logement.id}`} className='card'> 
                            <img src={logement.cover} alt={'logement.title'} className="card-cover"></img>
                            <h1>{logement.title}</h1>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}


export default Home;