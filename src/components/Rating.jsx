import { Star } from 'lucide-react';

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5]; // On crée un tableau de 5 étoiles

  return (
    <div className="logement-rating">
      {stars.map((star) => (
        // Si le nombre est inférieur ou égal à la note, l'étoile est pleine sinon elle est vide
        <span key={star} className={star <= rating ? "star-filled" : "star-empty"}>
          <Star />
        </span>
      ))}
    </div>
  );
}

export default Rating;
