import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0); // On garde en mémoire quelle image est affichée (commence à 0)
  const totalPhotos = pictures.length; // On compte combien il y a d'images au total

  const increment = () => {
    setCurrentIndex((currentIndex + 1) % totalPhotos); // Fonction pour passer à l'image suivante
  };

  const decrement = () => {
    setCurrentIndex((currentIndex - 1 + totalPhotos) % totalPhotos); // Fonction pour revenir à l'image précédente
  };

  return (
    <div className="photo-container">
      <img
        src={pictures[currentIndex]} // Affiche automatiquement la première photo du tableau 
        alt={`Photo ${currentIndex + 1}`} // Ajoute 1 pour éviter le "Photo 0"
      />
      {totalPhotos > 1 && ( // Si + d'une photo on affiche les fléches et le compteur
        <>
          <div className="photo-content">
            <ChevronLeft className="prev" onClick={decrement} />
            <ChevronRight className="next" onClick={increment} />
          </div>
          <div className="counter">
            {currentIndex + 1} / {totalPhotos}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;