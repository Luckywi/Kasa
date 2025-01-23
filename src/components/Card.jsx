import { Link } from 'react-router-dom';

function Card({ id, cover, title }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card-cover" />
      <h1>{title}</h1>
    </Link>
  );
}

export default Card;
