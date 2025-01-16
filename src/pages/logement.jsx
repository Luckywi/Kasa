import { useParams, useNavigate} from 'react-router-dom';
import logements from '../data/logements.json';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Logement() {
    const { id } = useParams(); // Récupère l'ID depuis l'URL
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const increment = () => {
        setCurrentIndex((currentIndex +1) % totalPhoto);
    }
    const decrement = () => {
        setCurrentIndex((currentIndex -1 + totalPhoto) % totalPhoto);
    }

    
    
    // Trouve le logement correspondant à l'ID
    const logement = logements.find(logement => logement.id === id);
    const totalPhoto =logement.pictures.length ;

    return (
        <div className="logement">

        <div className='photo-container'>
            <img src={logement.pictures[currentIndex]} alt={`Photo ${currentIndex + 1}`} />

            <div className='photo-content'>
            <ChevronLeft className='prev' onClick={decrement}> </ChevronLeft>
            <ChevronRight className='next' onClick={increment}> </ChevronRight>
            </div>

            <div className='counter'>
        {currentIndex + 1} / {totalPhoto}
            </div>
        </div>

        <div className='logement-header'>
        <div className='info-logement'>

        <h1 className='titre-logement'>{logement.title}</h1>
        <h1 className='loc-logement'>{logement.location}</h1>

        </div>

        <div className='host-info'>
        <h1 className='host-logement'>
        {logement.host.name.split(' ')[0]}<br/>
        {logement.host.name.split(' ')[1]}
        </h1>
        <img src={logement.host.picture}></img>
        </div>
        </div>


        <div className='tag-display'>
        {logement.tags.map((tag) => (
    <h4 key={tag} className='tag'>{tag}</h4>
        ))}
</div>

            

        

        
        </div>
    );
}

export default Logement;