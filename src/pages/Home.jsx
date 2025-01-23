import {} from '../styles/main.scss';
import home from '../assets/home.svg';
import logements from '../data/logements.json';
import Banner from '../components/Banner';
import Card from '../components/Card';


function Home() {
    return (
      <div className="home">
        <Banner image={home} text="Chez vous, partout et ailleurs" />

        <div className="main-container">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              cover={logement.cover}
              title={logement.title}
            />
          ))}
        </div>
      </div>
    );
  }
  
export default Home;