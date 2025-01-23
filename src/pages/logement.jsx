import { useParams, useNavigate} from 'react-router-dom';
import logements from '../data/logements.json';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ChevronDown } from 'lucide-react';

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

    const stars = [1, 2, 3, 4, 5];


    const [openSections, setOpenSections] = useState([]); // On utilise un 
    
    const handleClick = (sectionName) => {  // sectionName sera soit "description" soit "equipements"
        if (openSections.includes(sectionName)) {
            setOpenSections(openSections.filter(name => name !== sectionName));
        } else {
            setOpenSections([...openSections, sectionName]);
        }
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
        <img src={logement.host.picture} alt={logement.host.name}></img>
        </div>
        </div>

        <div className='tags-and-rating'>

    <div className='tag-display'>
        {logement.tags.map((tag) => (
            <h4 key={tag} className='tag'>{tag}</h4>
        ))}
    </div>

    <div className='logement-rating'>
        {stars.map((star) => (
            <span key={star} className={star <= logement.rating ? "star-filled" : "star-empty"}><Star /></span>
        ))}
    </div>
</div>


<div className='logement-spec'>
        <div className='collapse-section'>
        <div className='collapse-header' onClick={() => handleClick("description")}>
    <h1>Description</h1>
    <ChevronDown className={`chevron ${openSections.includes("description") ? 'rotate' : ''}`}/>
</div>

            {openSections.includes("description") && (
                <div className="collapse-content">
                    <p>{logement.description}</p>
                </div>
            )}
        </div>

        <div className='collapse-section'>
            <div className='collapse-header' onClick={() => handleClick("equipements")}>
    <h1>Équipements</h1>
    <ChevronDown className={`chevron ${openSections.includes("equipements") ? 'rotate' : ''}`}/>
</div>

            {openSections.includes("equipements") && (
                <div className="collapse-content">
                    {logement.equipments.map((equipement) => (
                        <p key={`${logement.id}-equipment-`}>{equipement}</p>
                    ))}
                </div>
            )}
        </div>

            


            


        </div>

</div>

        
    );
}

export default Logement;