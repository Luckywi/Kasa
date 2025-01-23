import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Collapse from '../components/Collapse';
import TagList from '../components/Tag';
import Rating from '../components/Star';
import HostInfo from '../components/HostInfo';
import Info from '../components/Info';
import Carousel from '../components/Carousel';

function Logement() {
    const { id } = useParams(); // Récupère l'ID depuis l'URL
    const logement = logements.find(logement => logement.id === id);


    return (
        <div className="logement">

        <Carousel pictures={logement.pictures} />

        <div className='logement-header'>

        <Info title={logement.title} location={logement.location} />

        <HostInfo host={logement.host} />
        </div>

        <div className='tags-and-rating'>

        <TagList tags={logement.tags} />
        <Rating rating={logement.rating} />
</div>


<div className="logement-spec">
  <Collapse
    title="Description"
    content={logement.description}
  />
  <Collapse
    title="Équipements"
    content={logement.equipments}
  />
</div>

            
        </div>


        
    );
}

export default Logement;