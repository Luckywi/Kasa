import { Star } from 'lucide-react';

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  
  return (
    <div className="logement-rating">
      {stars.map((star) => (
        <span key={star} className={star <= rating ? "star-filled" : "star-empty"}>
          <Star />
        </span>
      ))}
    </div>
  );
}

export default Rating;
