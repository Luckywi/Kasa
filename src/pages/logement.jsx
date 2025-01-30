import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json';
import Collapse from '../components/Collapse';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import HostInfo from '../components/HostInfo';
import Info from '../components/Info';
import Carousel from '../components/Carousel';

function Logement() {
    const { id } = useParams(); // Récupère l'ID depuis l'URL
    const logement = logements.find(logement => logement.id === id);

    if (!logement) {
        return <Navigate to="/NotFound" replace />;
    }

    return (
        <div className="logement">

        <Carousel pictures={logement.pictures} />

        <div className='logement-header'>

        <div className='title-and-location'>

        <Info title={logement.title} location={logement.location} />

        <Tag tags={logement.tags} />

        </div>
        

        <div className='host-and-rating'>

        <HostInfo host={logement.host} />
        <Rating rating={logement.rating} />
        </div>
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