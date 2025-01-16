import { useParams, useNavigate} from 'react-router-dom';
import logements from '../data/logements.json';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Logement() {
    const { id } = useParams(); // Récupère l'ID depuis l'URL
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Trouve le logement correspondant à l'ID
    const logement = logements.find(logement => logement.id === id);

    return (
        <div className="logement">
            <img src={logement.pictures[currentIndex]} alt={`Photo ${currentIndex + 1}`} />
        
        </div>
    );
}

export default Logement;