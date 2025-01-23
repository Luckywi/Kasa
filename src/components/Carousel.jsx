import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPhotos = pictures.length;

  const increment = () => {
    setCurrentIndex((currentIndex + 1) % totalPhotos);
  };

  const decrement = () => {
    setCurrentIndex((currentIndex - 1 + totalPhotos) % totalPhotos);
  };

  return (
    <div className="photo-container">
      <img 
        src={pictures[currentIndex]} 
        alt={`Photo ${currentIndex + 1}`} 
      />
      <div className="photo-content">
        <ChevronLeft className="prev" onClick={decrement} />
        <ChevronRight className="next" onClick={increment} />
      </div>
      <div className="counter">
        {currentIndex + 1} / {totalPhotos}
      </div>
    </div>
  );
}

export default Carousel;